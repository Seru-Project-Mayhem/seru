import {
	cheapSharkCardBuilder, freeToGameCarouselView, reviewRedirect,
	SetFavoriteEvent, urlRedirectEvent
} from "./views/Home.js";
import {rapidApi_token} from "./ApiKeys/keys.js";
import {apiData} from "./views/FreeToPlay.js";

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
			SetFavoriteEvent();
			reviewRedirect();
		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=0&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Savings&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(games => {
			$("#container-games").append(cheapSharkCardBuilder(games));
			reviewRedirect();
			SetFavoriteEvent();
			// sideBarSearchEvent();
			// sideBarStoreEvent();
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
	//Remove function call and functions below later
	testGetCivGames();
}

function testGetCivGames(){
	let uniqueGameIDs = "";
	for(let i = 0; i <= 11; i++){
		fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?metacritic=0&onSale=0&pageNumber=${i}&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Deal%20Rating&steamworks=0&output=json&desc=0&title=sid%20meiers&steamRating=0&lowerPrice=0`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
				"x-rapidapi-key": "31054d8f05msheef4cef580b190cp1c805djsnd8b214e9350e"
			}
		})
			.then(response => response.json())
			.then(data => {
				for (let game of data) {
					if(uniqueGameIDs.includes(game.gameID)){
					} else {
						uniqueGameIDs += (game.gameID + "%2C");
					}
				}
				uniqueGameIDs = uniqueGameIDs.substring(0, uniqueGameIDs.length - 3)
				if(i === 11)
					getGameDealsByID(uniqueGameIDs);
			})
			.catch(err => {
				console.error(err);
			});
	}
}

function getGameDealsByID(uniqueGameIDs) {
	fetch(`https://cheapshark-game-deals.p.rapidapi.com/games?ids=${uniqueGameIDs}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": "31054d8f05msheef4cef580b190cp1c805djsnd8b214e9350e"
		}
	})
		.then(response => response.json())
		.then(data => {
			dataBaseInsert(data);
		})
		.catch(err => {
			console.error(err);
		});
}

function dataBaseInsert(games){
		for(let gameID in games){
		let post = {
			gameID: gameID,
			cheapestPriceEver: JSON.stringify(games[gameID].cheapestPriceEver),
			deals: JSON.stringify(games[gameID].deals),
			info: JSON.stringify(games[gameID].info)
		}

		console.log(post);

		let request = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(post)
		}

		fetch(`http://localhost:8080/api/games`, request)
			.then(res => {
				console.log(res.status);
			}).catch(error => {
			console.log(error);
		});
	};
}