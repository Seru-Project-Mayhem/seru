package com.codeup.capstonestarter.data.games;


import org.springframework.web.servlet.tags.form.TextareaTag;
import org.w3c.dom.Text;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.lang.reflect.Array;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="games")
public class Game {

    @Id
    private int gameID;

    @Column
    private String cheapestPriceEver;

    @Column
    private String deals;

    @Column
    private String info;


    public Game() {
    }

    public Game(int gameID,  String cheapestPriceEver, String deals, String info) {
        this.gameID = gameID;
        this.deals = deals;
        this.info = info;
        this.cheapestPriceEver = cheapestPriceEver;
    }

    public int getGameID() {
        return gameID;
    }

    public void setGameID(int gameID) {
        this.gameID = gameID;
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

    public String getCheapestPriceEver() {
        return cheapestPriceEver;
    }

    public void setCheapestPriceEver(String cheapestPriceEver) {
        this.cheapestPriceEver = cheapestPriceEver;
    }
}
