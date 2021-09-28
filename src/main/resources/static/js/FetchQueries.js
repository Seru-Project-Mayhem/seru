import {
	cheapSharkCardBuilder, freeToGameCarouselView, reviewRedirect,
	SetFavoriteEvent, urlRedirectEvent
} from "./views/Home.js";
import {rapidApi_token} from "./keys.js";
import {apiData} from "./views/FreeToPlay.js";
import {returnValidURLs} from "./views/UrlBuilder.js";

export function freeToGameHomeGet() {
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

export function freeToGameGet() {
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

export function cheapSharkGet() {
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
			urlRedirectEvent();
			getMultipleGamePricesEvent();
			var myCarousel = document.querySelector('#container-carousel')
			var carousel = new bootstrap.Carousel(myCarousel, {ride: 'carousel', interval: 3000})
		})
		.catch(err => {
			console.error(err);
		});
}


export function getAllGames() {
	cheapSharkGet();
	freeToGameHomeGet();
	testGetCivGames();
}

//Get list of games
function testGetCivGames() {
	let uniqueGameIDs = "";
	for (let i = 0; i < 10; i++) {
		fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=${i}&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Savings&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=0`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
				"x-rapidapi-key": "31054d8f05msheef4cef580b190cp1c805djsnd8b214e9350e"
			}
		})
			.then(response => response.json())
			.then(data => {
				//Loop over list of games and store unique ID
				for (let game of data) {
					if (uniqueGameIDs.includes(game.gameID)) {
					} else {
						uniqueGameIDs += (game.gameID + "%2C");
					}
				}
				uniqueGameIDs = uniqueGameIDs.substring(0, uniqueGameIDs.length - 3);
				getGameDealsByID(uniqueGameIDs);
				uniqueGameIDs = "";
			})
			.catch(err => {
				console.error(err);
			});
	}
}

//Multiple game lookup using list of unique id's
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

//Post multiple game lookup to games table
function dataBaseInsert(games) {
	for (let id in games) {
		let post = {
			id: id,
			cheapestPriceEver: JSON.stringify(games[id].cheapestPriceEver),
			deals: JSON.stringify(games[id].deals),
			info: JSON.stringify(games[id].info)
		}

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
	}
}

function getMultipleGamePricesEvent() {
	let id
	$(".btn-details").on("click", function () {
		id = $(this).parent().parent().siblings(".flip-card-back").children().children(".gameID").text();
		let request = {
			method: "GET",
			headers: {}
		}
		fetch(`http://localhost:8080/api/games/findByGameID?gameID=${id}`, request)
			.then(res => res.json())
			.then(data => {
				let parsedJSON = JSON.parse(data.deals);
				let steamID = $(this).parent().parent().siblings(".flip-card-back").children(".steam-id").text()
				let gameTitle = $(this).parent().parent().siblings(".flip-card-back").children(".game-title").text()
				let store = "";
				$(this).parent().parent().siblings(".flip-card-back").children(".prices").empty();
				for (let i=0;i<parsedJSON.length;i++) {
					switch (parsedJSON[i].storeID) {
						case 1:
							store = "Steam";
							break;
						case 2:
							store = "GamersGate";
							break;
						case 3:
							store = "Green Man Gaming";
							break;
						case 7:
							store = "GOG";
							break;
						case 11:
							store = "Humble Store";
							break;
						case 15:
							store = "Fanatical";
							break;
						case 23:
							store = "GameBillet";
							break;
						case 24:
							store = "Voidu";
							break;
						case 25:
							store = "Epic Game Store";
							break;
						case 29:
							store = "2Game";
							break;
						case 30:
							store = "IndieGala";
							break;
						case 31:
							store = "Blizzard";
							break;
						default:
							continue;
					}
					$(this).parent().parent().siblings(".flip-card-back").children(".prices").append(`${store}: <a href="#" class="anchor" data-id="${returnValidURLs(steamID, gameTitle, parsedJSON[i].storeID)}">$${parsedJSON[i].price}</a><br>`);
				}
				aTagEventListener()
			})
			.catch(error => console.log(error))
	});
}

function aTagEventListener(){
	$(".anchor").unbind().on("click", function(){
		window.open($(this).attr("data-id"));
	});
}