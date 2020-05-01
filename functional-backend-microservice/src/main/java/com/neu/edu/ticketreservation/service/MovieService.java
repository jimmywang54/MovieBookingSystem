package com.neu.edu.ticketreservation.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.bean.movie.Film;
import com.neu.edu.ticketreservation.bean.movie.FilmSession;
import com.neu.edu.ticketreservation.bean.movie.Hall;
import com.neu.edu.ticketreservation.bean.movie.Row;
import com.neu.edu.ticketreservation.bean.movie.Seat;
import com.neu.edu.ticketreservation.bean.movie.ShowDetails;
import com.neu.edu.ticketreservation.bean.movie.Theatre;
import com.neu.edu.ticketreservation.bean.movie.Ticket;
import com.neu.edu.ticketreservation.bean.movie.Transaction;
import com.neu.edu.ticketreservation.bean.wrapper.SeatWrapper;
import com.neu.edu.ticketreservation.bean.wrapper.ShowDetailsWrapper;
import com.neu.edu.ticketreservation.dao.FilmDao;
import com.neu.edu.ticketreservation.dao.FilmSessionDao;
import com.neu.edu.ticketreservation.dao.SeatDao;
import com.neu.edu.ticketreservation.dao.TheatreDao;
import com.neu.edu.ticketreservation.dao.TicketDao;
import com.neu.edu.ticketreservation.dao.TransactionDao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;

@Service
public class MovieService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Value("${SERVICE_CHARGE}")
	private long serviceCharge;

	@Autowired
	private TheatreDao theatreDao;

	@Autowired
	private FilmDao filmDao;

	@Autowired
	private FilmSessionDao filmSessionDao;

	@Autowired
	private SeatDao seatDao;

	@Autowired
	private TicketDao ticketDao;

	@Autowired
	private TransactionDao transactionDao;

	@Autowired
	MeterRegistry registry;

	Timer movieTimer;

	public List<Theatre> getAllTheatres() {
		movieTimer = registry.timer("custom.metrics.timer", "Backend", "TheatreList");
		final List<Theatre>[] theatreEntities = new List[1];
		movieTimer.record(() -> theatreEntities[0] = theatreDao.findAll());
		return theatreEntities[0];
	}

	public List<Film> getMoviesFromTheatre(long theatreId) {
		movieTimer = registry.timer("custom.metrics.timer", "Backend", "MovieList");
		final List<Film>[] filmEntities = new List[1];
		movieTimer.record(() -> filmEntities[0] = filmDao.getMoviesFromTheatre(theatreId));
		return filmEntities[0];
	}

	public List<Film> getAllMovies() {
		movieTimer = registry.timer("custom.metrics.timer", "Backend", "MovieList");
		final List<Film>[] filmEntities = new List[1];
		movieTimer.record(() -> filmEntities[0] = filmDao.findAll());
		return filmEntities[0];
	}

	public FilmSession getFilmSessionFromId(long filmSessionId) {
		movieTimer = registry.timer("custom.metrics.timer", "Backend", "FilmSessionGet");
		final FilmSession[] filmSessionsEntities = new FilmSession[1];
		movieTimer.record(() -> filmSessionsEntities[0] = filmSessionDao.getFilmByFilmSessionId(filmSessionId));
		return filmSessionsEntities[0];
	}

	public List<ShowDetails> getShowDetailsFromMovie(long filmId) {

		movieTimer = registry.timer("custom.metrics.timer", "Backend", "MovieGet");
		final Film[] filmEntities = new Film[1];
		movieTimer.record(() -> filmEntities[0] = filmDao.getFilmByFilmId(filmId));
		Film film = filmEntities[0];

		movieTimer = registry.timer("custom.metrics.timer", "Backend", "FilmSessionList");
		final List<FilmSession>[] filmSessionEntities = new List[1];
		movieTimer.record(() -> filmSessionEntities[0] = filmSessionDao.findByFilm(film));
		List<FilmSession> filmSessions = filmSessionEntities[0];

		List<ShowDetails> showDetailsList = new ArrayList<ShowDetails>();

		for (FilmSession fs : filmSessions) {
			ShowDetails showDetail = new ShowDetails();
			Hall hall = fs.getHall();
			Theatre theatre = hall.getTheatre();

			showDetail.setFilm(film);
			showDetail.setFilmSession(fs);
			showDetail.setTheatre(theatre);

			showDetailsList.add(showDetail);
		}

		return showDetailsList;
	}

	public List<Seat> getAvailableSeats(long filmSessionId) {
		movieTimer = registry.timer("custom.metrics.timer", "Backend", "FilmSessionGet");
		final FilmSession[] filmSessionEntities = new FilmSession[1];
		movieTimer.record(
				() -> filmSessionEntities[0] = filmSessionDao.getFilmByFilmSessionId(filmSessionId));
		FilmSession filmSession = filmSessionEntities[0];

		Hall hall = filmSession.getHall();
		Set<Row> rows = hall.getRows();

		List<Seat> seatList = new ArrayList<Seat>();
		for (Row row : rows) {

			movieTimer = registry.timer("custom.metrics.timer", "Backend", "SeatGet");
			final List<Seat>[] seatEntities = new List[1];
			movieTimer.record(() -> seatEntities[0] = seatDao.findByRow(row));
			List<Seat> seats = seatEntities[0];

			for (Seat s : seats) {
				if (!s.isSeatBooked())
					seatList.add(s);
			}
		}

		return seatList;
	}

	public Transaction bookTickets(UserBean userBean, SeatWrapper[] seats, long filmSessionId) {
		List<Seat> seatList = new ArrayList<Seat>();
		for (SeatWrapper s : seats) {
			movieTimer = registry.timer("custom.metrics.timer", "Backend", "SeatGet");
			final Seat[] seatEntities = new Seat[1];
			movieTimer.record(() -> seatEntities[0] = seatDao.findBySeatId(s.getSeatNumber()));
			Seat seat = seatEntities[0];

			seat.setSeatBooked(true);
			seatList.add(seat);

			movieTimer = registry.timer("custom.metrics.timer", "Backend", "SeatSave");
			final Seat[] seatEntitiesSave = new Seat[1];
			movieTimer.record(() -> seatEntitiesSave[0] = seatDao.save(seat));
		}

		double totalPrice = 0;

		movieTimer = registry.timer("custom.metrics.timer", "Backend", "FilmSessionGet");
		final FilmSession[] filmSessionEntities = new FilmSession[1];
		movieTimer.record(() -> filmSessionEntities[0] = filmSessionDao.getFilmByFilmSessionId(filmSessionId));
		FilmSession filmSession = filmSessionEntities[0];

		Transaction transaction = new Transaction();
		Set<Ticket> ticketList = new HashSet<Ticket>();

		for (Seat s : seatList) {
			Ticket ticket = new Ticket();
			ticket.setFilmSession(filmSession);
			ticket.setSeat(s);
			ticket.setTransaction(transaction);

			movieTimer = registry.timer("custom.metrics.timer", "Backend", "TicketSave");
			final Ticket[] ticketEntitiesSave = new Ticket[1];
			movieTimer.record(() -> ticketEntitiesSave[0] = ticketDao.save(ticket));

			ticketList.add(ticket);
			totalPrice += s.getPrice();
		}

		totalPrice = totalPrice + ((serviceCharge * totalPrice) / 100);
		logger.info("Total Price::" + totalPrice);
		transaction.setTotalPrice(totalPrice);
		transaction.setUserBean(userBean);
		transaction.setTickets(ticketList);

		movieTimer = registry.timer("custom.metrics.timer", "Backend", "TransactionSave");
		final Transaction[] transactionEntitiesSave = new Transaction[1];
		movieTimer.record(() -> transactionEntitiesSave[0] = transactionDao.save(transaction));

		return transaction;
	}

	public boolean checkIfSeatsEmpty(SeatWrapper[] seats) {
		for (SeatWrapper s : seats) {

			movieTimer = registry.timer("custom.metrics.timer", "Backend", "SeatGet");
			final Seat[] seatEntities = new Seat[1];
			movieTimer.record(() -> seatEntities[0] = seatDao.findBySeatId(s.getSeatNumber()));
			Seat seat = seatEntities[0];

			if (seat.isSeatBooked()) {
				return true;
			}
		}

		return false;
	}

	public List<Transaction> getPastTransactions(UserBean userBean) {
		movieTimer = registry.timer("custom.metrics.timer", "Backend", "TransactionList");
		final List<Transaction>[] transactionEntities = new List[1];
		movieTimer.record(() -> transactionEntities[0] = transactionDao.findByUserBean(userBean));
		List<Transaction> transactions = transactionEntities[0];
		return transactions;
	}

}