import {
	cheapSharkCardBuilder, freeToGameCarouselView, reviewRedirect,
	SetFavoriteEvent, urlRedirectEvent,
} from "./views/Home.js";
import {rapidApi_token} from "./ApiKeys/keys.js";
import {apiData} from "./views/FreeToPlay.js";
import {searchBarEvent} from "./views/partials/Navbar.js";
import {sideBarCheckboxEvent, sideBarSearchEvent} from "./views/Browse.js";


export function freeToGameHomeGet(){
	fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			$("#container-carousel").append(freeToGameCarouselView(data));
		})
		.catch(err => {
			console.error(err);
		});
}

export function freeToGameGet(){
	fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			apiData(data)
		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=60&exact=0&upperPrice=60&pageNumber=0&onSale=0&metacritic=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			$("#container-games").append(cheapSharkCardBuilder(data));
			reviewRedirect();
			SetFavoriteEvent();
			sideBarSearchEvent();
			sideBarCheckboxEvent()
			searchBarEvent();
			urlRedirectEvent();
		})
		.catch(err => {
			console.error(err);
		});
}

export function postRating(rating){
	let post = {
		rating: rating,
	}

	let request = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		body: JSON.stringify(post)
	}

	fetch("http://localhost:8080/api/ratings", request)
		.then(res => {
			console.log(res.status);
			if(res.status === 200){
				alert("Post was successful");
			} else {
				alert("A problem has occurred");
			}
		}).catch(error => {
		console.log(error);
	});
}

export function getAllGames(){
	cheapSharkGet();
	freeToGameHomeGet();
}