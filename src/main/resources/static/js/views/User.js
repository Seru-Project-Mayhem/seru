export function User(props){

    return `
    <div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="media align-items-end profile-head">
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0" style="color: black">Please Pass username</h4>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">whatever our review.length for the user returns</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Reviews.length</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">whatever our wishlist.length for user returns</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Wishlist.length</small>
                    </li>
           
                </ul>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">Wishlist</h5>
                <div class="Container-wishlist">
                
                </div>
            </div>
    </div>
</div>
    `
}
