import {
    freeToGameGet,
    cheapSharkZeroToTenGet,
    cheapSharkTwentyToThirtyGet,
    cheapSharkTenToTwentyGet
} from "../FetchQueries.js";

export default function Home(props) {
    return `
        <header>
            <h1 class="text-center">Seru</h1>
        </header>
        <main>

            <h2 class="text-center">Free to play</h2>
             <div id="container-free" class="row d-flex justify-content-center">
             
            </div>
            <h2 class="text-center">$0 - $10</h2>
           <div id="container-zerototen" class="row d-flex justify-content-center">
           
          </div>
           <h2 class="text-center">$10 - $20</h2>
           <div id="container-tentotwenty" class="row d-flex justify-content-center">
           
           </div>
           <h2 class="text-center">$20 - $30</h2>
           <div id="container-twentytothirty" class="row d-flex justify-content-center">
                  
            </div>
    
            <footer style="margin-top: 10em"></footer>
            
        </main>
    `;
}

export function cheapSharkCardBuilder(listOfGames) {
    console.log("Success")
    let card = '';
    listOfGames.forEach(function (games) {
        card += `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${games.thumb}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > ${games.title}</h5>
    <p class="card-text" > Current Price $${games.salePrice}</p>
    <p class="card-text"> Total Savings ${games.savings}%</p>
     <p class="card-text"> Normal Price ${games.normalPrice}</p>
    <p class="card-text"> Steam Rating ${games.steamRatingPercent}</p>
    
    <a href="#" class="btn btn-primary">Get Now</a>
  </div>
</div>`
    })
    return card;
}

export function freeCardBuilder(listOfGames) {
    console.log("Success");
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
    
    <button onclick="redirectToGetGame()">Get Now</button>
  </div>
</div>`
    })
    $("#container-free").append(card);
    return card;
}

export function freeCardBuilder2(listOfGames) {
    console.log("Success");
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
    
    <button onclick="redirectToGetGame()">Get Now</button>
  </div>
</div>`
    })
    $("#container-free-to-play-page").append(card);
    return card;
}



function redirectToGetGame(){

    console.log("we made it!");


}

