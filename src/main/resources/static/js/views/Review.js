import createView from "../createView.js";
import {login} from "../auth.js";

export default function Review() {
    return `<!DOCTYPE html>

<head>
    <meta charset="UTF-8"/>
    <title>Game Reviews</title>
</head>
<body>

 <div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="review" class="form-label">Leave your review</label>
  <textarea class="form-control" id="review" rows="3"></textarea>
<button id="review-btn">Submit Your Review</button>

</div>

</body>
`;

}


export function reviewEvent() {


    $("#review-btn").click(function () {

        let post = {
            email: $('#email').val(),
            password: $('#review').val()
        }

        console.log(post);

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