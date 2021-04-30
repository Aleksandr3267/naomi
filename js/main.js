
// якорь
$(document).ready(function(){
  $("#main-menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});

// burger
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, #main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('#main-menu a').click(function (event) {
      $('.header-burger, #main-menu').removeClass('active');
      $('body').removeClass('lock');
  });
});
// 
// --------------------------------------------------------------------------
// ВЫДВИГАЕМОЕ МЕНЮ
$(document).ready(function () {
  var previousScroll = 0,
    navBarOrgOffset = $('#navbar').offset().top;

  $('#navigation').height($('#navbar').height());

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    // console.log(currentScroll + " and " + previousScroll + " and " + navBarOrgOffset);
    if (currentScroll > navBarOrgOffset) {
      if (currentScroll > previousScroll) {
        document.getElementById("navbar").style.top = "-100%";
      } else {
        document.getElementById("navbar").style.top = "0px";
        $('#navbar').addClass('fixed');
      }
    } else {
      $('#navbar').removeClass('fixed');
    }
    previousScroll = currentScroll;
  });
});
// -------------------------------------------------------------------------------

// for button spoiler
$(document).ready(function () {
    $('.show-hide').click(function (event) {
        $('.show-hide, .spoiler ul li').toggleClass('active');
    });
});



// slider
$(document).ready(function () {
  $('.gallery_slider').slick({
      slidesToShow: 4,
      responsive:[
          {
              breakpoint:1000,
              settings:{
                  slidesToShow: 3,
              }
          },
          {
              breakpoint:800,
              settings:{
                  slidesToShow: 2,
              }
          },
          {
              breakpoint:600,
              settings:{
                  slidesToShow: 1,
              }
          }
      ]
  });

});

// --------------------------------------------------------------------------

/* --------------------------------- numbers -------------------------------- */
var isAnimatePriceInitialized = false;
var serversTop = $("#nambers_info").offset().top + -300;
function animatePrice(){
  $('.number').addClass('viz');
  $('.num').each(function(){
    $(this).prop('Counter', 0).animate({
      Counter:$(this).text()
    },{
      duration: 2000,
      easing: 'swing',
      step:function(now){
        $(this).text(Math.ceil(now));
      }
    });
  });
  isAnimatePriceInitialized = true;
}
$(window).scroll(function() {
    if($(this).scrollTop() > serversTop){
        if (!isAnimatePriceInitialized) {
            animatePrice();
        }
    };
});



/* --------------------------------- gallery -------------------------------- */

$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $('body').addClass('lock');
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						"</div>"); 
		$(".popup").fadeIn(500); // Медленно выводим изображение
        
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(500);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
            $('body').removeClass('lock');
		});
	});
	
});