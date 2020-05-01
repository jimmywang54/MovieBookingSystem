package com.neu.edu.ticketreservation.bean.movie;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.neu.edu.ticketreservation.bean.UserBean;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long transactionId;

    @Column
    private double totalPrice;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserBean userBean;

    @OneToMany(cascade=CascadeType.ALL, mappedBy = "transaction")
    @ElementCollection(targetClass=Ticket.class)
    private Set<Ticket> tickets;

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

    public UserBean getUserBean() {
        return userBean;
    }

    public void setUserBean(UserBean userBean) {
        this.userBean = userBean;
    }

    public Set<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        this.tickets = tickets;
    }

    
}