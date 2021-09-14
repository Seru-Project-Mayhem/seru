import {postRating} from "../FetchQueries.js";
import {rapidApi_token} from "../ApiKeys/keys.js";
import {returnValidURL} from "./UrlBuilder.js";

export default function Home(props) {
    return `
        <header>
            <h1 class="text-center">Seru</h1>
        </header>
        <main>
         <div class="container-parent">
            <div class="budget-wrap">
            <div class="budget">
            <div class="header">
          <div class="title clearfix" style="color: #ff5a84">Set your budget! <span class="pull-right"></span></div>
          </div>
        <div class="content">
         <input type="range" min="1" max="100" value="20" data-rangeslider>
        </div>
          <div class="footer clearfix">
         <div class="pull-right">
          <a href="javascript:void(0)" class="btn btn-pri" id="go-btn">Go</a>
          </div>
           </div>
            </div>
            </div>
            <hr><hr><hr>
            
            <div class="row d-flex justify-content-center" id="container-games">
            
            </div>
            </div>
            <footer style="margin-top: 10em"></footer>
        </main>
    `;
}

export function priceSliderEvent(){

    /*! rangeslider.js - v2.1.1 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
    !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return a&&(0===a.offsetWidth||0===a.offsetHeight||a.open===!1)}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=a.open?!1:!0)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;e>i;i++)g[i]=d[i].style.cssText,d[i].style.setProperty?d[i].style.setProperty("display","block","important"):d[i].style.cssText+=";display: block !important",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;e>j;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(a,b){var c=parseFloat(a);return Number.isNaN(c)?b:c}function i(a){return a.charAt(0).toUpperCase()+a.substr(1)}function j(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},n,e),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=o.orientation[this.orientation].dimension,this.DIRECTION=o.orientation[this.orientation].direction,this.DIRECTION_STYLE=o.orientation[this.orientation].directionStyle,this.COORDINATE=o.orientation[this.orientation].coordinate,this.polyfill&&m)return!1;this.identifier="js-"+k+"-"+l++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!==a};var k="rangeslider",l=0,m=b(),n={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},o={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return j.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},j.prototype.update=function(a,b){a=a||!1,a&&(this.min=h(this.$element[0].getAttribute("min"),0),this.max=h(this.$element[0].getAttribute("max"),100),this.value=h(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=h(this.$element[0].getAttribute("step"),1)),this.handleDimension=g(this.$handle[0],"offset"+i(this.DIMENSION)),this.rangeDimension=g(this.$range[0],"offset"+i(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,b)},j.prototype.handleDown=function(a){if(this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=this.getPositionFromNode(this.$handle[0])-c,e="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(e),b>=d&&b<d+this.handleDimension&&(this.grabPos=b-d)}},j.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a),c="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(c)},j.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},j.prototype.cap=function(a,b,c){return b>a?b:a>c?c:a},j.prototype.setPosition=function(a,b){var c,d;void 0===b&&(b=!0),c=this.getValueFromPosition(this.cap(a,0,this.maxHandlePos)),d=this.getPositionFromValue(c),this.$fill[0].style[this.DIMENSION]=d+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=d+"px",this.setValue(c),this.position=d,this.value=c,b&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(d,c)},j.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},j.prototype.getRelativePosition=function(a){var b=i(this.COORDINATE),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=0;return"undefined"!=typeof a["page"+b]?d=a["client"+b]:"undefined"!=typeof a.originalEvent["client"+b]?d=a.originalEvent["client"+b]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0]["client"+b]?d=a.originalEvent.touches[0]["client"+b]:a.currentPoint&&"undefined"!=typeof a.currentPoint[this.COORDINATE]&&(d=a.currentPoint[this.COORDINATE]),d-c},j.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=Number.isNaN(b)?0:b*this.maxHandlePos},j.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandlePos||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},j.prototype.setValue=function(a){(a!==this.value||""===this.$element[0].value)&&this.$element.val(a).trigger("input",{origin:this.identifier})},j.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+k),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[k]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+k);e||d.data("plugin_"+k,e=new j(this,b)),"string"==typeof b&&e[b].apply(e,c)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});
    $(function(){
        $('input[type="range"]').rangeslider({
            polyfill:false,
            onInit:function(){
                $('.header .pull-right').text('Max price: $' + $('input[type="range"]').val());
            },
            onSlide:function(position, value){
                // console.log('onSlide');
                // console.log('position: ' + position, 'value: ' + value);
                $('.header .pull-right').text('Max price: $'+value);
            },
            onSlideEnd:function(position, value){
                // console.log('onSlideEnd');
                // console.log('position: ' + position, 'value: ' + value);
                // console.log("value: " + value);
                userPriceSelectionQuery(value);
            }
        });
    });
}

export function userPriceSelectionQuery(value){
let pageNumber = 0;
    $("#go-btn").click(function () {

        console.log("Value is: " + value);
        $("#container-games").empty();

        fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&desc=0&output=json&steamworks=0&sortBy=Reviews&AAA=true&pageSize=60&exact=0&upperPrice=${value}&pageNumber=${pageNumber}&onSale=0&metacritic=0&storeID=1`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
                "x-rapidapi-key": rapidApi_token,
            }
        })
            .then(response => response.json())
            .then(data => {
                $("#container-games").append(cheapSharkCardBuilder(data));
                SetFavoriteEvent();
                ratingEvent();
                infiniteScrollingEvent(value);
                urlRedirectEvent();
                // location.reload();
            })
            .catch(err => {
                console.error(err);
            });

    });

}

export function infiniteScrollingEvent(value){
	let page = 1;
	let currentScrollHeight = 0;

	$(window).on("scroll", () => {
		const scrollHeight = $(document).height();
		const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
		const isBottom = scrollHeight - 300 < scrollPos;

		if (isBottom && currentScrollHeight < scrollHeight) {

			fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&desc=0&output=json&steamworks=0&sortBy=Reviews&AAA=true&pageSize=60&exact=0&upperPrice=${value}&pageNumber=${page}&onSale=0&metacritic=0&storeID=1`, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
					"x-rapidapi-key": rapidApi_token,
				}
			})
				.then(response => response.json())
				.then(data => {
					console.log("Another 60 games are being added to the view");
					$("#container-games").append(cheapSharkCardBuilder(data));
					page = page + 1;
				})
				.catch(err => {
					console.error(err);
				});
			currentScrollHeight = scrollHeight;
		}
	});

}

export function cheapSharkCardBuilder(listOfGames) {

    return listOfGames.map(game => {
    let savings = parseFloat(game.savings).toFixed(1);

      return  `
    <div class="flip-card" style="width: 18rem;">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="card-img-top" src="${game.thumb}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"> ${game.title}</h5>
                    <p class="card-text"> Current Price $${game.salePrice}</p>
                    <p class="card-text"> Total Savings ${savings}%</p>
                    <p class="card-text"> Steam Rating: ${game.steamRatingPercent}</p>

                </div>
            </div>
            <div class="flip-card-back">
                <h5 class="card-title game-title"> ${game.title}</h5>
                <p class="steam-id">${game.steamAppID}</p>
                <p class="store-id">${game.storeID}</p>

                <p class="card-text"> Current Price $${game.salePrice}</p>
                <p class="card-text"> Total Savings ${savings}%</p>
                <p class="card-text"> Normal Price ${game.normalPrice}</p>
                <p class="card-text"> Steam Rating: ${game.steamRatingPercent}</p>
                <a class="review-btn"  href="/review" onclick=" window.location.href = '/review'" > Leave Review</a>
                <div class="var2">
                    <a class="button two inactive desktop">
                        <div class="icon-with-text">
                            <div class="icon-with-text__icon">
                                <div class="btn__effect">
                                    <svg class="heart-stroke icon-svg icon-svg--size-4 icon-svg--color-silver"
                                         viewBox="20 18 29 28" aria-hidden="true"
                                         focusable="false">
                                        <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
                                    </svg>
                                    <svg class="heart-full icon-svg icon-svg--size-4 icon-svg--color-blue"
                                         viewBox="0 0 19.2 18.5" aria-hidden="true"
                                         focusable="false">
                                        <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                                    </svg>
                                    <svg class="broken-heart"
                                         xmlns="http://www.w3.org/2000/svg" width="48"
                                         height="16" viewBox="5.707 17 48 16">
                                        <g fill="#0090E3">
                                            <path class="broken-heart--left"
                                                  d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"/>
                                            <path class="broken-heart--right"
                                                  d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"/>
                                        </g>
                                        <path class="broken-heart--crack" fill="none"
                                              stroke="#FFF" stroke-miterlimit="10"
                                              d="M29.865 18.205v14.573"/>
                                    </svg>
                                    <div class="effect-group">
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                        <span class="effect"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <button class="btn btn-primary btn-cheapshark-get">Get Now</button>
            </div>
        </div>
    </div>`
    });
}


export function ratingEvent(){
    $("form").hide();
	$(".review-btn").on("click", function () {
		$(this).siblings("form").toggle();
	});

    $('.submitForm').on('click', function(){
        let rating = $(this).siblings('editRating').val()
        postRating(rating);
    });
}

export function SetFavoriteEvent() {
    console.log("Set favorite event was called")
        $(".button").click(function () {
            console.log("wishlist event fired off");
            if ($(this).hasClass("deactivate")) {
                $(this).removeClass("deactivate")
            }
            if ($(this).hasClass("active")) {
                $(this).addClass("deactivate")
            }
            $(this).toggleClass("animate");
            $(this).toggleClass("active");
            $(this).toggleClass("inactive");
        });

}

export function urlRedirectEvent(){
    $(".btn-cheapshark-get").on("click", function(){
       let store_id = $(this).siblings(".store-id").text();
        let gameTitle = $(this).siblings(".game-title").text();
        let steam_id = $(this).siblings(".steam-id").text()
        returnValidURL(steam_id, gameTitle, store_id);
    })
}