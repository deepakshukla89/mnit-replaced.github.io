var department = document.querySelector(".department");

var slideIndex = 1;
var text = 1;
showSlides(slideIndex);
showContent(text);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function plusSlide(n) {
    showContent(text += n);
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
    var slides = document.getElementsByClassName("many-tabs");
    if (n > slides.length) { text = 1 }
    if (n < 1) { text = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[text - 1].style.display = "block";
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