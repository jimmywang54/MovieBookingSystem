package com.neu.edu.ticketreservation.bean.movie;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ticket")
public class Ticket {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ticketId;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "seat_id", nullable = false)
    private Seat seat;

    @ManyToOne
    @JoinColumn(name = "film_session_id")
    private FilmSession filmSession;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "transaction_id")
    private Transaction transaction;

    public long getTicketId() {
        return ticketId;
    }

    public void setTicketId(long ticketId) {
        this.ticketId = ticketId;
    }

    public Seat getSeat() {
        return seat;
    }

    public void setSeat(Seat seat) {
        this.seat = seat;
    }

    public FilmSession getFilmSession() {
        return filmSession;
    }

    public void setFilmSession(FilmSession filmSession) {
        this.filmSession = filmSession;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    
}