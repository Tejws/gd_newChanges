(function($) {
    'use strict';


    // Mean Menu JS
    $('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

    // Navbar Area
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >150){  
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });

    // Home Slider 
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        dots: false,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // Home Slider Two
    $('.home-slider-two').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // Apartment Slider 
    $('.apartment-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // House Slider 
    $('.house-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // House Slider Two
    $('.house-slider-two').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // House Slider Three
    $('.house-slider-three').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // Oftop Slider Wrap
	$('.oftop-slider-wrap').owlCarousel({
		loop:true,
		margin: 30,
		nav: false,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed:1500,
		autoplayHoverPause: true,
	});

    // Room Details Slider
    $('.room-details-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // Innovation Slider 
    $('.innovation-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    // Testimonial Slider 
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

    // Popup Gallery 
    /* $('.gallery-view').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    }); */

    // Nice Select JS
    // $('select').niceSelect();

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // Count Time JS
	function makeTimer() {
		var endTime = new Date("August 30, 2026 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    }); 


    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // Back To Top Js
    $('body').append('<div id="toTop" class="top-btn"><i class="bx bx-up-arrow"></i></div>');
    $(window).on('scroll',function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });

    $(document).on("click", ".get-info", function(){
        var cta = $(this).attr("data-cta");
        var axnTitle = $(this).attr("data-label");
        if(cta){
          $("#priceModal").find(".btn-axn").text(cta);
        }
        if(axnTitle){
          $("#priceModal").find(".axn-title").val(axnTitle);
        }
        $("#priceModal").modal("show");
    });

    // WOW JS
    new WOW().init();

    // Preloader JS
    /* $(window).on('load',function(){
        $(".preloader").fadeOut(500);
    }); */

    $(".preloader").fadeOut(500);

})(jQuery);


// Contact Form
(function ($) {
    "use strict"; // Start of use strict
    $(".contactForm").validator().on("submit", function (event) {
        var $this = this;
        if (event.isDefaultPrevented()) {
            ;
        } else {
            // everything looks good!
            event.preventDefault();

            var name = $(this).find('[name="name"]').val();
            var email = $(this).find('[name="email"]').val();
            var subject = $(this).find('[name="subject"]').val();
            var phone = $(this).find('[name="phone"]').val();
            var message = $(this).find('[name="message"]').val();

            $.ajax({
                type: "POST",
                url: "assets/php/form-process.php",
                data: "name=" + name + "&email=" + email + "&subject=" + subject + "&phone=" + phone + "&message=" + message,
                success : function(statustxt){
                    if (statustxt == "success"){
                        $this.reset();
                        alert("Thank you for your interest. We will get back to you soon!")
                    } else {
                        alert(statustxt);
                    }
                }
            });
        }
    });

}(jQuery));