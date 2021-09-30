export default function Navbar(props) {
    if (localStorage.getItem("access_token")) { ////if the access toke is here ill show logout
        // if not it will return else on line 24//
        return `
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-3" id="navbar">
          <div class="container-fluid">
             <img src="assets/Seru-Logo.png" alt="" class="navbar-brand" id="seru" style=height:3em;>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                    <a href="/" data-link class="nav-link nav" style="color: white ">Home</a>
                      </li>
                     <li class="nav-item">
                    <a href="/freetoplay" data-link class="nav-link nav" style="color: white">Free to Play</a>
                    </li>
                    <li class="nav-item ">
                    <a href="/browse" data-link class="nav-link nav" style="color: white">Browse</a>
                    </li>
                    <li class="nav-item">
                    <a href="/logout" data-link class="nav-link nav" style="color: white" id="logout-btn">Logout</a>
                    </li>
             
      </ul>
         </div>
         </div>
        </nav>

    `;
    } else {
        return `
             <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-3" id="navbar">
          <div class="container-fluid">
          <img src="assets/Seru-Logo.png" alt="" class="navbar-brand" id="seru" style="height: 3em">
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                    <a href="/" data-link class="nav-link nav" style="color: white ">Home</a>
                      </li>
                     <li class="nav-item">
                    <a href="/freetoplay" data-link class="nav-link nav" style="color: white">Free to Play</a>
                    </li>
                    <li class="nav-item ">
                    <a href="/browse" data-link class="nav-link nav" style="color: white">Browse</a>
                    </li>
                    <li class="nav-item">
                    <a href="/login" data-link class="nav-link nav" style="color: white" id="logout-btn">Login</a>
                    </li>
                      <li class="nav-item">
                    <a href="/register" data-link class="nav-link nav" style="color: white">Register</a>
                    </li>
           
      </ul>
         </div>
         </div>
        </nav>
    `;

    }

}

