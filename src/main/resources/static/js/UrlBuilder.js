export function returnValidURL(store_ID, game){
	if(store_ID === 1){
		let adjusted_title = game.title.split().join("_")
		return `https://steampowered.com/${game.steamAppID}/${adjusted_title}`
	} else if (store_ID === 2){
		let adjusted_title = game.title.split().join("-")
		return `https://www.gamersgate.com/product/${adjusted_title}/`
	} else if (store_ID === 3){
		let adjusted_title = game.title.split().join("-")
		return `https://www.greenmangaming.com/games/${adjusted_title}`
	}else if (store_ID === 7){
		let adjusted_title = game.title.split().join("_")
		return `https://www.gog.com/game/${adjusted_title}`
	}else if (store_ID === 11){
		let adjusted_title = game.title.split().join("-")
		return `https://www.humblebundle.com/store/${adjusted_title}`
	}else if (store_ID === 15){
		let adjusted_title = game.title.split().join("-")
		return `https://www.fanatical.com/en/game/${adjusted_title}`
	}else if (store_ID === 16){
		let adjusted_title = game.title.split().join("-")
		return `https://www.gamesrocket.com/${adjusted_title}.html`
	}else if (store_ID === 23){
		let adjusted_title = game.title.split().join("-")
		return `https://www.gamebillet.com/${adjusted_title}`
	}else if (store_ID === 24){
		let adjusted_title = game.title.split().join("-")
		return  `https://www.voidu.com/en/${adjusted_title}`
	}else if (store_ID === 25){
		let adjusted_title = game.title.split().join("-")
		return `https://www.epicgames.com/store/en-US/p/${adjusted_title}`
	}else if (store_ID === 29){
		let adjusted_title = game.title.split().join("-")
		return `https://2game.com/en-us/${adjusted_title}`
	}else if (store_ID === 30){
		let adjusted_title = game.title.split().join("-")
		return `https://www.indiegala.com/store/game/${adjusted_title}/${game.steamAppID}`
	}else if (store_ID === 31){
		let adjusted_title = game.title.split().join("-")
		return `https://us.shop.battle.net/en-us/family/${adjusted_title}`
	} else {
		return "No such store ID found."
	}
}