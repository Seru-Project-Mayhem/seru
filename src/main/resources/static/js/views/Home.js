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
        </main>
    `;
}
export function cardBuilder(){
    console.log("Success")
    let gamesdata = [{"title": "Divine Divinity", "salePrice": "0.59","metacriticScore": "81","thumb":"https://cdn.cloudflare.steamstatic.com/steam/apps/214170/capsule_sm_120.jpg?t=1568735839"},
        {"title": "Brothers: A Tale of Two Sons", "salePrice": "2.99","metacriticScore": "90","thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/225080/capsule_sm_120.jpg?t=1620123682" },
        {"title": "Homeworld: Deserts of Kharak", "salePrice": "4.99","metacriticScore": "79","thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/281610/capsule_sm_120.jpg?t=1577997545"},
        {"title": "Beyond Divinity", "salePrice": "0.59","metacriticScore": "73","thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/219760/capsule_sm_120.jpg?t=1568735797" },
        {"title": "Divinity: Dragon Commander", "salePrice": "3.99","metacriticScore":  "76","thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/243950/capsule_sm_120.jpg?t=1568735710" }];
    let card = '';
    gamesdata.forEach(function(games){
        card += `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${games.thumb}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`})
    $("#container").append(card);
    console.log(card);
    return card;
}
