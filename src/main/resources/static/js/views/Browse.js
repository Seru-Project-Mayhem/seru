import {rapidApi_token} from "../ApiKeys/keys.js";
import {cheapSharkCardBuilder, ratingEvent, SetFavoriteEvent, urlRedirectEvent} from "./Home.js";
import {renderSearchQueryResults, searchBarEvent} from "./partials/Navbar.js";


export default function Browse(){

    return `
            <header>
            <h1 class="text-center">Browse games</h1>
        </header>
        <main>
         <div class="left">
        <!-- Section: Sidebar -->
        <section>

            <!-- Section: Store -->
            <section class="mb-4 stores">

                <h6 class="font-weight-bold mb-3">Stores</h6>

                <div class="form-check pl-0 mb-3">
                    <input type="checkbox" class="form-check-input filled-in" id="Steam">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="Steam">Steam</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="checkbox" class="form-check-input filled-in" id="GamersGate">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GamersGate">Gamers Gate</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="checkbox" class="form-check-input filled-in" id="GreenManGaming">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GreenManGaming">Green Man Gaming</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="GOG">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GOG">GOG</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="HumbleStore">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="HumbleStore">Humble Store</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="Fanatical">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="Fanatical">Fanatical</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="GamesRocket">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GamesRocket">Games Rocket</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="GameBillet">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GameBillet">Game Billet</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="Voidu">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="Voidu">Voidu</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="EpicGameStore">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="EpicGameStore">Epic Game Store</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="2Game">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="2Game">2Game</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="IndieGala">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="IndieGala">Indie Gala</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in" id="BlizzardShop">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="BlizzardShop">Blizzard Shop</label>
                </div>

            </section>
            <!-- Section: Stores -->

            <!-- Section: Search Box -->
            <section class="mb-4 search-box">

                <div class="md-form md-outline mt-0 d-flex justify-content-between align-items-center">
                    <input class="form-control mb-0" id="sidebar-input" type="search" placeholder="Search...">
                    <a href="" class="btn btn-flat btn-md px-3 waves-effect magnifying-glass btn-sidebar"><i class="bi bi-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                             viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </i></a>               
                </div>

            </section>
            <!-- Section: Search Box -->

            <!-- Section: Price -->
            <section class="mb-4 price-selection">

                <h6 class="font-weight-bold mb-3">Price</h6>

                <div class="form-check pl-0 mb-3">
                    <input type="radio" class="form-check-input" id="under25" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="under25">Under $25</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="radio" class="form-check-input" id="2550" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="2550">$25 to $50</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="radio" class="form-check-input" id="50100" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="50100">$50 to $100</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="radio" class="form-check-input" id="100200" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="100200">$100 to $200</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="radio" class="form-check-input" id="200above" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="200above">$200 & Above</label>
                </div>

            </section>
            <!-- Section: Price -->

            <!-- Section: Price -->
            <section class="mb-4 min-max-selection">

                <h6 class="font-weight-bold mb-3">Price</h6>

                    <div class="d-flex align-items-center mt-4 pb-1">
                        <div class="md-form md-outline my-0">
                            <input id="from" type="text" class="form-control mb-0">
                            <label for="from">$ Min</label>
                        </div>
                        <p class="px-2 mb-0 text-muted"> - </p>
                        <div class="md-form md-outline my-0">
                            <input id="to" type="text" class="form-control mb-0">
                            <label for="to">$ Max</label>
                        </div>
                    </div>
     
            </section>
            <!-- Section: Price -->

        </section>
        <!-- Section: Sidebar -->
    </div>
        
         <div class="container-parent-browse">
       
            <hr><hr><hr>
            
            <div class="row d-flex justify-content-center" id="container-browse-games">
            
            </div>
            </div>
            <footer style="margin-top: 10em"></footer>
        </main>

    `;

}

export function sideBarSearchEvent(){

    $(".btn-sidebar").on('click', function () {

        let searchQuery = $("#sidebar-input").val();
        console.log(typeof searchQuery);
        console.log("sidebar value is: " + searchQuery);

        fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=${searchQuery}&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID=1%2C2%2C3`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
                "x-rapidapi-key": rapidApi_token,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                renderSearchQueryResults(data)
            })
            .catch(err => {
                console.error(err);
            });
    })
}

export function infiniteScrollingEvent(value){
    let page = 1;
    let currentScrollHeight = 0;

    $(window).on("scroll", () => {
        const scrollHeight = $(document).height();
        const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
        const isBottom = scrollHeight - 300 < scrollPos;

        if (isBottom && currentScrollHeight < scrollHeight) {

            fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&desc=0&output=json&steamworks=0&sortBy=Reviews&AAA=true&pageSize=60&exact=0&upperPrice=${value}&pageNumber=${page}&onSale=0&metacritic=0&storeID=1`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
                    "x-rapidapi-key": rapidApi_token,
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Another 60 games are being added to the view");
                    $("#container-browse-games").append(cheapSharkCardBuilder(data));
                    page = page + 1;
                })
                .catch(err => {
                    console.error(err);
                });
            currentScrollHeight = scrollHeight;
        }
    });

}

export function cheapSharkBrowseGet(){
    fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=true&output=json&steamworks=false&sortBy=Savings&AAA=0&pageSize=60&exact=0&upperPrice=60&pageNumber=0&onSale=0&metacritic=0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
            "x-rapidapi-key": rapidApi_token,
        }
    })
        .then(response => response.json())
        .then(data => {
            $("#container-browse-games").append(cheapSharkCardBuilder(data));
            SetFavoriteEvent();
            ratingEvent();
            searchBarEvent();
            urlRedirectEvent();
            infiniteScrollingEvent();

        })
        .catch(err => {
            console.error(err);
        });
}
