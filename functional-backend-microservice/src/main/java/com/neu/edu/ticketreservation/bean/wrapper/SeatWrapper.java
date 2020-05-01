package com.neu.edu.ticketreservation.bean.wrapper;

import com.neu.edu.ticketreservation.bean.movie.Seat;

public class SeatWrapper {

    private long seatNumber;

    private long rowIndex;

    private long price;

    public SeatWrapper copyFromSeat(Seat seat) {
        this.seatNumber = seat.getSeatId();
        this.rowIndex = seat.getRow().getRowIndex();
        this.price = seat.getPrice();

        return this;
    }

    public long getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(long seatNumber) {
        this.seatNumber = seatNumber;
    }

    public long getRowIndex() {
        return rowIndex;
    }

    public void setRowIndex(long rowIndex) {
        this.rowIndex = rowIndex;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "SeatWrapper [price=" + price + ", rowIndex=" + rowIndex + ", seatNumber=" + seatNumber + "]";
    }

}