import {
	cheapSharkCardBuilder, freeToGameCarouselView,
	ratingEvent,
	SetFavoriteEvent, urlRedirectEvent,
} from "./views/Home.js";
import {rapidApi_token} from "./ApiKeys/keys.js";
import {apiData} from "./views/FreeToPlay.js";
import {sideBarCheckboxEvent, sideBarSearchEvent} from "./views/Browse.js";
import {searchBarEvent} from "./views/partials/Navbar.js";


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
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C16%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=0&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Savings&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			$("#container-games").append(cheapSharkCardBuilder(data));
			SetFavoriteEvent();
			ratingEvent();
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