var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-white");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("w3-white");
}
function myAccFunc() {
    document.getElementById("demoAcc").classList.toggle("w3-show");
    document.getElementById("demoAcc").previousElementSibling.classList.toggle("w3-green");
}
function w3_open() {
  var estado=document.getElementsByClassName("w3-sidenav")[0].style.display;
  if(estado=="block"){
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";

  }else{
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";

  }
}
  function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
  }

  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("m01").style.display = "block";
  }

  //tabulação na página de contactos e não só
  document.getElementsByClassName("tablink")[0].click();

  function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
  }

//SlideShow automático


  //Abertura de janelas do Menu Inicial


