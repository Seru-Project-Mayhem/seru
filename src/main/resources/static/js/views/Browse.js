import {rapidApi_token} from "../keys.js";
import {cheapSharkCardBuilder, reviewRedirect, SetFavoriteEvent, urlRedirectEvent} from "./Home.js";


export default function Browse(props){

    return `
        <main>
        <div>        
         <div class="left mx-5" id="browse">
        <!-- Section: Sidebar -->
        <section>

           <!-- Section: Categories -->
            <section>
            
              <h5>Stores</h5>
            
              <div class="mb-5">
               
                <ul style="list-style-type: none">
                <li class="stores" value="1">Steam</li>
                <li class="stores" value="2">GamersGate</li>
                <li class="stores" value="3">Green Man Gaming</li>
                <li class="stores" value="7">GOG</li>
                <li class="stores" value="11">Humble Store</li>
                <li class="stores" value="15">Fanatical</li>
                <li class="stores" value="23">GameBillet</li>
                <li class="stores" value="24">Voidu</li>
                <li class="stores" value="25">Epic Game Store</li>
                <li class="stores" value="29">2Game</li>
                <li class="stores" value="30">IndieGala</li>
                <li class="stores" value="31">Blizzard</li>
                </ul>
                <button type="button" class="btn btn-primary pl-3" id="btn-stores">Get</button>
                <input class="btn btn-primary" type="reset" value="Reset" id="reset-store-selection">
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
                <button type="button" class="btn btn-primary" id="btn-price">Get</button>
            </section>
            <!-- Section: Price -->

        </section>
        <!-- Section: Sidebar -->
    </div>
        
         <div class="container-parent-browse mt-5">
                   
            <div class="row d-flex justify-content-center" id="container-browse-games">
            
            </div>
            </div>
            <footer style="margin-top: 10em"></footer>
        </main>

    `;

}


export function sideBarStoreEvent(){
    let storesNum = [];

    $('#reset-store-selection').on('click', function () {
        window.location.reload();
    })

    $('.stores').on('click',function () {

        $(this).css({color: '#ffffff', backgroundColor: "#900DFF"});
        storesNum.push($(this).val());

        $('#btn-stores').on('click', function () {
            queryStoresEvent(storesNum);
        })

    })

    $('#btn-price').on('click', function (){

        let min = $("#from").val();
        let max = $("#to").val();

        queryByPriceEvent(min, max);

    })

}

export function queryByPriceEvent(min, max){

    fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=0&upperPrice=${max}&exact=0&pageSize=60&AAA=0&sortBy=Deal%20Rating&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=${min}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
            "x-rapidapi-key": rapidApi_token
        }
    })
        .then(response => response.json())
        .then(data => {
            $("#container-browse-games").empty();
            $("#container-browse-games").append(cheapSharkCardBuilder(data));
            sideBarStoreEvent();
            sideBarSearchEvent();
            infiniteScrollingEvent();
            reviewRedirect();
            SetFavoriteEvent();
            urlRedirectEvent();
        })
        .catch(err => {
            console.error(err);
        });
}

export function queryStoresEvent(storesNum){

    let additionalStore = "";
    let storequery = storesNum[0];

    if(storesNum.length > 1){
        for(let i = 0; i < storesNum.length; i++){

            let storeOne = storesNum[0];

            if(i > 0){
                additionalStore += "%2C" + storesNum[i];

                storequery = storeOne + additionalStore;
            }
        }
    }

    fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=${storequery}&metacritic=0&onSale=0&pageNumber=0&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Deal%20Rating&steamworks=0&output=json&desc=0&steamRating=0&lowerPrice=0`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
            "x-rapidapi-key": rapidApi_token
        }
    })
        .then(response => response.json())
        .then(data => {
            $("#container-browse-games").empty();
            $("#container-browse-games").append(cheapSharkCardBuilder(data));
            sideBarStoreEvent();
            sideBarSearchEvent();
            infiniteScrollingEvent();
            reviewRedirect();
            SetFavoriteEvent();
            urlRedirectEvent();
        })
        .catch(err => {
            console.error(err);
        });

}



export function sideBarSearchEvent(){
    $(".btn-sidebar").on('click', function () {

        let searchQuery = $("#sidebar-input").val();

        fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?storeID=1%2C2%2C3%2C7%2C11%2C15%2C23%2C24%2C25%2C29%2C30%2C31&metacritic=0&onSale=0&pageNumber=0&upperPrice=50&exact=0&pageSize=60&AAA=0&sortBy=Title&steamworks=0&output=json&desc=0&title=${searchQuery}&steamRating=0&lowerPrice=0`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
                "x-rapidapi-key": rapidApi_token,
            }
        })
            .then(response => response.json())
            .then(data => {
                $("#container-browse-games").empty();
                $("#container-browse-games").append(cheapSharkCardBuilder(data));
                SetFavoriteEvent();
                sideBarSearchEvent();
                sideBarStoreEvent();
                urlRedirectEvent();
                infiniteScrollingEvent();
            })
            .catch(err => {
                console.error(err);
            });
    })
}

export function infiniteScrollingEvent(){
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
                    $("#container-browse-games").append(cheapSharkCardBuilder(data));
                    page += 1;
                })
                .catch(err => {
                    console.error(err);
                });
            currentScrollHeight = scrollHeight;
        }
    });
}

export function initBrowse() {
    sideBarSearchEvent();
    sideBarStoreEvent();
}
