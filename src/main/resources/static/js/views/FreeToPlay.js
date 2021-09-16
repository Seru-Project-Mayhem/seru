
export default function FreeToPlayView(){

    return `
    <div class="container-parent">
    <header>
        <h1 class="text-center">Free to Play</h1>
    </header>    
    <main>
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
    		<h5 class="card-title" > ${game.title}</h5>
    		<p class="card-text" > Free to play </p>
       
    	</div>
    </div>
    <div class="flip-card-back">
      <h5 class="card-title" > ${game.title}</h5>
     	<p class="card-text" > ${game.short_description} </p>
    	<p class="card-text" > Free to play </p>
    	<a class="review-btn"  href="/review" onclick="window.location.href = '/review'" > Leave Review</a>
    	<form>
    	    <input class="editRating" type="number" min="0" max="10" step="0.5">
    	    <button class="submitForm">Submit</button>
        </form>
        <div class="var2">
    <a class="button two inactive desktop">
        <div class="icon-with-text">
            <div class="icon-with-text__icon">
                <div class="btn__effect">
                    <svg class="heart-stroke icon-svg icon-svg--size-4 icon-svg--color-silver" viewBox="20 18 29 28" aria-hidden="true" focusable="false"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
                    </svg>
                    <svg class="heart-full icon-svg icon-svg--size-4 icon-svg--color-blue" viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg>
                    <svg class="broken-heart" xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="5.707 17 48 16"><g fill="#0090E3">
                        <path class="broken-heart--left" d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"/>
                        <path class="broken-heart--right" d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"/></g>
                        <path class="broken-heart--crack" fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573"/></svg>
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
</div>
            		<button type="button" class="btn-get btn btn-primary" onclick=" window.open('${game.game_url}','_blank')">Get Now</button>

    </div>
  </div>
</div>`
    });
}

export function apiData(data){
    let counter = 0;
    let jsonData = data;
    console.log(jsonData);
    let size = 25;
    let items = jsonData.slice(counter, size);
    $("#container-free-to-play-page").append(freeCardBuilder(items));


    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPos = $(window).height() + $(window).scrollTop();
        if(((scrollHeight - 300) >= scrollPos) / scrollHeight === 0 && counter <= 365){
            console.log(counter)
            counter += 25;
            size += 25;
            items = jsonData.slice(counter,size);
            $("#container-free-to-play-page").append(freeCardBuilder(items));
        }
    });
}


