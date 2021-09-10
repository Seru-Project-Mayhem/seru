import {freeCardBuilder} from "./Home.js";

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


