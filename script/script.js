
var main = function() {
  
  var h_hght =700; // height of home part
  var top;

// Add fixed navbar when not in home part

  $(window).scroll(function(){
    top = $(this).scrollTop();

    if (top >= h_hght) {
    $('.navbar').addClass('navbar-fixed-top'); 
    $(".navbar .nav li a").css("color", "#999");
  } else
  {
    $('.navbar').removeClass('navbar-fixed-top');  
    $('.navbar .nav li a').css("color", "#fff");
   }
 });

 // Add smooth scrolling to all links in navbar
  $(".nav li a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

};

$(document).ready(main);




