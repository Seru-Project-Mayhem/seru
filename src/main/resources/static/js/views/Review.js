import createView from "../createView.js";
import {getHeaders, login} from "../auth.js";


export default function Review(props) {
	return `<!DOCTYPE html>

<head>
    <title>Game Reviews</title>
</head>
<body>
<h1 id="game-title" style="text-align: center"></h1>
<div id="game-thumb" class="container mb-5"></div>
<p class="d-none" id="gameID"></p>
<div class="mb-5 review-form">
  <label for="review" class="form-label" style="color: white">Leave your review</label>
  <textarea class="form-control" id="review" rows="3"></textarea>
<button id="review-btn" class="mb-5" style="background-color: #D93280; color: white">Submit Your Review</button>
</div>

<div id="other-reviews-container" style="background-color: rgba(0,0,0,0.8); height: 15em">
<h3 style="color: white" class="text-center">User Reviews</h3>
<div id="other-reviews" style="background-color: transparent; color: white"></div>
</div>


</body>
`;

}

// <!-- <p class="d-none" id="userID">${props.users.getId()}</p> -->


export function getGameInfo(gameInfo) {
	let id = gameInfo;
	fetch(`https://seru.shop/api/games/findByGameID?gameID=${id}`, {
		"method": "GET",
	})
		.then(response => response.json())
		.then(data => {
			displayReviewsByGameId(data.id);
			$("#gameID").append(data.id);
			let gameTitle = JSON.parse(data.info);
			$("#game-title").append(gameTitle.title);

			let image = `
			
			<img src="${gameTitle.thumb}" style="height: 150px; width: 300px"> 
			
			`

			$("#game-thumb").append(image);
			console.log(JSON.parse(data.info));
		})
		.catch(err => {
			console.error(err);
		});
}

export function reviewEvent() {
	$("#review-btn").click(function () {

		let post = {
			review: $("#review").val(),
			user: {
				id: $("#userID").text()
			},
			gameID: {
				id: $("#gameID").text()
			}
		}

		console.log(post);
		const token = localStorage.getItem("access_token");

		let request = {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			},
			body: JSON.stringify(post)
		};

		fetch("https://seru.shop/api/review", request)

			.then((response) => {
				console.log(response.status)
				if (response.status === 200) {
					createView("/review");
				}
			});
	});

}

function displayReviewsByGameId(gameId){
	let request = {
		method: "GET",
	};

	fetch(`https://seru.shop/api/review/games/${gameId}`, request)
		.then(response => response.json())
		.then(data => {
			console.log(data);

			// createView("/review");


			for (let i = 0; i < data.length; i++) {
				console.log(data[i].review);
				reviewCard(data[i])

			}

		})
		.catch(err => {
			console.error(err)
		})
}

function reviewCard(data){

	let card = `
	
	<p style="margin-left: 5%">${data.review}</p>
	<p style="margin-left: 5%">Review by: ${data.user.username}</p>
	
	`

	$("#other-reviews").append(card);
}