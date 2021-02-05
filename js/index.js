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

function incrAllFontSize(){
  $("*").each(function(index, elem){
    var $this = $(this);//caching for perf. opt.

    var curr = $this.css("fontSize");//get the fontSize string
    if(curr != "" && curr != undefined){//check if it exist
      curr = curr.replace(/px$/, "");//get rid of "px" in the string

      var float_curr = parseFloat(curr);//convert string to float
      float_curr += 1;//actual incr

      var new_val = "" + float_curr + "px";//back to string
      $this.css("fontSize", new_val);//set the fontSize string
    }
  });
}

function decrAllFontSize(){
  $("*").each(function(index, elem){
    var $this = $(this);//caching for perf. opt.

    var curr = $this.css("fontSize");//get the fontSize string
    if(curr != "" && curr != undefined){//check if it exist
      curr = curr.replace(/px$/, "");//get rid of "px" in the string

      var float_curr = parseFloat(curr);//convert string to float
      float_curr -= 1;//actual decr

      var new_val = "" + float_curr + "px";//back to string
      $this.css("fontSize", new_val);//set the fontSize string
    }
  });
}

function showDropContent(){
    debugger;
    const hoverStyle = {
    backgroundColor: "white",
    marginTop: "10px",
    position: "absolute",
    top: "223px",
    display: "flex",
    fontSize: "1rem",
    width: "50%",
    padding: "10px 0",
    borderRadius: "0px 15px 15px 15px",
    boxShadow: "0px 4.5px 7.5px -1.5px rgba(0, 0, 0, 0.25)",
    zIndex: 1
  };
    $(this).find(".depart-part").css({"display":"flex"});
}