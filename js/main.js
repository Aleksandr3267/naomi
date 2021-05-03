
// якорь
$(document).ready(function(){
  $(".menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});
$(document).ready(function(){
  $(".oglavline_buttons").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});


// new burger
$('.top_menu .menu-toggle').on('click', function(){
  $('body').toggleClass('open');
  $('body').toggleClass('lock');
});
$('.nav_menu_me .menu a').on('click', function(){
  $('body').removeClass('open');
  $('body').removeClass('lock');
});




// forms
$(document).ready(function () {
  $('.button_phone').click(function (event) {
      $('.home_submit, .main-content').toggleClass('active');
      $('body').toggleClass('lock');
  });
});
$('.button_exit').on('click', function(){
  $('.button_phone, .main-content').toggleClass('active');
  $('body').toggleClass('lock');
});


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
        $('.show-hide, .spoiler ul').toggleClass('active');
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



window.onload = function(){
  const  parallax = document.querySelector('.form_with_text');

  if(parallax){
    //обьекты
    const sperLeft = document.querySelector('.form_with-left_sper');
    const sperRight = document.querySelector('.form_with-right_sper');

    //коэфициент
    const forSperLeft = 4;
    const forSperRight = 7;

    const speed = 0.05;

    //обьявление переменных
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle(){
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      //передаём стили
      sperLeft.style.cssText = `transform: translate(${positionX / forSperLeft}%,${positionY / forSperLeft}%);`;
      sperRight.style.cssText = `transform: translate(${positionX / forSperRight}%,${positionY / forSperRight}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      //ПОЛУЧЕНИЕ ШИРИНЫ И ВЫСОТЫ БЛОКА
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      //НОЛЬ ПО СЕРЕДИНЕ
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      //получаем полценты
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;

    });
  }
}