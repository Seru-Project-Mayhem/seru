import {reviewRedirect, SetFavoriteEvent} from "./Home.js";

export default function FreeToPlayView(props){

    return `
   
    <main>
    <div class="container-parent mt-5">  
    <div class="row d-flex justify-content-center" id="container-free-to-play-page">
    </div>
    </div>
    </main>
    <footer style="margin-top: 5em; height: 10em"></footer>
    `;

}

export function freeCardBuilder(listOfGames) {

    return listOfGames.map(game => {
        return `
    <div class="flip-card overflow-hidden overflow-auto" style="width: 18rem">
  
            <img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
            <div class="card-body d-flex flex-column">
                    <h5 class="card-title" style="color: white"> ${game.title}</h5>
                    <p class="card-text" id="free-to-play" style="color: white"> Free to play </p>
                    <p class="card-text" style="color: white"> ${game.short_description} </p>
                    <button type="button" class="btn-get btn btn-primary" style="position: absolute; bottom: 15px"  onclick=" window.open('${game.game_url}','_blank')">Get Now</button>
            </div>
       
    </div>
`
    });
}

export function apiData(data){

    let counter = 0;
    let jsonData = data;
    let size = 25;
    let items = jsonData.slice(counter, size);
    $("#container-free-to-play-page").append(freeCardBuilder(items));

    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPos = $(window).height() + $(window).scrollTop();
        if(((scrollHeight - 300) >= scrollPos) / scrollHeight === 0 && counter <= 365){
            counter += 25;
            size += 25;
            items = jsonData.slice(counter,size);
            $("#container-free-to-play-page").append(freeCardBuilder(items));
            $(".card").off("click", SetFavoriteEvent);
            SetFavoriteEvent();
            reviewRedirect();
        }
    });
}


