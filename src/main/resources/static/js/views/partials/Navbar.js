export default function Navbar(props) {

    return `
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
          <div class="container-fluid">
              <div class="navbar-nav">
                    <a href="/" data-link class="nav-link" style="color: white ">Home</a>
                    
                    <a href="/freetoplay" data-link class="nav-link" style="color: white">Free to Play</a>
                    <a href="/0to10" data-link class="nav-link" style="color: white">$0 to $10</a>
                    <a href="/10to20" data-link class="nav-link" style="color: white">$10 to $20</a>
                    <a href="/20to30" data-link class="nav-link" style="color: white">$20 to $30</a>
                    <a href="/login" data-link class="nav-link" style="color: white">Login</a>
                    <a href="/register" data-link class="nav-link" style="color: white">Register</a>
              </div>
              <form class="d-flex" id="navbar-search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
        </nav>
    `;
}