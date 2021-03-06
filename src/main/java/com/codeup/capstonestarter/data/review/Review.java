package com.codeup.capstonestarter.data.review;
import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;


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

    @ManyToOne
//    @ManyToMany(
//        fetch = FetchType.LAZY,
//        cascade = {CascadeType.DETACH, CascadeType.PERSIST, CascadeType.MERGE},
//        targetEntity = Game.class)
//    @JoinTable(
//            name = "games_reviews",
//            joinColumns = {@JoinColumn(name = "review_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name = "game_id", nullable = false, updatable = false)},
//            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
//            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
//    )
//    private Collection<Game> games;
    @JsonIgnoreProperties("reviews")
    private Game game;

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


//    public Collection<Game> getGames() {
//        return games;
//    }
//
//    public void setGames(Collection<Game> games) {
//        this.games = games;
//    }
}
