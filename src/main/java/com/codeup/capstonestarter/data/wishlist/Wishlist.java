package com.codeup.capstonestarter.data.wishlist;

import com.codeup.capstonestarter.data.user.User;

import javax.persistence.*;

@Entity
@Table(name="wishlist")
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean is_active;

    @OneToOne(mappedBy = "wishlist")
    private User user;

    public Wishlist() {}

    public Wishlist(Long id, boolean is_active) {
        this.id = id;
        this.is_active = is_active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }
}
