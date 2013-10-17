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

    });
