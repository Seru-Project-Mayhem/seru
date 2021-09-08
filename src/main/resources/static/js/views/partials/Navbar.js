export default function Navbar(props) {

    return `
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
          <div class="container-fluid">
              <div class="navbar-nav">
                    <a href="/" data-link class="nav-link" style="color: white">Home</a>
                    <a href="/login" data-link class="nav-link" style="color: white">Login</a>
                    <a href="/register" data-link class="nav-link" style="color: white">Register</a>
                    <a href="/freetoplay" data-link class="nav-link" style="color: white">Free to Play</a>
                     <form class="d-flex">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
              </div>
            </div>
        </nav>
    `;
}