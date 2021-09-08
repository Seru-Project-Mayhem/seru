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

    return listOfGames.map( game => {
    let savings = parseFloat(game.savings).toFixed(1);
      return  `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${game.thumb}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > ${game.title}</h5>
    <p class="card-text" > Current Price $${game.salePrice}</p>
    <p class="card-text"> Total Savings ${savings}%</p>
     <p class="card-text"> Normal Price ${game.normalPrice}</p>
    <p class="card-text"> Steam Rating: ${game.SteamRatingPercent}</p>
    
    <a href="#" class="btn btn-primary">Get Now</a>
  </div>
</div>`
    });

}

export function freeCardBuilder(listOfGames) {

    return listOfGames.map(game => {
        return `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > ${game.title}</h5>
     <p class="card-text" > ${game.short_description} </p>
    <p class="card-text" > Free to play </p>
    <a target="_blank" href="https://google.com"></a>
    
    <button type="button" class="btn-get" onclick=" window.open('${game.game_url}','_blank')">Get Now</button>
  </div>
</div>`
    });


}






