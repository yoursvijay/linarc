// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
});

//Slider Duration
$('.carousel').carousel({
    interval: 5000
})

//Header Onscroll Effect
$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active_header");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("header").removeClass("active_header");
        }
    });
});

//Onclick Change Image script
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Changing Images
document.getElementById("defaultOpen").click();
function firstitem() {
    document.getElementById("firstitem-active").style.display = "inline-block";
    document.getElementById("firstitem").style.display = "none";
    document.getElementById("seconditem-active").style.display = "none";
    document.getElementById("seconditem").style.display = "inline-block";
    document.getElementById("thirditem").style.display = "inline-block";
    document.getElementById("thirditem-active").style.display = "none";
    document.getElementById("fourthitem-active").style.display = "none";
    document.getElementById("fourthitem").style.display = "inline-block";
    document.getElementById("fifthitem-active").style.display = "none";
    document.getElementById("fifthitem").style.display = "inline-block";
    document.getElementById("firstitem_text").style.cssText = "color: #0252a9;font-weight: bold";
    document.getElementById("seconditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("thirditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fourthitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fifthitem_text").style.cssText = "color: #636575;font-weight:500";
}

function seconditem() {
    document.getElementById("seconditem-active").style.display = "inline-block";
    document.getElementById("seconditem").style.display = "none";
    document.getElementById("firstitem-active").style.display = "none";
    document.getElementById("firstitem").style.display = "inline-block";
    document.getElementById("thirditem").style.display = "inline-block";
    document.getElementById("thirditem-active").style.display = "none";
    document.getElementById("fourthitem-active").style.display = "none";
    document.getElementById("fourthitem").style.display = "inline-block";
    document.getElementById("fifthitem-active").style.display = "none";
    document.getElementById("fifthitem").style.display = "inline-block";
    document.getElementById("seconditem_text").style.cssText = "color: #0252a9;font-weight: bold";
    document.getElementById("firstitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("thirditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fourthitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fifthitem_text").style.cssText = "color: #636575;font-weight:500";
}

function thirditem() {
    document.getElementById("thirditem-active").style.display = "inline-block";
    document.getElementById("thirditem").style.display = "none";
    document.getElementById("firstitem-active").style.display = "none";
    document.getElementById("firstitem").style.display = "inline-block";
    document.getElementById("seconditem").style.display = "inline-block";
    document.getElementById("seconditem-active").style.display = "none";
    document.getElementById("fourthitem-active").style.display = "none";
    document.getElementById("fourthitem").style.display = "inline-block";
    document.getElementById("fifthitem-active").style.display = "none";
    document.getElementById("fifthitem").style.display = "inline-block";
    document.getElementById("thirditem_text").style.cssText = "color: #0252a9;font-weight: bold";
    document.getElementById("seconditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("firstitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fourthitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fifthitem_text").style.cssText = "color: #636575;font-weight:500";
}

function fourthitem() {
    document.getElementById("fourthitem-active").style.display = "inline-block";
    document.getElementById("fourthitem").style.display = "none";
    document.getElementById("firstitem-active").style.display = "none";
    document.getElementById("thirditem").style.display = "inline-block";
    document.getElementById("thirditem-active").style.display = "none";
    document.getElementById("firstitem").style.display = "inline-block";
    document.getElementById("seconditem-active").style.display = "none";
    document.getElementById("seconditem").style.display = "inline-block";
    document.getElementById("fifthitem-active").style.display = "none";
    document.getElementById("fifthitem").style.display = "inline-block";
    document.getElementById("fourthitem_text").style.cssText = "color: #0252a9;font-weight: bold";
    document.getElementById("seconditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("thirditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("firstitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fifthitem_text").style.cssText = "color: #636575;font-weight:500";
}

function fifthitem() {
    document.getElementById("fifthitem-active").style.display = "inline-block";
    document.getElementById("fifthitem").style.display = "none";
    document.getElementById("thirditem").style.display = "inline-block";
    document.getElementById("thirditem-active").style.display = "none";
    document.getElementById("firstitem-active").style.display = "none";
    document.getElementById("firstitem").style.display = "inline-block";
    document.getElementById("seconditem-active").style.display = "none";
    document.getElementById("seconditem").style.display = "inline-block";
    document.getElementById("fourthitem-active").style.display = "none";
    document.getElementById("fourthitem").style.display = "inline-block";
    document.getElementById("fifthitem_text").style.cssText = "color: #0252a9;font-weight: bold";
    document.getElementById("seconditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("thirditem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("fourthitem_text").style.cssText = "color: #636575;font-weight:500";
    document.getElementById("firstitem_text").style.cssText = "color: #636575;font-weight:500";
}
document.getElementById("firstitem-active").style.display = "inline-block";
document.getElementById("firstitem").style.display = "none";
document.getElementById("firstitem_text").style.cssText = "color: #0252a9;font-weight: bold";

//vertical scroller js
jQuery(document).ready(function ($) {

 

    var jssor_1_options = {

      $AutoPlay: 1,

      $DragOrientation: 2,

      $PlayOrientation: 2,

      $BulletNavigatorOptions: {

        $Class: $JssorBulletNavigator$,

        $Orientation: 2

      }

    };



    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);



    /*#region responsive code begin*/



    var MAX_WIDTH = 980;



    function ScaleSlider() {

        var containerElement = jssor_1_slider.$Elmt.parentNode;

        var containerWidth = containerElement.clientWidth;



        if (containerWidth) {



            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);



            jssor_1_slider.$ScaleWidth(expectedWidth);

        }

        else {

            window.setTimeout(ScaleSlider, 30);

        }

    }



    ScaleSlider();



    $(window).bind("load", ScaleSlider);

    $(window).bind("resize", ScaleSlider);

    $(window).bind("orientationchange", ScaleSlider);

    /*#endregion responsive code end*/

});

//Pop up

$(".open").on("click", function(){

    $(".popup, .popup-content").addClass("active");

    });

    $(".close, .popup").on("click", function(){

    $(".popup, .popup-content").removeClass("active");

    });

//Modal Ending
   // Get the modal

   var modal = document.getElementById('myModal');



   // Get the button that opens the modal
   
   var btn = document.getElementById("myBtn");
   
   
   
   // Get the <span> element that closes the modal
   
   var span = document.getElementsByClassName("close")[0];
   
   
   
   // When the user clicks on the button, open the modal 
   
   btn.onclick = function() {
   
     modal.style.display = "block";
   
   }
   
   
   
   // When the user clicks on <span> (x), close the modal
   
   span.onclick = function() {
   
     modal.style.display = "none";
   
   }
   
   
   
   // When the user clicks anywhere outside of the modal, close it
   
   window.onclick = function(event) {
   
     if (event.target == modal) {
   
       modal.style.display = "none";
   
     }
   
   }
   
   //Start Modal
   $('#MyModal').on('hidden.bs.modal', function () {

    $(this).find('form').trigger('reset');

})

//Smooth Scrolling
$('a').click(function(){
    var headerHeight = 120;
 
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight
    }, 900);
    return false;
 });
 
 // Cache selectors
 // var headerHeight = 120;
 // var lastId,
 //  topMenu = $("#mainNav"),
 //  topMenuHeight = topMenu.outerHeight()+1,
 
 //  menuItems = topMenu.find("a"),
  
 //  scrollItems = menuItems.map(function(){
 //    var item = $($(this).attr("href"));
 //     if (item.length) { return item; }
 //  });
 
 // menuItems.click(function(e){
 //   var href = $(this).attr("href"),
 //       offsetTop = href === "#" ? 0 : $(href).offset().top - headerHeight;
 //   $('html, body').stop().animate({ 
 //       scrollTop: offsetTop
 //   }, 850);
 //   e.preventDefault();
 // });
 // $(window).scroll(function(){
    
 //    var fromTop = $(this).scrollTop()+ headerHeight + 120;
   
 //    var cur = scrollItems.map(function(){
 //      if ($(this).offset().top < fromTop)
 //        return this;
 //    });
 
 //    cur = cur[cur.length-1];
 //    var id = cur && cur.length ? cur[0].id : "";
    
 //    if (lastId !== id) {
 //        lastId = id;
 //        // Set/remove active class
 //        menuItems
 //          .parent().removeClass("active")
 //          .end().filter("[href=#"+id+"]").parent().addClass("active");
 //    }                   
 // });
 

