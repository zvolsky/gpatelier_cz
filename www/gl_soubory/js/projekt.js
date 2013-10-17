// JavaScript Document

function naviguj(target) {
  window.location = $(target).attr("href");
  return false;
  };

function zmen_barvu(elem, barva) {
  $(elem).animate({"background-color": barva});
  };

$(document).ready(
  function () {
    $("#atelier").click(function() {window.location = "../../../index.html"});
    $("#atelier").css('cursor', 'pointer');

    $("#kontakt_jednatel_udaje").hover(
      function () {$(this).css('cursor', 'pointer'); zmen_barvu(this, "#e0e0e0");},
      function () {zmen_barvu(this, "#eeeeee");});

    $("#kontakt_jednatel_udaje").click(function() {naviguj("#a_zivotopis")});

    $(".slider").mouseenter(
      function () {zmen_barvu(this, "#181818");
              $("#scroll_slider").animate({"background-color": "#0a0a0a"}, 4000);});
      
    $("#scroll_slider").mouseenter(
      function () {$(this).animate({"background-color": "#0a0a0a"});
          $('html,body').animate({scrollTop: $(".slider").offset().top}, 800);});
    $("#scroll_txt").mouseenter(
      function () {$('html,body').animate({scrollTop: $(".slider").offset().top}, 800);});
    
    
    });
