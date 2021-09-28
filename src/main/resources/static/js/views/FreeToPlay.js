import {reviewRedirect, SetFavoriteEvent} from "./Home.js";

export default function FreeToPlayView(props){

    return `
   
    <main>
    <div class="container-parent mt-5">  
    <div class="row d-flex justify-content-center" id="container-free-to-play-page">
    </div>
    </div>
    </main>
    <footer style="margin-top: 5em"></footer>
    `;

}

export function freeCardBuilder(listOfGames) {

    return listOfGames.map(game => {
        return `
<div class="flip-card" style="width: 18rem;">
  <div class="flip-card-inner">
  	<div class="flip-card-front">
    	<img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
  		<div class="card-body">
  		<div id="free-to-play">
    		<h5 class="card-title" > ${game.title}</h5>
    		<p class="card-text" > Free to play </p>
       </div>
    	</div>
    </div>
    <div class="flip-card-back" id="free-to-play-card-back">
      <h5 class="card-title" > ${game.title}</h5>
       <hr class="white-line" style="color: white">
     	<p class="card-text" > ${game.short_description} </p>
    	<p class="card-text" id="free-to-play"> Free to play </p>
    	<a class="review-btn"  href="/review" onclick="window.location.href = '/review'" id="leave-review-btn"> Leave Review</a>
<!--    	<form>-->
<!--    	    <input class="editRating" type="number" min="0" max="10" step="0.5">-->
<!--    	    <button class="submitForm">Submit</button>-->
<!--        </form>-->
       <br>
<br>
<br>
            		<button type="button" class="btn-get btn btn-primary" onclick=" window.open('${game.game_url}','_blank')">Get Now</button>

    </div>
  </div>
</div>`
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


