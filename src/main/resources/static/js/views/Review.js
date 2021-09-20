import createView from "../createView.js";
import {login} from "../auth.js";
import {rapidApi_token} from "../keys.js";

export default function Review() {
    return `<!DOCTYPE html>

<head>
    <meta charset="UTF-8"/>
    <title>Game Reviews</title>
</head>
<body>
<h1 id="game-title"></h1>
<div class="mb-3">
  <label for="review" class="form-label">Leave your review</label>
  <textarea class="form-control" id="review" rows="3"></textarea>
<button id="review-btn">Submit Your Review</button>
</div>




</body>
`;

}

export function getGameInfo(gameInfo){

    let id = gameInfo;
    console.log("this is our id: " + id);
    fetch(`https://cheapshark-game-deals.p.rapidapi.com/games?id=${id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
            "x-rapidapi-key": rapidApi_token,
        }
    })
        .then(response => response.json())
        .then(data => {
            // $("#game-title").append(data);
            console.log(data);
            // console.log();
        })
        .catch(err => {
            console.error(err);
        });
}

export function reviewEvent() {
    $("#review-btn").click(function () {

        let userRequest = {
            method: "GET",
        };

        fetch(`http://localhost:8080/api/users/findByEmail?email=${encodeURIComponent($('#email').val())}`, userRequest)
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                 response.json().then(user=>{

                     let post = {
                         user: user,
                         review: $('#review').val()
                     }

                     console.log(post);

                     let request = {
                         method: "POST",
                         headers: {
                             'Accept': 'application/json',
                             "Content-Type": "application/json"
                         },
                         body: JSON.stringify(post)
                     };

                     fetch("http://localhost:8080/api/review", request)
                         .then((response) => {
                             console.log(response.status)
                             if (response.status === 200) {
                                 createView("/review");
                             }
                         });
                 });
                }
            });


    })
}