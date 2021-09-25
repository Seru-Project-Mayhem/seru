package com.codeup.capstonestarter.data.rating;

import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="rating")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rating_id;

    private Long game_id;
    private Long freeGames_id;
    private Long user_id;
    private double rating;
    private String review;

    @ManyToOne
    @JsonIgnoreProperties("password")
    private User user;

    public Rating() {
    }

    public Rating(Long rating_id, Long game_id, Long freeGames_id, Long user_id,
                  double rating, String review, User user) {
        this.rating_id = rating_id;
        this.game_id = game_id;
        this.freeGames_id = freeGames_id;
        this.user_id = user_id;
        this.rating = rating;
        this.review = review;
        this.user = user;
    }

    public Long getRating_id() {
        return rating_id;
    }

    public void setRating_id(Long rating_id) {
        this.rating_id = rating_id;
    }

    public Long getGame_id() {
        return game_id;
    }

    public void setGame_id(Long game_id) {
        this.game_id = game_id;
    }

    public Long getFreeGames_id() {
        return freeGames_id;
    }

    public void setFreeGames_id(Long freeGames_id) {
        this.freeGames_id = freeGames_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
