export default function Navbar(props) {

    return `
<nav class="navbar navbar-expand-md bg-dark navbar-dark" id="navbar">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" aria-current="page" href="/" data-link>Search</a>-->
<!--                        </li>-->
                        <li class="nav-item">
                            <a class="nav-link" href="/" data-link="">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/freetoplay" data-link="">Free to Play</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/browse" data-link="">Browse</a>
                        </li>
                          <h1 class="text-center w-90">Seru</h1>
                          <div class="navbar-nav" style="float: right">
                        <li class="nav-item">
                            <a class="nav-link" href="/login" data-link="">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register" data-link="">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/user" data-link="">User</a>
                        </li>
                    </ul>
<!--                    <form id="nav-form" class="d-flex">-->
<!--                        <input class="form-control me-2" id="inputMain" type="search" placeholder="Search" aria-label="Search">-->
<!--                        <button class="btn btn-outline-dark" id="submit" type="submit">Search</button>-->
<!--                    </form>-->
                </div>
                </nav>
    `;
}

// Do not touch code beneath
//     `
//     <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-5" id="navbar">
//           <div class="container-fluid">
//               <div class="navbar-nav">
//                     <a href="/" data-link class="nav-link nav" style="color: white ">Home</a>
//                     <a href="/freetoplay" data-link class="nav-link nav" style="color: white">Free to Play</a>
//                     <a href="/browse" data-link class="nav-link nav" style="color: white">Browse</a>
//               </div>
//                <h1 class="text-center w-90">Seru</h1>
//               <div class="navbar-nav" style="float: right">
//                     <a href="/login" data-link class="nav-link nav" style="color: white">Login</a>
//                     <a href="/register" data-link class="nav-link nav" style="color: white">Register</a>
//                     <a href="/user" data-link class="nav-link nav" style="color: white">User</a>
//               </div>
//             </div>
//         </nav>
//
//
// `