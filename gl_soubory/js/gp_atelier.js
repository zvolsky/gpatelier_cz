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
    $("#atelier").hide().fadeIn(5000);

    $("#cinnost_projektovani").hover(
      function () {$('#projektovani_img').attr("src", 'gl_soubory/img/projektovani1.jpg');},
      function () {$('#projektovani_img').attr("src", 'gl_soubory/img/projektovani.jpg');});
    $("#cinnost_dozor").hover(
      function () {$('#dozor_img').attr("src", 'gl_soubory/img/dozor1.jpg');},
      function () {$('#dozor_img').attr("src", 'gl_soubory/img/dozor.jpg');});
    $("#cinnost_cviceni").hover(
      function () {$('#cviceni_img').attr("src", 'gl_soubory/img/cviceni1.jpg');},
      function () {$('#cviceni_img').attr("src", 'gl_soubory/img/cviceni.jpg');});

    $(".cinnost").hover(
      function () {$(this).css('cursor', 'pointer'); zmen_barvu(this, "#ccccdd");},
      function () {zmen_barvu(this, "#e8e8e8");});

    $("#kontakt_jednatel_udaje").hover(
      function () {$(this).css('cursor', 'pointer'); zmen_barvu(this, "#e0e0e0");},
      function () {zmen_barvu(this, "#eeeeee");});

    $("#kontakt_jednatel_udaje").click(function() {naviguj("#a_zivotopis")});

    $("#cinnost_projektovani").click(function() {naviguj("#a_projektovani")});
    $("#cinnost_dozor").click(function() {naviguj("#a_dozor")});
    $("#cinnost_cviceni").click(function() {naviguj("#a_cviceni")});

    });
