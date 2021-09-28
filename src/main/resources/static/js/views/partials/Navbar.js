export default function Navbar(props) {

    return `
        <nav class="navbar sticky-top navbar-expand-lg bg-dark navbar-dark mb-5" id="navbar">
          <div class="container-fluid">
          <a class="navbar-brand" href="/">Seru</a>
            
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    
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
