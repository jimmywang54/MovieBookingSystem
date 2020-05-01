package com.neu.edu.ticketreservation.bean.wrapper;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.neu.edu.ticketreservation.bean.movie.ShowDetails;

public class ShowDetailsWrapper {

    private String filmName;

    private String hallName;
    private long hallId;

    private String theatreName;
    private String theatreAddress;
    private long theatreId;
    private String theatreCity;

    private String filmDate;
    private String filmTiming;

    private long filmSessionId;

    public ShowDetailsWrapper copyFromShowDetails(ShowDetails showDetails){
        this.filmName = showDetails.getFilm().getName();

        this.hallName = showDetails.getFilmSession().getHall().getName();
        this.hallId = showDetails.getFilmSession().getHall().getHallId();

        this.theatreName = showDetails.getTheatre().getName();
        this.theatreAddress = showDetails.getTheatre().getAddress();
        this.theatreId = showDetails.getTheatre().getTheatreId();
        this.theatreCity = showDetails.getTheatre().getCity();

        Date date = showDetails.getFilmSession().getTime();

        SimpleDateFormat localDateFormat = new SimpleDateFormat("YYYY-MM-dd");
        this.filmDate = localDateFormat.format(date);

        SimpleDateFormat localDateFormat1 = new SimpleDateFormat("HH:mm");
        this.filmTiming = localDateFormat1.format(date);

        this.filmSessionId = showDetails.getFilmSession().getFilmSessionId();

        return this;
    }

    public String getFilmName() {
        return filmName;
    }

    public void setFilmName(String filmName) {
        this.filmName = filmName;
    }

    public String getHallName() {
        return hallName;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public long getHallId() {
        return hallId;
    }

    public void setHallId(long hallId) {
        this.hallId = hallId;
    }

    public String getTheatreName() {
        return theatreName;
    }

    public void setTheatreName(String theatreName) {
        this.theatreName = theatreName;
    }

    public String getTheatreAddress() {
        return theatreAddress;
    }

    public void setTheatreAddress(String theatreAddress) {
        this.theatreAddress = theatreAddress;
    }

    public long getTheatreId() {
        return theatreId;
    }

    public void setTheatreId(long theatreId) {
        this.theatreId = theatreId;
    }

    public String getTheatreCity() {
        return theatreCity;
    }

    public void setTheatreCity(String theatreCity) {
        this.theatreCity = theatreCity;
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

    public long getFilmSessionId() {
        return filmSessionId;
    }

    public void setFilmSessionId(long filmSessionId) {
        this.filmSessionId = filmSessionId;
    }

    @Override
    public String toString() {
        return "ShowDetailsWrapper [filmDate=" + filmDate + ", filmName=" + filmName + ", filmSessionId="
                + filmSessionId + ", filmTiming=" + filmTiming + ", hallId=" + hallId + ", hallName=" + hallName
                + ", theatreAddress=" + theatreAddress + ", theatreCity=" + theatreCity + ", theatreId=" + theatreId
                + ", theatreName=" + theatreName + "]";
    }
}
