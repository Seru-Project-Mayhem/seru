import {cheapSharkCardBuilder, freeCardBuilder, ratingEvent} from "./views/Home.js";
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
			const size = 5;
			const items = data.slice(0, size);
			console.log(data);
			$("#container-free").append(freeCardBuilder(items));

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
			const size = 25;
			const items = data.slice(0, size);
			console.log(data);
			$("#container-free-to-play-page").append(freeCardBuilder(items));
		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkZeroToTenHomeGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=5&exact=0&upperPrice=10&pageNumber=0&onSale=0&metacritic=0", {
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
			$("#container-zero-to-ten-page").append(cheapSharkCardBuilder(data));
		})
		.catch(err => {
			console.error(err);
		});
}

export function cheapSharkTenToTwentyHomeGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=10&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=5&exact=0&upperPrice=20&pageNumber=0&onSale=0&metacritic=0", {
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
			$("#container-ten-to-twenty-page").append(cheapSharkCardBuilder(data));
		})
		.catch(err => {
			console.error(err);
		});
}


export function cheapSharkTwentyToThirtyHomeGet(){
	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=20&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=5&exact=0&upperPrice=30&pageNumber=0&onSale=0&metacritic=0", {
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
			$("#container-twenty-to-thirty-page").append(cheapSharkCardBuilder(data));
		})
		.catch(err => {
			console.error(err);
		});
}

// STOP!!! DON'T DELETE THIS SECTION WE WILL NEED IT FOR THE DATABASE

// export function cheapSharkGetAll(){
//
// 	fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=0&output=json&steamworks=0&sortBy=store&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=10&onSale=false&metacritic=0&storeID=1%2C2%2C3%2C7%2C11%2C15%2C16%2C23%2C24%2C25%2C29%2C30%2C31", {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
// 			"x-rapidapi-key": rapidApi_token,
// 		}
// 	})
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});
// }



export function getAllGames(){
	freeToGameHomeGet();
	cheapSharkZeroToTenHomeGet();
	cheapSharkTenToTwentyHomeGet();
	cheapSharkTwentyToThirtyHomeGet();
	ratingEvent();
	// cheapSharkGetAll();
}