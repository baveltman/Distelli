

$(document).ready(function(){

  var docMenuStatus = "closed";

  $(window).resize(function() {
    if ($(window).width() > 767) {
      $("#mobile-menu").hide();
      $(".mobile-menu-button").css('display', 'none !important');
      $("#doc-nav").css('display', 'block');
    }

    if (($(window).width() < 767) && (docMenuStatus != "open")) {
      $("#doc-nav").css('display', 'none');
    }
  });

  $("#mobile-menu").hide();

  $(".mobile-menu-button").click(function() {
    $("#header").toggleClass('relative');
    $("#mobile-menu").slideToggle(200);
    $(".general").toggleClass('distanceFromTop');
    $("html, body").animate({ scrollTop: 0 }, 0);
  });

  $("#mobile-menu ul li a").click(function() {
    $("#mobile-menu").slideToggle(200);
    $(".general").toggleClass('distanceFromTop');
    $("html, body").animate({ scrollTop: 0 }, 0);
  });

  $('#docs-menu-button').click(function(){
    $('#doc-nav').slideToggle(250);
    $('#docs-menu-button img').toggleClass('flip');

    if(docMenuStatus == "closed") {
      docMenuStatus = "open";
    } else {
      docMenuStatus = "closed";
    }
  });


// More Menu
  $('#more-menu').unbind('click').click(function(event){
    event.preventDefault();
    var link = $("#more-menu");
    var position = link.position();

    if ($('.more-menu').hasClass("open")) {
      $('.more-menu').removeClass("open");
      $('.more-menu').removeClass("bounceIn");
      $('.more-menu').addClass('bounceOut');
      setTimeout(function(){
        $('.more-menu').hide();
      }, 275);
    } else {
      $('.more-menu').addClass("open");
      $('.more-menu').css({left: position.left - 52});
      $('.more-menu').show();
      $('.more-menu').removeClass("bounceOut");
      $('.more-menu').addClass('bounceIn');
    }
  });

  $(document).click(function(event) {
      if((!$(event.target).closest('#more-menu').length) && (!$(event.target).closest('.more-menu').length)) {
          $('.more-menu').removeClass("open");
          $('.more-menu').removeClass("bounceIn");
          $('.more-menu').addClass('bounceOut');
          setTimeout(function(){
            $('.more-menu').hide();
          }, 275);
      }
  });


});



