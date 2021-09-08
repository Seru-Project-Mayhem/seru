export default function FreeToPlayView(){

    return `
    <header>
        <h1>Free to Play</h1>
    </header>    
    <main>
    <div class="container-free-to-play-page row d-flex justify-content-center">
        <p>Hello from Free to play</p>
    </div>
    </main>
    `;

}

export function freeCardBuilder2(listOfGames) {

    return listOfGames.map(game => {
        return `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > ${game.title}</h5>
     <p class="card-text" > ${game.short_description} </p>
    <p class="card-text" > Free to play </p>
    
    <button class="btn-get" onclick=" window.open('${game.game_url}','_blank')">Get Now</button>
  </div>
</div>`
    })
}

export function apiData(data){
    let jsonData = data;
    console.log(jsonData);
}