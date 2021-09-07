export default function Navbar(props) {

    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <div class="navbar-nav">
                    <a href="/" data-link class="nav-link" style="color: dodgerblue">Home</a>
                    <a href="/login" data-link class="nav-link" style="color: dodgerblue">Login</a>
                    <a href="/register" data-link class="nav-link" style="color: dodgerblue">Register</a>
              </div>
            </div>
        </nav>
    `;
}