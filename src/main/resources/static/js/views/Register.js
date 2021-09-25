import createView from "../createView.js";
import {login} from "../auth.js";

export default function Register(props){

    return `
    <header>
    </header>
    <body class="body-register mt-5">
    

    <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xl-9 mx-auto">
                        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                            <div class="card-img-left d-none d-md-flex">
                                <!-- Background image for card set in CSS! -->
                            </div>
                            <div class="card-body p-4 p-sm-5">
                                <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
                                <form>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="username" placeholder="Username" required autofocus>
                                        <label for="username">Username</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                        <label for="email">Email address</label>
                                    </div>

                                    <hr>

                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="password" placeholder="Password">
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="passwordConfirm" placeholder="Confirm Password">
                                        <label for="passwordConfirm">Confirm Password</label>
                                    </div>

                                    <div class="d-grid mb-2">
                                        <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit" id="register-btn">Register</button>
                                    </div>

                                    <a class="d-block text-center mt-2 small" href="/login" data-link>Have an account? Sign In</a>

                                    <hr class="my-4">

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</body>
    
    `;

}

export function RegisterEvent() {


    $("#register-btn").click(function () {

        let post = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }

        let request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        };

        fetch("http://localhost:8080/api/users/create", request)
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                    login(post.email, post.password);
                }
                createView("/");
            });

    })
}