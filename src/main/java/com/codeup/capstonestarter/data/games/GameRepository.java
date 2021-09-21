package com.codeup.capstonestarter.data.games;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Long> {

    Game findByGameID(Long gameID);
}
