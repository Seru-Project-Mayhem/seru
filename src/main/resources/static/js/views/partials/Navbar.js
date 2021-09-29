
    export default function Navbar(props) {
        if (localStorage.getItem("access_token")) { ////if the access toke is here ill show logout
            // if not it will return else on line 24//
            return `
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-5" id="navbar">
          <div class="container-fluid">
              <div class="navbar-nav">
                    <a href="/" data-link class="nav-link nav" style="color: white ">Home</a>
                    <a href="/freetoplay" data-link class="nav-link nav" style="color: white">Free to Play</a>
                    <a href="/browse" data-link class="nav-link nav" style="color: white">Browse</a>
              </div>
               <h1 class="text-center w-90" id="seru">Seru</h1>
              <div class="navbar-nav" style="float: right">
                    <a href="/logout" data-link class="nav-link nav" style="color: white" id="logout-btn">Logout</a>
                   
                    <a href="/user" data-link class="nav-link nav" style="color: white">User</a>
              </div>
            </div>
        </nav>

    `;
        }else{
            return `
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-5" id="navbar">
          <div class="container-fluid">
              <div class="navbar-nav">
                    <a href="/" data-link class="nav-link nav" style="color: white ">Home</a>
                    <a href="/freetoplay" data-link class="nav-link nav" style="color: white">Free to Play</a>
                    <a href="/browse" data-link class="nav-link nav" style="color: white">Browse</a>
              </div>
               <h1 class="text-center w-90" id="seru">Seru</h1>
              <div class="navbar-nav" style="float: right">
                    <a href="/login" data-link class="nav-link nav" style="color: white">Login</a>
                    <a href="/register" data-link class="nav-link nav" style="color: white">Register</a>
                    <a href="/user" data-link class="nav-link nav" style="color: white">User</a>
              </div>
            </div>
        </nav>

    `;
        }
    }