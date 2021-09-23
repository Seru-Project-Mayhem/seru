import {returnValidURL} from "./UrlBuilder.js";
import render from "../render.js";
import router from "../router.js";
import {getGameInfo} from "./Review.js";

export default function Home(props) {
    return `
    <main>
               <div class="container mt-5" id="container-carousel"></div>
                
        <div class="container-parent">
    
            <div class="container" id="container-empty"></div> 
            <div class="row d-flex justify-content-center" id="container-games"></div>
           
        </div>
 
        <footer style="margin-top: 10em"></footer>
    </main>
    `;
}

export function freeToGameCarouselView(data){

    let num, num2, num3, num4, num5;

    for(let i = 0; i <= 4; i++){
        let random = Math.floor(Math.random() * 366);

        if(i == 0){
            num = random;
            // console.log("first random number: " + num);
        } if(i == 1){
            num2 = random;
            // console.log("second random number: " + num2);
        } if(i == 2){
            num3 = random;
            // console.log("third random number: " + num3);
        } if(i == 3){
            num4 = random;
            // console.log("fourth random number: " + num4);
        } if(i == 4) {
            num5 = random;
            // console.log("fifth random number: " + num5);
        }
    }

    return `
    <div class="carousel-container">
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators my-5">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${data[num].thumbnail}" class="d-block w-100" onClick="window.open('${data[num].game_url}','_blank')">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data[num].title}</h5>
        <p>${data[num].short_description}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${data[num2].thumbnail}" class="d-block w-100" onClick="window.open('${data[num2].game_url}','_blank')">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data[num2].title}</h5>
        <p>${data[num2].short_description}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${data[num3].thumbnail}" class="d-block w-100" onClick="window.open('${data[num3].game_url}','_blank')">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data[num3].title}</h5>
        <p>${data[num3].short_description}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${data[num4].thumbnail}" class="d-block w-100" onClick="window.open('${data[num4].game_url}','_blank')">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data[num4].title}</h5>
        <p>${data[num4].short_description}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${data[num5].thumbnail}" class="d-block w-100" onClick="window.open('${data[num5].game_url}','_blank')">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data[num5].title}</h5>
        <p>${data[num5].short_description}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    `;

}

export function reviewRedirect(){
    // console.log($(".review-btn"));
    $(".review-btn").on("click", function(){
        render(null, router("/review"))
        // let gameinRedirect = games.map(gameReview=>{return gameReview});
        console.log($(this).data("id"));
        // console.log("review clicked");
        let gameInfo = $(this).data("id");
        getGameInfo(gameInfo);
    });
}


export function cheapSharkCardBuilder(listOfGames) {
    // console.log(listOfGames);
    return listOfGames.map(game => {

        let savings = parseFloat(game.savings).toFixed(1);

    // let url = "assets/LOGOS/";
    // let svg = ".svg";
    // let png = ".png";
    // let store = url + game.storeID;
    //
    // if(game.storeID == 1 || game.storeID == 3 || game.storeID == 7 || game.storeID == 11 || game.storeID == 15 ||
    //    game.storeID == 25 || game.storeID == 29 || game.storeID == 30 || game.storeID == 31){
    //      store = store + svg;
    // } else if(game.storeID == 2 || game.storeID == 16 || game.storeID == 23 ||  game.storeID == 24){
    //     store = store + png;
    // }
    //  <img src= ${store} style="height: 80px; width: 150px;">

        // reviewRedirect(game);

        let store;

        if(game.storeID == 1){
            store = "Steam";
        } else if(game.storeID == 2){
            store = "GamersGate";
        } else if(game.storeID == 3) {
            store = "Green Man Gaming";
        } else if(game.storeID == 7) {
            store = "GOG";
        } else if(game.storeID == 11) {
            store = "Humble Store";
        } else if(game.storeID == 15){
            store = "Fanatical";
        } else if(game.storeID == 23){
            store = "GameBillet";
        } else if(game.storeID == 24){
            store = "Voidu";
        } else if(game.storeID == 25){
            store = "Epic Game Store";
        } else if(game.storeID == 29){
            store = "2Game";
        } else if(game.storeID == 30){
            store = "IndieGala";
        } else if(game.storeID == 31){
            store = "Blizzard";
        }

        let price;
        if(game.salePrice == "0.00"){
            price = "Free!";
        } else {
            price = ("$" + game.salePrice);
        }

        return  `
            <div class="flip-card" style="width: 20rem; height: 25rem">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="img-fluid" src="${game.thumb}" style="width: 100%; height: 10vh; object-fit: cover" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${game.title}</h5>
                    <p class="card-text"> Total Savings ${savings}%</p>
                    <p style="color: white">${store}</p>
                    <hr class="white-line" style="color: white">
<!--                <p class="card-text"> Normal Price <span style="text-decoration: line-through">$${game.normalPrice}</span></p>-->
                    <p class="card-text">${price}</p>
                    <button type="button" class="btn-details btn btn-light btn-sm mr-1 mb-2"><i class="fas fa-info-circle pr-2"></i>Details</button>
                </div>
            </div>
            <div class="flip-card-back">
                <h5 class="card-title game-title"> ${game.title}</h5>
                <p class="steam-id d-none">${game.steamAppID}</p>
                <a>
                     <p class="store-id d-none">${game.storeID}</p>
                     <p class="gameID d-none">${game.gameID}</p>
                </a>
                <p class="card-text prices"> Current Prices<br></p>
                <p class="card-text"> Total Savings ${savings}%</p>
                <p class="card-text"> Steam Rating: ${game.steamRatingPercent}</p>
                <a class="review-btn mb-3"  href="/review" data-id=“${game.gameID}”> Leave Review</a><br><br><br>
                    <a class="button two inactive desktop">
                        <div class="icon-with-text">
                            <div class="icon-with-text__icon">
                                <div class="btn__effect">
                                    <svg class="heart-stroke icon-svg icon-svg--size-4 icon-svg--color-silver"
                                         viewBox="20 18 29 28" aria-hidden="true"
                                         focusable="false">
                                        <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
                                    </svg>
                                    <svg class="heart-full icon-svg icon-svg--size-4 icon-svg--color-blue"
                                         viewBox="0 0 19.2 18.5" aria-hidden="true"
                                         focusable="false">
                                        <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                                    </svg>
                                    <svg class="broken-heart"
                                         xmlns="http://www.w3.org/2000/svg" width="48"
                                         height="16" viewBox="5.707 17 48 16">
                                        <g fill="#0090E3">
                                            <path class="broken-heart--left"
                                                  d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"/>
                                            <path class="broken-heart--right"
                                                  d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"/>
                                        </g>
                                        <path class="broken-heart--crack" fill="none"
                                              stroke="#FFF" stroke-miterlimit="10"
                                              d="M29.865 18.205v14.573"/>
                                    </svg>
                                    <div class="effect-group">
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                <button class="btn btn-primary btn-cheapshark-get">Get Now</button>
            </div>
        </div>
    </div>
            
    `


    });

}

// `
//            <!-- Card -->
//             <div class="flip-card" style="width: 20rem; height: 25rem">
//
//               <div class="text-center">
//                <img class="img-fluid" style="width: 100%; height: 10vh; object-fit: cover" src="${game.thumb}" alt="Sample">
//
//                 <h5 style="color: white">${game.title}</h5>
//                 <p style="color: white">${savings}%</p>
//                 <p style="color: white">${store}</p>
//                 <hr style="color: white">
//                  <a class="review-btn"  href="/review" data-id=“${game.gameID}”> Leave Review</a>
//                 <h6 class="mb-3" style="color: white">$${game.salePrice}</h6>
//                 <button type="button" class="btn btn-primary btn-sm mr-1 mb-2 btn-cheapshark-get"><i
//                     class="fas fa-shopping-cart pr-2"></i>Get</button>
//                 <button type="button" class="btn btn-light btn-sm mr-1 mb-2"><i
//                     class="fas fa-info-circle pr-2"></i>Details</button>
//                 <button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip"
//                   data-placement="top" title="Add to wishlist"><i class="far fa-heart"></i></button>
//
//               </div>
//
//             </div>
//             <!-- Card -->
// `


// `
// <div class="flip-card" style="width: 18rem;">
//         <div class="flip-card-inner">
//             <div class="flip-card-front">
//                 <img class="card-img-top" src="${game.thumb}" alt="Card image cap">
//                 <div class="card-body">
//                     <h5 class="card-title"> ${game.title}</h5>
//                     <p class="card-text"> Current Price $${game.salePrice}</p>
//                     <p class="card-text"> Total Savings ${savings}%</p>
//                     <p class="card-text"> Steam Rating: ${game.steamRatingPercent}</p>
//
//              <a class="review-btn"  href="/review" data-id=“${game.gameID}”> Leave Review</a>
//                 </div>
//             </div>
//             <div class="flip-card-back">
//                 <h5 class="card-title game-title"> ${game.title}</h5>
//                 <p class="steam-id d-none">${game.steamAppID}</p>
//                 <a>
//                      <img src= ${store} style="height: 80px; width: 100px;">
//                      <p class="store-id ">${game.storeID}</p>
//                 </a>
//                 <p class="card-text"> Current Price $${game.salePrice}</p>
//                 <p class="card-text"> Total Savings ${savings}%</p>
//                 <p class="card-text"> Normal Price ${game.normalPrice}</p>
//                 <p class="card-text"> Steam Rating: ${game.steamRatingPercent}</p>
//                 <a class="review-btn"  href="/review" data-id=“${game.gameID}”> Leave Review</a>
//                 <div class="var2">
//                     <a class="button two inactive desktop">
//                         <div class="icon-with-text">
//                             <div class="icon-with-text__icon">
//                                 <div class="btn__effect">
//                                     <svg class="heart-stroke icon-svg icon-svg--size-4 icon-svg--color-silver"
//                                          viewBox="20 18 29 28" aria-hidden="true"
//                                          focusable="false">
//                                         <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
//                                     </svg>
//                                     <svg class="heart-full icon-svg icon-svg--size-4 icon-svg--color-blue"
//                                          viewBox="0 0 19.2 18.5" aria-hidden="true"
//                                          focusable="false">
//                                         <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
//                                     </svg>
//                                     <svg class="broken-heart"
//                                          xmlns="http://www.w3.org/2000/svg" width="48"
//                                          height="16" viewBox="5.707 17 48 16">
//                                         <g fill="#0090E3">
//                                             <path class="broken-heart--left"
//                                                   d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"/>
//                                             <path class="broken-heart--right"
//                                                   d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"/>
//                                         </g>
//                                         <path class="broken-heart--crack" fill="none"
//                                               stroke="#FFF" stroke-miterlimit="10"
//                                               d="M29.865 18.205v14.573"/>
//                                     </svg>
//                                     <div class="effect-group">
//                                         <span class="effect"></span>
//                                         <span class="effect"></span>
//                                         <span class="effect"></span>
//                                         <span class="effect"></span>
//                                         <span class="effect"></span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>
//                 </div>
//                 <button class="btn btn-primary btn-cheapshark-get">Get Now</button>
//             </div>
//         </div>
//     </div>
// `

// export function ratingEvent() {
//     $("form").hide();
//     $(".review-btn").on("click", function () {
//         $(this).siblings("form").toggle();
//     });
//
// }

export function SetFavoriteEvent() {
    console.log("Set favorite event was called")
        $(".button").click(function () {
            console.log("wishlist event fired off");
            if ($(this).hasClass("deactivate")) {
                $(this).removeClass("deactivate")
            }
            if ($(this).hasClass("active")) {
                $(this).addClass("deactivate")
            }
            $(this).toggleClass("animate");
            $(this).toggleClass("active");
            $(this).toggleClass("inactive");
        });
    $('.flip-card .flip-card-inner').dblclick(function() {
        $(this).closest('.flip-card').toggleClass('hover');
        $(this).css('transform, rotateY(180deg)');
        $(this).children().children().children(".white-line").hide();
    });
}

export function urlRedirectEvent() {
    $(".btn-cheapshark-get").on("click", function () {
        let store_id = $(this).siblings().children(".store-id").text();
        let gameTitle = $(this).siblings(".game-title").text();
        console.log(gameTitle)
        let steam_id = $(this).siblings(".steam-id").text()
        returnValidURL(steam_id, gameTitle, store_id);
    });
}

