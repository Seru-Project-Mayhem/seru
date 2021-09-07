import {
    freeToGameGet,
    cheapSharkZeroToTenGet,
    cheapSharkTwentyToThirtyGet,
    cheapSharkTenToTwentyGet
} from "../FetchQueries.js";

export default function Home(props) {
    console.log("Get er done")
    return `
        <header>
            <h1>Seru</h1>
        </header>
        <main>
       
            <div id="container" class="row">
                <p>
                    This is where all the cards and game images are going.
                </p>  
                  
            </div>
            
             <div id="container-free" class="row">
             
             <p></p>
</div>
           
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
    $("#container").append(card);
    console.log(card);
    return card;
}

export function freeCardBuilder(listOfGames) {
    console.log("Success")
    let card = '';
    listOfGames.forEach(function (games) {
        card += `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${games.thumbnail}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" > ${games.title}</h5>
     <p class="card-text" > ${games.short_description} </p>
    <p class="card-text" > Free to play </p>
    
  
    <button><a href="${games.game_url}" class="btn btn-primary">Play Now</a></button>
  </div>
</div>`
    })
    $("#container-free").append(card);
    console.log(card);
    return card;
}

