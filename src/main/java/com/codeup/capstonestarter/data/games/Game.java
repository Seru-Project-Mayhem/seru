package com.codeup.capstonestarter.data.games;


import org.springframework.web.servlet.tags.form.TextareaTag;
import org.w3c.dom.Text;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long gameID;

    @Column(columnDefinition = "JSON")
    private String cheapestPriceEver;

    @Column(columnDefinition = "JSON")
    private String deals;

    @Column(columnDefinition = "JSON")
    private String info;


    public Game() {
    }

    public Game(Long id,  String cheapestPriceEver, String deals, String info,
                Long gameID) {
        this.id = id;
        this.deals = deals;
        this.info = info;
        this.cheapestPriceEver = cheapestPriceEver;
        this.gameID = gameID;
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

    public Long getGameID() {
        return gameID;
    }

    public void setGameID(Long gameID) {
        this.gameID = gameID;
    }
}
