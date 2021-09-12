export default function Login(props) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Log In</title>
</head>
<body>

  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Log in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control form-control-lg" />
              <label class="form-label" for="email">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" />
              <label class="form-label" for="password">Password</label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-start mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit" id="login-btn" value="Log In">Login</button>

            <hr class="my-4">

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>

          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>`;




}
