import {cheapSharkCardBuilder, freeCardBuilder} from "./views/Home.js";
import {rapidApi_token} from "./ApiKeys/keys.js";

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
			console.log(data);
			freeCardBuilder(data);

		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkZeroToTenGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=25&exact=0&upperPrice=10&pageNumber=0&onSale=0&metacritic=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			$("#container-zerototen").append(cheapSharkCardBuilder(data));
		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkTenToTwentyGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=10&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=25&exact=0&upperPrice=20&pageNumber=0&onSale=0&metacritic=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			$("#container-tentotwenty").append(cheapSharkCardBuilder(data));
		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkTwentyToThirtyGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=20&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=25&exact=0&upperPrice=30&pageNumber=0&onSale=0&metacritic=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
			"x-rapidapi-key": rapidApi_token,
		}
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			$("#container-twentytothirty").append(cheapSharkCardBuilder(data));
		})
		.catch(err => {
			console.error(err);
		});
}

export function getAllGames(){
	freeToGameGet();
	cheapSharkZeroToTenGet();
	cheapSharkTenToTwentyGet();
	cheapSharkTwentyToThirtyGet();
}