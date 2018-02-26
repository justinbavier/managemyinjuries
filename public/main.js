function aboutAutoScroll() {
  element = document.getElementById("about");
  element.scrollIntoView({behavior: "smooth", block: "start"});
}

function howAutoScroll() {
  element = document.getElementById("how");
  element.scrollIntoView({behavior: "smooth", block: "start"});
}

function bottomAutoScroll() {
  element = document.getElementById("bottom");
  element.scrollIntoView({behavior: "smooth", block: "start"});
}

$(document).ready(function(){
   $('.carousel').carousel({
     duration: 200,
     padding: 200
   });
   setInterval(function() {
     $('.carousel').carousel('next');
   }, 2500); // every 2 seconds
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});
