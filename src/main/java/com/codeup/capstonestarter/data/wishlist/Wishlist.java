package com.codeup.capstonestarter.data.wishlist;

import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.user.User;
import org.hibernate.mapping.Collection;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="wishlist")
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean isActive;

    private Collection<Game> gameID;

    @OneToOne(mappedBy = "wishlist")
    private User user;

    public Wishlist() {}

    public Wishlist(Long id, boolean isActive,  Collection<Game> gameID) {
        this.id = id;
        this.isActive = isActive;
        this.gameID = gameID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Long getGameID() {
        return gameID;
    }

    public void setGameID(Long gameID) {
        this.gameID = gameID;
    }
}
