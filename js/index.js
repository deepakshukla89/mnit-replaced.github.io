var department = document.querySelector(".department");

var slideIndex = 1;
var text = 1;
var aext = 1;
var jext = 1;
var kext = 1;
var bext = 1;
var dext = 1;

showSlides(slideIndex);
showContent(text);
NEXTContent(aext);
kextContent(kext);
jextContent(jext);
bextContent(bext);
dextContent(dext);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlide(n) {
  showContent(text += n);
}
function nextContent(n) {
  NEXTContent(aext += n);
}
function contentNew(n) {
  jextContent(jext += n);
}
function newContdesk(n) {
  kextContent(kext += n);
}

function nextThree(n) {
  bextContent(bext += n);
}

function goFunc(n) {
  dextContent(dext += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showContent(n) {
  var i;
  var slides = document.getElementsByClassName("tabs1");
  if (n > slides.length) { text = 1 }
  if (n < 1) { text = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[text - 1].style.display = "block";
}

function NEXTContent(n) {
  var i;
  var slides = document.getElementsByClassName("scroll-tab");
  if (n > slides.length) { aext = 1 }
  if (n < 1) { aext = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[aext - 1].style.display = "block";
}

function jextContent(n) {
  var i;
  var slides = document.getElementsByClassName("tabs2");
  if (n > slides.length) { jext = 1 }
  if (n < 1) { jext = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[jext - 1].style.display = "block";
}

function kextContent(n) {
  var i;
  var slides = document.getElementsByClassName("tabs3");
  if (n > slides.length) { kext = 1 }
  if (n < 1) { kext = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[kext - 1].style.display = "block";
}

function bextContent(n) {
  var i;
  var slides = document.getElementsByClassName("campus-img-gal-only");
  if (n > slides.length) { bext = 1 }
  if (n < 1) { bext = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[bext - 1].style.display = "block";
}

function dextContent(n) {
  var i;
  var slides = document.getElementsByClassName("startup-boost");
  if (n > slides.length) { dext = 1 }
  if (n < 1) { dext = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[dext - 1].style.display = "flex";
}


// Achivement section 

var next = 1;
nextImg(next);
function addNext(n) {
  nextImg(next += n);
}
function nextImg(n) {
  var i;
  var slides = document.getElementsByClassName("achieve-tag-img");
  if (n > slides.length) { next = 1 }
  if (n < 1) { next = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[next - 1].style.display = "block";
}

function incrAllFontSize() {
  $("*").each(function (index, elem) {
    var $this = $(this);//caching for perf. opt.

    var curr = $this.css("fontSize");//get the fontSize string
    if (curr != "" && curr != undefined) {//check if it exist
      curr = curr.replace(/px$/, "");//get rid of "px" in the string

      var float_curr = parseFloat(curr);//convert string to float
      float_curr += 1;//actual incr

      var new_val = "" + float_curr + "px";//back to string
      $this.css("fontSize", new_val);//set the fontSize string
    }
  });
}

function decrAllFontSize() {
  $("*").each(function (index, elem) {
    var $this = $(this);//caching for perf. opt.

    var curr = $this.css("fontSize");//get the fontSize string
    if (curr != "" && curr != undefined) {//check if it exist
      curr = curr.replace(/px$/, "");//get rid of "px" in the string

      var float_curr = parseFloat(curr);//convert string to float
      float_curr -= 1;//actual decr

      var new_val = "" + float_curr + "px";//back to string
      $this.css("fontSize", new_val);//set the fontSize string
    }
  });
}

function showDepartmentContent(elem) {
  // var checked = $("#checked").prop("checked");
  // if(checked){
  //     $(elem).siblings().hide();
  //     $(elem).find("div").first().css({
  //         WebkitTransitionDelay: ".3s",
  //       transitionDelay: ".3s",
  //       WebkitTransform: "none",
  //       msTransform: "none",
  //       transform: "none",
  //       opacity: 1,
  //       zIndex: 2
  //     })
  // }
}

// (function($){
//   'use strict';
//     $(window).on('load', function () {
//         if ($(".pre-loader").length > 0)
//         {
//             $(".pre-loader").fadeOut("slow");
//         }
//     });
// })(jQuery)


// Campus-Image

const campus = document.getElementsByClassName("gallery-image-view");
const newImg = document.getElementsByClassName("gallery-main-pic");

campus[0].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[0].src);
});

campus[1].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[1].src);
});

campus[2].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[2].src);
});

campus[3].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[3].src);
});

campus[4].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[4].src);
});

campus[5].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[5].src);
});

campus[6].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[6].src);
});

campus[7].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[7].src);
});

campus[8].addEventListener("click", function(){
  newImg[0].setAttribute("src", campus[8].src);
});

window.addEventListener("scroll", function(){
  var x = window.matchMedia("(min-width: 1190px)")
  if(x.matches){
    if(window.scrollY>177){
      $(".drawer-menu").css({
        "position":"fixed",
        "z-index":9999,
        "width": "100%",
        "top":0,
        "background-color":"white",
        "box-shadow": "0px 4.5px 7.5px -1.5px rgba(0, 0, 0, 0.25)",
      });
      $(".body-content").css({
        "margin-top":"100px",
      })
      $(".depart-part").css({
        "top":"47px",
        "position": "fixed",
      });
     }
    else{
      $(".drawer-menu").css({
        "position":"static",
        "z-index":1,
        "width": "auto",
        "background-color":"white",
        "box-shadow": "none",
      });
      $(".body-content").css({
        "margin-top":"0",
      })
      $(".depart-part").css({
        "top":"223px",
        "position": "absolute",
      });
    }
  }
  else{
      $(".drawer-menu").css({
        "position":"fixed",
        "z-index":1,
        "width": "300px",
        "top":0,
        "background-color":"rgb(0,0,0)",
        "box-shadow": "none",
      });
      $(".body-content").css({
        "margin-top":"0",
      })
      $(".depart-part").css({
        "top":"223px",
        "position": "absolute",
      });
  }
});

window.addEventListener("resize", function(){
  var x = window.matchMedia("(min-width: 1190px)")
  if(x.matches){
    if(window.scrollY>177){
      $(".drawer-menu").css({
        "position":"fixed",
        "z-index":9999,
        "width": "100%",
        "top":0,
        "background-color":"white",
        "box-shadow": "0px 4.5px 7.5px -1.5px rgba(0, 0, 0, 0.25)",
      });
      $(".body-content").css({
        "margin-top":"100px",
      })
      $(".depart-part").css({
        "top":"47px",
        "position": "fixed",
      });
     }
    else{
      $(".drawer-menu").css({
        "position":"static",
        "z-index":1,
        "width": "auto",
        "background-color":"white",
        "box-shadow": "none",
      });
      $(".body-content").css({
        "margin-top":"0",
      })
      $(".depart-part").css({
        "top":"223px",
        "position": "absolute",
      });
    }
  }
  else{
      $(".drawer-menu").css({
        "position":"fixed",
        "z-index":1,
        "width": "300px",
        "top":0,
        "background-color":"rgb(0,0,0)",
        "box-shadow": "none",
      });
      $(".body-content").css({
        "margin-top":"0",
      })
      $(".depart-part").css({
        "top":"223px",
        "position": "absolute",
      });
  }
});