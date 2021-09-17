import {rapidApi_token} from "../ApiKeys/keys.js";
import {cheapSharkCardBuilder, ratingEvent, SetFavoriteEvent, urlRedirectEvent} from "./Home.js";
import {renderSearchQueryResults, searchBarEvent} from "./partials/Navbar.js";


export default function Browse(){

    return `
            <header>
             
               
            <h1 class="text-center">Browse games</h1>
        </header>
        <main>
        
        <div>
                  
        
         <div class="left">
        <!-- Section: Sidebar -->
        <section>

            <!-- Section: Store -->
            <section class="mb-4 stores">

                <h6 class="font-weight-bold mb-3">Stores</h6>
            <div id="checkboxList" class="form-group">
                <div class="form-check pl-0 mb-3">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="1" id="Steam" />
                    <label class="form-check-label small text-uppercase card-link-secondary" for="Steam">Steam</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="2" id="GamersGate">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GamersGate">Gamers Gate</label>
                </div>
                <div class="form-check pl-0 mb-3">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="3" id="GreenManGaming">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GreenManGaming">Green Man Gaming</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="7" id="GOG">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GOG">GOG</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="11" id="HumbleStore">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="HumbleStore">Humble Store</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" id="Fanatical">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="Fanatical">Fanatical</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="15" id="GamesRocket">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GamesRocket">Games Rocket</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="23" id="GameBillet">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="GameBillet">Game Billet</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="24" id="Voidu">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="Voidu">Voidu</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="25" id="EpicGameStore">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="EpicGameStore">Epic Game Store</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="29" id="2Game">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="2Game">2Game</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="30" id="IndieGala">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="IndieGala">Indie Gala</label>
                </div>
                <div class="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" class="form-check-input filled-in checkbox" name="store" value="31" id="BlizzardShop">
                    <label class="form-check-label small text-uppercase card-link-secondary" for="BlizzardShop">Blizzard Shop</label>
                </div>
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

export function sideBarCheckboxEvent(){

    console.log($('.checkbox'));

    console.log($('.checkbox'));
    $('.form-check-input').change(function () {
        if(this.checked){
            console.log(this + " was changed");
        }
    })


    // $('input[type="checkbox"]').off('change'); // detach event
    // $('input[type="checkbox"]').on('change', checkboxChanged); // add new event

    //lines 168-169 would hopefully join selected stores into an array so we can insert into a query
    // let stores = [];
    // $("#checkboxList").find('[value=' + stores.join('], [value=') + ']').prop("checked", true);

    // $('input[name=store]').is(':checked')
    // $('input[name=store]').attr('checked')
    // $('input[name=store]').attr('checked', false);
    //
    // console.log("I made it to sideBarCheckboxEvent!")
    //
    // $("input[name=store]").on('click', function () {
    // //
    //     console.log("hello from inside")
    // $(this).attr('checked', true);

    //     if($(this.checked)){
    //         $('input[name=store]').attr('checked', true);
    //         $(this).val(1);
    //     }else{
    //         $('input[name=store]').attr('checked', false);
    //         $(this).val(0);
    //     }
    //
    //         });

}

export function sideBarSearchEvent(){

    console.log("sideBarSearchEvent is called");

    $(".btn-sidebar").on('click', function () {

        let searchQuery = $("#sidebar-input").val();

        console.log("sidebar value is: " + searchQuery);

        fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C16%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=0&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Title&steamworks=0&output=json&desc=0&title=${searchQuery}&steamRating=0&lowerPrice=0`, {
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
                SetFavoriteEvent();
                ratingEvent();
                searchBarEvent();
                sideBarSearchEvent();
                sideBarCheckboxEvent();
                urlRedirectEvent();
                infiniteScrollingEvent();
            })
            .catch(err => {
                console.error(err);
            });
    })
}

export function infiniteScrollingEvent(value){

    console.log("infiniteScrollingEvent is called");

    let page = 1;
    let currentScrollHeight = 0;

    $(window).on("scroll", () => {
        const scrollHeight = $(document).height();
        const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
        const isBottom = scrollHeight - 300 < scrollPos;

        if (isBottom && currentScrollHeight < scrollHeight) {

            fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&desc=0&output=json&steamworks=0&sortBy=Reviews&AAA=true&pageSize=60&exact=0&upperPrice=60&pageNumber=${page}&onSale=0&metacritic=0&storeID=1`, {
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
    fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C16%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=1&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Savings&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=0", {
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
            sideBarSearchEvent();
            sideBarCheckboxEvent();
            urlRedirectEvent();
            infiniteScrollingEvent();
        })
        .catch(err => {
            console.error(err);
        });
}
