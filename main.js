
  $(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows:true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [{
			breakpoint: 992,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				}
		}
			
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
	  $('.slider-service').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows:true,
		prevArrow: $('.prev-service'),
		nextArrow: $('.next-service'),
		responsive: [{
			breakpoint: 992,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				}
		}
			
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
	$('.slider-items').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  responsive: [
		{
		  breakpoint: 990,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: $('.prev-item'),
			nextArrow: $('.next-item'),
		  }
		}
	  ]
	});
	$('.slider-tours').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1.8,
		slidesToScroll: 1,
		centerMode: false,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
				  slidesToShow: 1.9,
				  slidesToScroll: 1,
				}
			  },
		  {
			breakpoint: 990,
			settings: {
			  slidesToShow: 1,
			  centerMode: true,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  centerMode: false,
			  slidesToScroll: 1,
			}
		  }
		]
	  });
	  $('.slider-cards').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3.9,
		slidesToScroll: 1,
		centerMode: false,
		dots: false,
		arrows: true,
		prevArrow: $('.prev-card'),
		nextArrow: $('.next-card'),
		responsive: [
			{
				breakpoint: 1440,
				settings: {
				  slidesToShow: 2.9,
				  slidesToScroll: 1,
				}
			  },
		  {
			breakpoint: 990,
			settings: {
			  slidesToShow: 1,
			  centerMode: true,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  centerMode: false,
			  arrows: false,
			  slidesToScroll: 1,
			}
		  }
		]
	  });
	  
	  $('.slider-testimonials').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1.9,
		slidesToScroll: 1,
		centerMode: true,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
		  {
			breakpoint: 990,
			settings: {
			  slidesToShow: 1,
			  centerMode: true,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  centerMode: false,
			  slidesToScroll: 1,
			}
		  }
		]
	  });
	  $('.slider-countries').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	  });
	  function truncateText(selector, maxLength) {
		const elements = document.querySelectorAll(selector);
	
		elements.forEach(el => {
			if (el.innerText.length > maxLength) {
				el.innerText = el.innerText.slice(0, maxLength) + '...';
			}
		});
	}
	
	// Обрезка текста на мобильных устройствах
	if (window.innerWidth <= 768) {
		truncateText('.truncated-text', 150); // Например, обрезать до 50 символов
	}
	
  });

  
  