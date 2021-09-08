export default function FreeToPlayView(){

    return `
    <header>
        <h1>Free to Play</h1>
    </header>    
    <main>
    <div class="container-free-to-play-page row ">
        <p>Hello from Free to play</p>
    </div>
    </main>
    `;

}

export function freeCardBuilder2(listOfGames) {
    console.log("Success in List of free to play games");
    let card = '';
    listOfGames.forEach(function (games){
        card += `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${games.thumbnail}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > ${games.title}</h5>
     <p class="card-text" > ${games.short_description} </p>
    <p class="card-text" > Free to play </p>
    <p class="card-text">${games.game_url}</p>
    
    <button onclick="">Get Now</button>
  </div>
</div>`
    })
    $(".container-free-to-play-page").append(card);
    return card;
}