package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.games.GameRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

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

    @GetMapping
    private Collection<Game> getAllGames(){


        return gameRepository.findAll();
    }

    @GetMapping("/findByGameID")
    private Game getGameById(@RequestParam Long gameID){
        return gameRepository.findByGameID(gameID);
//        return gameRepository.getById(game_id);
    }
}
