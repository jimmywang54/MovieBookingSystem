package com.neu.edu.ticketreservation.bean.wrapper;

import com.neu.edu.ticketreservation.bean.movie.Theatre;

public class TheatreWrapper {

    private long theatreId;

    private String name;

    private String city;

    private String address;

    public TheatreWrapper copyFromTheatre(Theatre theatre){
        this.name = theatre.getName();
        this.city = theatre.getCity();
        this.address = theatre.getAddress();
        this.theatreId = theatre.getTheatreId();
        return this;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public long getTheatreId() {
        return theatreId;
    }

    public void setTheatreId(long theatreId) {
        this.theatreId = theatreId;
    }

}
