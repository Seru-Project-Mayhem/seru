export function returnValidURL(steamAppID, baseGameTitle, store_ID){

		let titleToChange = baseGameTitle.split("");
		console.log(titleToChange);
		if(titleToChange.includes(":") || titleToChange.includes(".") || titleToChange.includes("!") || titleToChange.includes("'")){
			let unwantedCharIndex = titleToChange.indexOf(":");
			titleToChange.splice(unwantedCharIndex, 1);
			console.log(titleToChange);
		}
		let gameTitle = titleToChange.join();

	if(store_ID == 1){
		let adjusted_title = gameTitle.split(" ").slice(1).join("_");
		window.open(`https://store.steampowered.com/app/${steamAppID}/${adjusted_title}/`, '_blank');
	} else if (store_ID == 2){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.gamersgate.com/product/${adjusted_title}/`, '_blank');
	} else if (store_ID == 3){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.greenmangaming.com/games/${adjusted_title}`, '_blank');
	}else if (store_ID == 7){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("_");
		window.open(`https://www.gog.com/game/${adjusted_title}`, '_blank');
	}else if (store_ID == 11){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.humblebundle.com/store/${adjusted_title}`, '_blank');
	}else if (store_ID == 15){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		console.log(adjusted_title);
		window.open(`https://www.fanatical.com/en/game/${adjusted_title}`, "_blank");
	}else if (store_ID == 16){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.gamesrocket.com/${adjusted_title}.html`, '_blank');
	}else if (store_ID == 23){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.gamebillet.com/${adjusted_title}`, '_blank');
	}else if (store_ID == 24){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.voidu.com/en/${adjusted_title}`, '_blank');
	}else if (store_ID == 25){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.epicgames.com/store/en-US/p/${adjusted_title}`, '_blank');
	}else if (store_ID == 29){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://2game.com/en-us/${adjusted_title}`, '_blank');
	}else if (store_ID == 30){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://www.indiegala.com/store/game/${adjusted_title}/${steamAppID}`, '_blank');
	}else if (store_ID == 31){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		window.open(`https://us.shop.battle.net/en-us/family/${adjusted_title}`, '_blank');
	} else {
		console.log("No such store ID found.");
	}
}
export function returnValidURLs(steamAppID, gameTitle, store_ID){
	if(store_ID == 1){
		let adjusted_title = gameTitle.split(" ").slice(1).join("_");
		return (`https://store.steampowered.com/app/${steamAppID}/${adjusted_title}/`);
	} else if (store_ID == 2){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.gamersgate.com/product/${adjusted_title}/`);
	} else if (store_ID == 3){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.greenmangaming.com/games/${adjusted_title}`);
	}else if (store_ID == 7){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("_");
		return (`https://www.gog.com/game/${adjusted_title}`);
	}else if (store_ID == 11){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.humblebundle.com/store/${adjusted_title}`);
	}else if (store_ID == 15){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.fanatical.com/en/game/${adjusted_title}`);
	}else if (store_ID == 16){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.gamesrocket.com/${adjusted_title}.html`);
	}else if (store_ID == 23){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.gamebillet.com/${adjusted_title}`);
	}else if (store_ID == 24){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.voidu.com/en/${adjusted_title}`);
	}else if (store_ID == 25){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.epicgames.com/store/en-US/p/${adjusted_title}`);
	}else if (store_ID == 29){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://2game.com/en-us/${adjusted_title}`);
	}else if (store_ID == 30){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return (`https://www.indiegala.com/store/game/${adjusted_title}/${steamAppID}`);
	}else if (store_ID == 31){
		let adjusted_title = gameTitle.toLowerCase().split(" ").slice(1).join("-");
		return(`https://us.shop.battle.net/en-us/family/${adjusted_title}`);
	} else {
		console.log("No such store ID found.");
	}
}