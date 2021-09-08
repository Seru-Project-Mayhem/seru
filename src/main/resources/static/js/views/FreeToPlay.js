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
    let jsonData = data;
    console.log(jsonData);
}