package com.codeup.capstonestarter.data.games;

import javax.persistence.*;

@Entity
@Table(name="games")
public class Game {

    @Id
    private Long id;

    @Column(columnDefinition = "JSON")
    private String cheapestPriceEver;

    @Column(columnDefinition = "JSON")
    private String deals;

    @Column(columnDefinition = "JSON")
    private String info;

    @OneToMany
    @JsonIgnoreProperties("game")
    private Collection<Review> reviews;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH},
            targetEntity = Wishlist.class)
    @JoinTable(
            name = "wishlist_games",
            joinColumns = {@JoinColumn(name = "game_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "wishlist_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnore
    private List<Wishlist> wishlists;

    public Game() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCheapestPriceEver() {
        return cheapestPriceEver;
    }

    public void setCheapestPriceEver(String cheapestPriceEver) {
        this.cheapestPriceEver = cheapestPriceEver;
    }

    public String getDeals() {
        return deals;
    }

    public void setDeals(String deals) {
        this.deals = deals;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public List<Wishlist> getWishlists() {
        return wishlists;
    }

    public void setWishlists(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }

    public Collection<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Collection<Review> reviews) {
        this.reviews = reviews;
    }
}
