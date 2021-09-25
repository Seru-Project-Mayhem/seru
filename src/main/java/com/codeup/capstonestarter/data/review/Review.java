package com.codeup.capstonestarter.data.review;
import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column
    private String review;


    @ManyToOne
    @JsonIgnoreProperties("reviews")
    private User user;

//    @Column
//    @ManyToOne
//    @JoinColumn(name = "reviewGameID",
//        referencedColumnName = "gameID"
//    )
//    private List<Long> gameID;

    @ManyToOne
    @JoinColumn(name = "game",
        referencedColumnName = "gameID"
    )
    @JsonManagedReference
    private Game game;

    public Review(User user, String review, Long id, Game game) {
        this.user = user;
        this.review = review;
        this.id = id;
        this.game = game;
    }

    public Review() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Game getGame() {
        return game;
    }

    public void setGameID(Game game) {
        this.game = game;
    }
}
