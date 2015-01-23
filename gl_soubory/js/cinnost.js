// JavaScript Document

function naviguj(target) {
  window.location = $(target).attr("href");
  return false;
  };

function zmen_barvu(elem, barva) {
  $(elem).animate({"background-color": barva}, 800);
  };

$(document).ready(
  function () {
    $("#atelier").click(function() {window.location = "index.html"});
    $("#atelier").hide().css('cursor', 'pointer').fadeIn(5000);

    $("#kontakt_jednatel_udaje").hover(
      function () {$(this).css('cursor', 'pointer'); zmen_barvu(this, "#e0e0e0");},
      function () {zmen_barvu(this, "#eeeeee");});

    $("#kontakt_jednatel_udaje").click(function() {naviguj("#a_zivotopis")});

    $(".skupinka").hover(
      function () {$(this).find('li').add(this).animate({"background-color": "#e3e3ff"}, 500);},
      function () {$(this).find('li').add(this).animate({"background-color": "#eeeeff"}, 100);});

    $(".skupinka a").hover(
      function () {$(this).parent().animate({"background-color": "#c8c8e0"}, 300);},
      function () {$(this).parent().animate({"background-color": "#e3e3ff"}, 100);
            $(this).parent().css("background-color", "transparent");
          });

    });
