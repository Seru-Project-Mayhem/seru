package com.codeup.capstonestarter.web;


import com.codeup.capstonestarter.data.games.GameRepository;
import com.codeup.capstonestarter.data.review.Review;
import com.codeup.capstonestarter.data.review.ReviewRepository;
import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UsersRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(value = "/api/review", headers = "Accept=application/json",
        produces = "application/json")
public class ReviewsController {

    private final ReviewRepository reviewRepository;
    private final GameRepository gameRepository;
    private final UsersRepository usersRepository;

    public ReviewsController(ReviewRepository reviewRepository,
                             UsersRepository usersRepository, GameRepository gameRepository) {
        this.reviewRepository = reviewRepository;
        this.usersRepository = usersRepository;
        this.gameRepository = gameRepository;
    }

    @PostMapping
    private void createReview(@RequestBody Review newReview, OAuth2Authentication auth){

        newReview.setUser(usersRepository.findByEmail(auth.getName()).get());
        reviewRepository.save(newReview);
    }

    @GetMapping
    private List<Review> getReviews(){
        return reviewRepository.findAll();
    }

    @GetMapping("{id}")
    private Review getReviewById(@PathVariable Long id){
        return reviewRepository.findById(id).get();
    }

    @GetMapping("/users/{userId}")
    private List<Review> getReviewsByUserId(@PathVariable Long userId){
        return usersRepository.findById(userId).get().getReviews();
    }

    @GetMapping("/games/{gameId}")
    private List<Review> getReviewsByGameId(@PathVariable Long gameId){
        return gameRepository.findById(gameId).get().getReviews();
    }

    @PutMapping("/{id}")
    private void updateReview(@PathVariable Long id, @RequestBody Review reviewToUpdate){
        reviewRepository.save(reviewToUpdate);
    }

    @DeleteMapping("{id}")
    private void deleteReview(@PathVariable Long id){
        reviewRepository.deleteById(id);
    }


}
