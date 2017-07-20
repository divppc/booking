
if ($(window).width() > 1200) {
		var playerWidth = $(window).width(),
				ratio = 16/9;
				playerHeight = playerWidth * 0.5625;

	var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width: playerWidth,
      height: playerHeight,
      // ratio: 16/9,
      videoId: 'gqpBXDfjxQs',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerReady
      },
      playerVars: {
      	'autoplay': 1,
      	'controls': 0,
      	'fs': 0,
      	'iv_load_policy': 3,
      	'loop': 1,
      	'rel': 0,
      	'showinfo': 0,
      	'modestbranding': 1,
        'wmode': 'transparent'
     },
    });
  }

  function onPlayerReady(event) {    
  	event.target.playVideo();
  }
}


function initScroll() {
  $.scrollify({
    section : ".slide",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll: false,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var activeClass = "";
      $(".slide").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
      });

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      $(".pagination a").on("click",$.scrollify.move);

      $('.scroll, .to-services').click(function(e) {
        e.preventDefault();
        $.scrollify.move(1);
      });
    }
  });
}


$(document).ready(function() {
  initScroll();
});

$(window).resize(function() {
  initScroll();
});

$('.mobile-toggle').click(function(e) {
  e.preventDefault();
  $('.mobile-toggle, .navigation').toggleClass('active');
});

$(".datepicker").datepicker();


//slider on card page
var mainSlider = $(".slides");

if (mainSlider.length > 0) {
  $(mainSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    dotsClass: 'dots'
  });
};

//reserve modal

$('.reserve').click(function(e) {
  e.preventDefault();
  $('html').addClass('blured');
  $('.modal').addClass('active');
});

$('.close-modal').click(function(e) {
  e.preventDefault();
  $('html').removeClass('blured');
  $('.modal').removeClass('active');
});