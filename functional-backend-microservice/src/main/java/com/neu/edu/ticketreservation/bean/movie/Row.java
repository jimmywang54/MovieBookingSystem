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
@Table(name = "theatre_row")
public class Row {

    // Row [id, rowIndex, set of seats]
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rowId;
    
    @Column
    private int rowIndex;

    @Column
    private int seats;

    @ManyToOne
    @JoinColumn(name = "hall_id")
    private Hall hall;

    public long getRowId() {
        return rowId;
    }

    public void setRowId(long rowId) {
        this.rowId = rowId;
    }

    public int getRowIndex() {
        return rowIndex;
    }

    public void setRowIndex(int rowIndex) {
        this.rowIndex = rowIndex;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public Hall getHall() {
        return hall;
    }

    public void setHall(Hall hall) {
        this.hall = hall;
    }
}