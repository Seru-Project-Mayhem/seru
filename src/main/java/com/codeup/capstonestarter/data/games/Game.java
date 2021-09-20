package com.codeup.capstonestarter.data.games;




import org.w3c.dom.Text;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="games")
public class Game {

    @Id
    private int gameID;

    @Column(columnDefinition = "json")
    private String cheapestPriceEver;

    @Column(columnDefinition = "json")
    private String deals;

    @Column(columnDefinition = "json")
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
