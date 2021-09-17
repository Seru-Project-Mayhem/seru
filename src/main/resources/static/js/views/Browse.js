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

           <!-- Section: Categories -->
            <section>
            
              <h5>Stores</h5>
            
              <div class="mb-5">
               
               <ul>
               <li class="stores" value="1">Steam</li>
               <li class="stores" value="2">GOG</li>
               </ul>
            
             
               <input class="stores" value="3"><a>Epic Game Store</a></input>

               
              </div>
            
            </section>
            <!-- Section: Categories -->

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

    console.log("We made it to sideBarCheckboxEvent!");

    $('.stores').on('click',function () {
        $(this).css({background: "red"});
        console.log($(this).val());
    })
    //
    // $('.stores').on('click',function () {
    //     $('.stores').css({background: "red"});
    //     console.log($('.stores').val());
    // })

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

export function initBrowse(){

    infiniteScrollingEvent();
    sideBarSearchEvent();
    sideBarCheckboxEvent();
}

// export function cheapSharkBrowseGet(){
//     fetch("https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C16%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=1&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Savings&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=0", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
//             "x-rapidapi-key": rapidApi_token,
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             $("#container-browse-games").append(cheapSharkCardBuilder(data));
//             SetFavoriteEvent();
//             ratingEvent();
//             searchBarEvent();
//             sideBarSearchEvent();
//             sideBarCheckboxEvent();
//             urlRedirectEvent();
//             infiniteScrollingEvent();
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }
