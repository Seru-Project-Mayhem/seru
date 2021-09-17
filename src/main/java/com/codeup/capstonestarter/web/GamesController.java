package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.games.GameRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/games", headers = "Accept=application/json",
        produces = "application/json")
public class GamesController {

    private final GameRepository gameRepository;

    public GamesController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @PostMapping
    private void postGames(@RequestBody Game game){
        gameRepository.save(game);
    }
}
