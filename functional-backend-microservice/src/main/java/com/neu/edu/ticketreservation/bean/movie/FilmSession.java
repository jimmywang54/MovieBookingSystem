package com.neu.edu.ticketreservation.bean.movie;

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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "film_session")
public class FilmSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long filmSessionId;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date time;

    @ManyToOne
    @JoinColumn(name = "film_id")
    private Film film;

    @ManyToOne
    @JoinColumn(name = "hall_id")
    private Hall hall;

    @OneToMany(mappedBy = "filmSession")
    @ElementCollection(targetClass = Ticket.class)
    private Set<Ticket> tickets;

    public long getFilmSessionId() {
        return filmSessionId;
    }

    public void setFilmSessionId(long filmSessionId) {
        this.filmSessionId = filmSessionId;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public Hall getHall() {
        return hall;
    }

    public void setHall(Hall hall) {
        this.hall = hall;
    }

    public Set<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        this.tickets = tickets;
    }

    
}
