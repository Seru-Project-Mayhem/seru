import createView from "../createView.js";
import {getHeaders} from "../auth.js";


export default function Review(props) {
	return `<!DOCTYPE html>

<head>
    <meta charset="UTF-8"/>
    <title>Game Reviews</title>
</head>
<body>
<h1 id="game-title"></h1>
<p class="d-none" id="gameID"></p>
<div class="mb-3">
  <label for="review" class="form-label">Leave your review</label>
  <textarea class="form-control" id="review" rows="3"></textarea>
<button id="review-btn">Submit Your Review</button>
</div>

<div id="other-reviews">

</div>


</body>
`;

}

// <!-- <p class="d-none" id="userID">${props.users.getId()}</p> -->


export function getGameInfo(gameInfo) {
	let id = gameInfo;
	fetch(`http://localhost:8080/api/games/findByGameID?gameID=${id}`, {
		"method": "GET",
	})
		.then(response => response.json())
		.then(data => {
			$("#other-reviews").append(`<p>${data.review}</p>`);
			console.log(data.id)
			$("#gameID").append(data.id)
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

		//{
		// 				'Accept': 'application/json',
		// 				"Content-Type": "application/json",
		// 				'Authorization': 'Bearer ' + `${token}`
		// 			},

		let request = {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
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

// function getUserInfo(users){
// 	return users.map(user => user.id);
// }