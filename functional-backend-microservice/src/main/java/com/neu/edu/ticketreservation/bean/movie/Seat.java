package com.neu.edu.ticketreservation.bean.movie;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "seat")
public class Seat {

    // Seat [id, ]
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long seatId;

    @ManyToOne
    @JoinColumn(name = "row_id")
    private Row row;

    @Column
    private boolean isSeatBooked;

    @Column
    private long price;

    public long getSeatId() {
        return seatId;
    }

    public void setSeatId(long seatId) {
        this.seatId = seatId;
    }

    public Row getRow() {
        return row;
    }

    public void setRow(Row row) {
        this.row = row;
    }

    public boolean isSeatBooked() {
        return isSeatBooked;
    }

    public void setSeatBooked(boolean isSeatBooked) {
        this.isSeatBooked = isSeatBooked;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

}