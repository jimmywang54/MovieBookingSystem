package com.neu.edu.ticketreservation.bean.wrapper;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.neu.edu.ticketreservation.bean.movie.FilmSession;
import com.neu.edu.ticketreservation.bean.movie.Transaction;

public class TransactionWrapper {

    private long transactionId;

    private double totalPrice;

    private int numberOfTickets;

    private String filmName;
    private String theatreName;
    private String hallName;

    private String filmDate;
    private String filmTiming;

    public TransactionWrapper copyFromTransaction(Transaction transaction, FilmSession filmSession){
        this.transactionId = transaction.getTransactionId();
        this.totalPrice = transaction.getTotalPrice();
        this.numberOfTickets = transaction.getTickets().size();

        this.filmName = filmSession.getFilm().getName();
        this.theatreName = filmSession.getHall().getTheatre().getName();
        this.hallName = filmSession.getHall().getName();

        Date date = filmSession.getTime();

        SimpleDateFormat localDateFormat = new SimpleDateFormat("YYYY-MM-dd");
        this.filmDate = localDateFormat.format(date);

        SimpleDateFormat localDateFormat1 = new SimpleDateFormat("HH:mm");
        this.filmTiming = localDateFormat1.format(date);

        return this;
    }

    @Override
    public String toString() {
        return "TransactionWrapper [filmDate=" + filmDate + ", filmName=" + filmName + ", filmTiming=" + filmTiming
                + ", hallName=" + hallName + ", numberOfTickets=" + numberOfTickets + ", theatreName=" + theatreName
                + ", totalPrice=" + totalPrice + ", transactionId=" + transactionId + "]";
    }

    public long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(long transactionId) {
        this.transactionId = transactionId;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(int numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public String getFilmName() {
        return filmName;
    }

    public void setFilmName(String filmName) {
        this.filmName = filmName;
    }

    public String getTheatreName() {
        return theatreName;
    }

    public void setTheatreName(String theatreName) {
        this.theatreName = theatreName;
    }

    public String getHallName() {
        return hallName;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public String getFilmDate() {
        return filmDate;
    }

    public void setFilmDate(String filmDate) {
        this.filmDate = filmDate;
    }

    public String getFilmTiming() {
        return filmTiming;
    }

    public void setFilmTiming(String filmTiming) {
        this.filmTiming = filmTiming;
    }

}
