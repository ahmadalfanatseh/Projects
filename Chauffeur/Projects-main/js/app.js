/************************************************************************

#Original Author: Ahmad Alfanatseh 
#Date Created:  08-28-2022  
#Version:  1.0  
#Date Last Modified: 08-28-2022 
#Modified by:  Ahmad Alfanatseh  
#Modification log:   

    Version 1.0 - 08/28/2022 - JaveScript was built. work next on more script.

*********************************************************************/

let btn = document.querySelector("btn");
let main_container = document.querySelector(".main_container");
const main = document.querySelector("main");

function myFunction() {
  alert("Our Website is under construction please call us at 986-837-1360");
}



const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})



$(function () {

  var slideCount = $(".slider ul li").length;
  var slideWidth = $(".slider ul li").width();
  var slideHeight = $(".slider ul li").height();
  var slideUlWidth = slideCount * slideWidth;

  //$(".slider").css({"max-width":slideWidth, "height": slideHeight});
  // $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider ul li:last-child").prependTo($(".slider ul"));

  function moveLeft() {
    $(".slider ul").stop().animate({
      left: + slideWidth
    }, 700, function () {
      $(".slider ul li:last-child").prependTo($(".slider ul"));
      $(".slider ul").css("left", "");
    });
  }

  function moveRight() {
    $(".slider ul").stop().animate({
      left: - slideWidth
    }, 700, function () {
      $(".slider ul li:first-child").appendTo($(".slider ul"));
      $(".slider ul").css("left", "");
    });
  }


  $(".next").on("click", function () {
    moveRight();
  });

  $(".prev").on("click", function () {
    moveLeft();
  });

});

/* jQuery Widget*/

$(function () {
  $("#dialog-2").dialog({
    autoOpen: false,
    buttons: {
      OK: function () { $(this).dialog("close"); }
    },
    title: "More FAQs Comming",
    position: {
      my: "left center",
      at: "left center"
    }
  });
  $("#opener-2").click(function () {
    $("#dialog-2").dialog("open");
  });
});

/* jQuery Widget menuWidget*/

$(function () {
  $("#speed").selectmenu();

  $("#files").selectmenu();

  $("#number")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");
});


function sendMail() {
  var link = "mailto:aalfanatseh1994@gmail.com"
    + "?cc=myCCaddress@example.com"
    + "&subject=" + encodeURIComponent("Number of Cars and people")
    + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;

  window.location.href = link;
}


/*
btn.addEventListener('click', () => {
    alert('Please Call +1986-837-1360')
})


function toggleAnimation(){
   // Cloning the main_container
   let clone = main_container.cloneNode(true);
   main.appendChild(clone);
}
/*let toggle_btn = document.querySelector(".toggle-btn");
toggle_btn.addEventListener("click", toggleAnimation);
*/

