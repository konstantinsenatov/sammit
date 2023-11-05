$(document).ready(function() {
	/* появление элементов при прокрутке */
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('show-active');
			}
		});
	}
	let options = {
		threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.show');
	for (let elm of elements) {
		observer.observe(elm);
	}


	
	$('.click').on('click', function() {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});

	$('.hero').addClass('active');
	
	/* calculator (select) */
	var calculator__input1 = $("#calculator__input1");
	var calculator__dropdown1 = $("#calculator__dropdown1");
	var calculator__dropdown1_item = $(".calculator__dropdown1-item");

	calculator__input1.click(function(){
		calculator__dropdown1.toggle();
		calculator__input1.closest('.calculator__input-wrapper').toggleClass('open');
	});
	calculator__dropdown1_item.click(function(){
		calculator__input1.val($(this).text());
		calculator__dropdown1.toggle();
		calculator__input1.closest('.calculator__input-wrapper').toggleClass('open');
	});
	
	
	var calculator__input2 = $("#calculator__input2");
	var calculator__dropdown2 = $("#calculator__dropdown2");
	var calculator__dropdown2_item = $(".calculator__dropdown2-item");
	calculator__input2.click(function(){
		calculator__dropdown2.toggle();
	});
	calculator__dropdown2_item.click(function(){
		calculator__input2.val($(this).children('.calculator__dropdown2-num').text());
		calculator__dropdown2.toggle();
	});



	const calculator__input_range1 = document.querySelector("#calculator__input-range1 input");
	const calculator__input_1 = document.querySelector("#calculator__input1");

	calculator__input_range1.addEventListener("input", () => {
		calculator__input_1.value = calculator__input_range1.value + ' ₽';
	})

	const calculator__input_range2 = document.querySelector("#calculator__input-range2 input");
	const calculator__input_2 = document.querySelector("#calculator__input2");

	calculator__input_range2.addEventListener("input", () => {
		calculator__input_2.value = calculator__input_range2.value + '';
	})


	$(function() {
		$('.calculator__btn').click(function() {
			card_calculator_id = $(this).attr('href');
			card_calculator = $(card_calculator_id);
					
			$('.card-calculator').removeClass('active');
			$(card_calculator).toggleClass('active');
			$('.calculator__btn').removeClass('active');
			$(this).addClass('active');
			$('.calculator-hidden-info').slideUp(0);
		});
	});

	$('.card-calculator__btn-schedule').click(function(){
		$('.calculator-hidden-info').toggle();
	});


	/* calculator-popup */
	$('.btn-application').click(function(){
		$('.popup-application').addClass('active');
	});
	$('.popup-application .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-application .popup__close').click(function(){
		$('.popup-application').removeClass('active');
	});
	$('.popup-application .popup__bg').click(function(){
		$('.popup-application').removeClass('active');
	});


	/* rate-popup */
	$('.btn-rate1').click(function(){
		$('.popup-rate1').addClass('active');
	});
	$('.popup-rate1 .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-rate1 .popup__close').click(function(){
		$('.popup-rate1').removeClass('active');
	});
	$('.popup-rate1 .popup__bg').click(function(){
		$('.popup-rate1').removeClass('active');
	});
	
	$('.btn-rate2').click(function(){
		$('.popup-rate2').addClass('active');
	});
	$('.popup-rate2 .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-rate2 .popup__close').click(function(){
		$('.popup-rate2').removeClass('active');
	});
	$('.popup-rate2 .popup__bg').click(function(){
		$('.popup-rate2').removeClass('active');
	});

	$('.btn-rate3').click(function(){
		$('.popup-rate3').addClass('active');
	});
	$('.popup-rate3 .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-rate3 .popup__close').click(function(){
		$('.popup-rate3').removeClass('active');
	});
	$('.popup-rate3 .popup__bg').click(function(){
		$('.popup-rate3').removeClass('active');
	});


	/* review-popup */
	$('.reviews__btn.btn-orange').click(function(){
		$('.popup-reviews').addClass('active');
	});
	$('.popup-reviews .popup__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
	$('.popup-reviews .popup__close').click(function(){
		$('.popup-reviews').removeClass('active');
	});
	$('.popup-reviews .popup__bg').click(function(){
		$('.popup-reviews').removeClass('active');
	});


	/* form */
	$('.form__agreement-agree').click(function(){
		$(this).toggleClass('active');
	});
});



/* about */
var swiper = new Swiper(".about__swiper2", {
	spaceBetween: 10,
	allowTouchMove: false,
	effect: 'fade',
});
var swiper2 = new Swiper(".about__swiper", {
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	spaceBetween: 10,
	thumbs: {
		swiper: swiper,
	},
});

$(document).ready(function() {
	$(function() {
		$('.chart__btn').click(function() {
			chart_id = $(this).attr('href');
			chart = $(chart_id);
			
			$('.chart__img').removeClass('active');
			$(chart).toggleClass('active');
			$('.chart__btn').removeClass('active');
			$(this).addClass('active');
		});
	});

	$('.reviews__btn.btn-white').click(function () {
		$('.reviews__item:hidden').show(100);
		$('.reviews__item:hidden').length < 1 ? $('.reviews__btn.btn-white').hide() : false;
	});
});



Fancybox.bind('[data-fancybox="gallery"]', {
	Thumbs: false,
	Toolbar: false,

	Image: {
		zoom: false,
		click: false,
		wheel: "slide",
	},
});
Fancybox.bind('[data-fancybox="gallery1"]', {
	Thumbs: false,
	Toolbar: false,

	Image: {
		zoom: false,
		click: false,
		wheel: "slide",
	},
});


/* faq */
/* $('.spoiler').click(function(){
	$(this).children('.spoiler__content').slideToggle();
	$(this).toggleClass('active');
}); */
$(document).ready(function() {
	$('.spoiler__title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
}); 
/* news */
var swiper = new Swiper(".news__swiper", {
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
	slidesPerView: 1,
	breakpoints: {
		575: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: "auto",
		},
	},
});