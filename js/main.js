"use strict";

function init() {
	for (var e = document.getElementsByTagName("img"), a = 0; a < e.length; a++) e[a].getAttribute("data-src") && e[a].setAttribute("src", e[a].getAttribute("data-src"))
}
window.onload = init;
var lastScroll = 0,
	isMobile = !1,
	isiPhoneiPad = !1;

function pad(e) {
	return e < 10 ? "0" + e.toString() : e.toString()
}

function isIE() {
	return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
}

function ScrollStop() {
	return !1
}

function ScrollStart() {
	return !0
}
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isMobile = !0), /iPhone|iPad|iPod/i.test(navigator.userAgent) && (isiPhoneiPad = !0), $(document).ready(function () {
	var e = window.location.href.substr(window.location.href.lastIndexOf("/") + 1),
		a = window.location.hash.substring(1);
	a ? (a = "#" + a, e = e.replace(a, "")) : e = e.replace("#", ""), $(window).scroll(function () {
		$(this).scrollTop() > 150 ? $(".scroll-top-arrow").fadeIn("slow") : $(".scroll-top-arrow").fadeOut("slow")
	}), $(document).on("click", ".scroll-top-arrow", function () {
		return $("html, body").animate({
			scrollTop: 0
		}, 800), !1
	});
	var i = new Swiper(".swiper-full-screen", {
			loop: !0,
			slidesPerView: 1,
			preventClicks: !1,
			allowTouchMove: !0,
			pagination: {
				el: ".swiper-full-screen-pagination",
				clickable: !0
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			on: {
				resize: function () {
					i.update()
				}
			}
		}),
		t = new Swiper(".swiper-auto-fade", {
			allowTouchMove: !0,
			loop: !0,
			slidesPerView: 1,
			preventClicks: !1,
			effect: "fade",
			autoplay: {
				delay: 5e3
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			pagination: {
				el: ".swiper-auto-pagination",
				clickable: !0
			},
			on: {
				resize: function () {
					t.update()
				}
			}
		}),
		n = new Swiper(".swiper-slider-second", {
			allowTouchMove: !0,
			slidesPerView: 1,
			preventClicks: !1,
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination-second",
				clickable: !0
			},
			on: {
				resize: function () {
					n.update()
				}
			}
		}),
		s = new Swiper(".swiper-slider-third", {
			allowTouchMove: !0,
			slidesPerView: 1,
			preventClicks: !1,
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination-third",
				clickable: !0
			},
			on: {
				resize: function () {
					s.update()
				}
			}
		}),
		l = new Swiper(".swiper-number-pagination", {
			allowTouchMove: !0,
			preventClicks: !1,
			pagination: {
				el: ".swiper-number",
				clickable: !0,
				renderBullet: function (e, a) {
					return '<span class="' + a + '">' + pad(e + 1) + "</span>"
				}
			},
			on: {
				resize: function () {
					l.update()
				}
			}
		}),
		o = new Swiper(".swiper-vertical-pagination", {
			allowTouchMove: !0,
			direction: "vertical",
			slidesPerView: 1,
			spaceBetween: 0,
			preventClicks: !1,
			mousewheel: {
				mousewheel: !0,
				sensitivity: 1,
				releaseOnEdges: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination-vertical",
				clickable: !0
			},
			on: {
				resize: function () {
					o.update()
				}
			}
		}),
		r = (new Swiper(".swiper-slider-clients", {
			allowTouchMove: !0,
			paginationClickable: !0,
			preventClicks: !0,
			pagination: {
				el: null
			},
			breakpoints: {
				1199: {
					slidesPerView: 4
				},
				991: {
					slidesPerView: 3
				},
				767: {
					slidesPerView: 3
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 10
				}
			}
		}), new Swiper(".eight-column-icon", {
			allowTouchMove: !0,
			spaceBetween: 0,
			paginationClickable: !0,
			preventClicks: !0,
			pagination: {
				el: null
			},
			autoplay: {
				delay: 1e3,
				disableOnInteraction: !1
			},
			breakpoints: {
				1199: {
					slidesPerView: 8
				},
				991: {
					slidesPerView: 6
				},
				500: {
					slidesPerView: 5
				},
				320: {
					slidesPerView: 3
				}
			}
		}), new Swiper(".six-column-icon", {
			allowTouchMove: !0,
			paginationClickable: !0,
			preventClicks: !0,
			pagination: {
				el: null
			},
			autoplay: {
				delay: 500,
				disableOnInteraction: !1
			},
			breakpoints: {
				1199: {
					slidesPerView: 7,
					spaceBetween: 0
				},
				991: {
					slidesPerView: 5
				},
				320: {
					slidesPerView: 3,
					spaceBetween: 0
				}
			},
			on: {
				resize: function () {
					r.update()
				}
			}
		})),
		c = new Swiper(".five-column-icon", {
			allowTouchMove: !0,
			slidesPerView: 5,
			spaceBetween: 0,
			paginationClickable: !0,
			preventClicks: !0,
			pagination: {
				el: null
			},
			breakpoints: {
				1199: {
					slidesPerView: 5
				},
				991: {
					slidesPerView: 4
				},
				767: {
					slidesPerView: 3
				}
			},
			on: {
				resize: function () {
					c.update()
				}
			}
		}),
		p = new Swiper(".swiper-slider-clients-second", {
			allowTouchMove: !0,
			paginationClickable: !0,
			preventClicks: !0,
			pagination: {
				el: null
			},
			autoplay: {
				delay: 500,
				disableOnInteraction: !1
			},
			breakpoints: {
				1199: {
					slidesPerView: 6
				},
				991: {
					slidesPerView: 4
				},
				320: {
					slidesPerView: 3,
					spaceBetween: 10
				}
			},
			on: {
				resize: function () {
					p.update()
				}
			}
		}),
		d = (new Swiper(".testimonialSlider", {
			allowTouchMove: !0,
			paginationClickable: !0,
			preventClicks: !0,
			autoplay: {
				delay: 1e3,
				disableOnInteraction: !1
			},
			pagination: {
				el: ".swiper-multy-row-pagination",
				clickable: !0
			},
			breakpoints: {
				1199: {
					slidesPerView: 1
				},
				991: {
					slidesPerView: 1
				},
				767: {
					slidesPerView: 1,
					spaceBetween: 15
				}
			}
		}), new Swiper(".white-box.pink-center", {
			allowTouchMove: !0,
			preventClicks: !1,
			pagination: {
				el: ".swiper-pagination-three-slides",
				clickable: !0
			},
			autoplay: {
				delay: 1e3,
				disableOnInteraction: !1
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-three-slide-next",
				prevEl: ".swiper-three-slide-prev"
			},
			breakpoints: {
				1199: {
					slidesPerView: 3
				},
				991: {
					slidesPerView: 2
				},
				767: {
					slidesPerView: 1
				}
			}
		}), new Swiper(".swiper-four-slides", {
			allowTouchMove: !0,
			preventClicks: !1,
			pagination: {
				el: ".swiper-pagination-four-slides",
				clickable: !0
			},
			autoplay: {
				delay: 3e3
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				1199: {
					slidesPerView: 4
				},
				991: {
					slidesPerView: 2
				},
				767: {
					slidesPerView: 1
				}
			}
		}), new Swiper(".swiper-demo-header-style", {
			allowTouchMove: !0,
			loop: !0,
			preventClicks: !0,
			pagination: {
				el: ".swiper-pagination-demo-header-style",
				clickable: !0
			},
			autoplay: {
				delay: 3e3
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				1199: {
					slidesPerGroup: 4,
					slidesPerView: 4
				},
				767: {
					slidesPerGroup: 1,
					slidesPerView: 1
				}
			},
			on: {
				resize: function () {
					d.update()
				}
			}
		})),
		u = 0,
		w = new Swiper(".swiper-auto-slide", {
			allowTouchMove: !0,
			slidesPerView: "auto",
			centeredSlides: !0,
			spaceBetween: 80,
			preventClicks: !1,
			observer: !0,
			speed: 1e3,
			pagination: {
				el: null
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: !0,
				hide: !1,
				snapOnRelease: !0
			},
			autoplay: {
				delay: 3e3
			},
			mousewheel: {
				invert: !1
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-next-style2",
				prevEl: ".swiper-prev-style2"
			},
			breakpoints: {
				1199: {
					spaceBetween: 60
				},
				960: {
					spaceBetween: 30
				},
				767: {
					spaceBetween: 15
				}
			},
			on: {
				resize: function () {
					w.update()
				}
			}
		});
	if ($(window).width() > 767) var b = new Swiper(".swiper-bottom-scrollbar-full", {
		allowTouchMove: !0,
		slidesPerView: "auto",
		grabCursor: !0,
		preventClicks: !1,
		spaceBetween: 30,
		keyboardControl: !0,
		speed: 1e3,
		pagination: {
			el: null
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: !0,
			hide: !1,
			snapOnRelease: !0
		},
		mousewheel: {
			enable: !0
		},
		keyboard: {
			enabled: !0
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
	var v, h = new Swiper(".swiper-auto-height-container", {
			allowTouchMove: !0,
			effect: "fade",
			loop: !0,
			autoHeight: !0,
			pagination: {
				el: ".swiper-auto-height-pagination",
				clickable: !0
			},
			autoplay: {
				delay: 3e3
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			on: {
				resize: function () {
					h.update()
				}
			}
		}),
		m = new Swiper(".swiper-multy-row-container", {
			allowTouchMove: !0,
			slidesPerView: 4,
			spaceBetween: 15,
			pagination: {
				el: ".swiper-multy-row-pagination",
				clickable: !0
			},
			autoplay: {
				delay: 3e3,
				disableOnInteraction: !1
			},
			navigation: {
				nextEl: ".swiper-portfolio-next",
				prevEl: ".swiper-portfolio-prev"
			},
			breakpoints: {
				991: {
					slidesPerView: 2
				},
				767: {
					slidesPerView: 1
				}
			},
			on: {
				resize: function () {
					m.update()
				}
			}
		}),
		g = new Swiper(".swiper-blog", {
			allowTouchMove: !0,
			slidesPerView: "auto",
			centeredSlides: !0,
			spaceBetween: 15,
			preventClicks: !1,
			loop: !0,
			loopedSlides: 3,
			pagination: {
				el: ".swiper-blog-pagination",
				clickable: !0
			},
			autoplay: {
				delay: 5e3,
				disableOnInteraction: !1
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			on: {
				resize: function () {
					g.update()
				}
			}
		}),
		f = new Swiper(".swiper-presentation", {
			allowTouchMove: !0,
			slidesPerView: 4,
			centeredSlides: !0,
			spaceBetween: 30,
			preventClicks: !0,
			loop: !0,
			loopedSlides: 6,
			pagination: {
				el: ".swiper-presentation-pagination",
				clickable: !0
			},
			autoplay: {
				delay: 3e3,
				disableOnInteraction: !1
			},
			keyboard: {
				enabled: !0
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				991: {
					spaceBetween: 15,
					slidesPerView: 2
				},
				767: {
					slidesPerView: 1
				}
			},
			on: {
				resize: function () {
					f.update()
				}
			}
		});

	function k() {
		b && (b.detachEvents(), b.destroy(!0, !0), b = void 0), $(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform", "").css("transition-duration", ""), $(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right", ""), $(".swiper-bottom-scrollbar-full .swiper-wrapper").removeAttr("style"), $(".swiper-bottom-scrollbar-full .swiper-slide").removeAttr("style"), $(window).width() > 767 && setTimeout(function () {
			b = new Swiper(".swiper-bottom-scrollbar-full", {
				allowTouchMove: !0,
				slidesPerView: "auto",
				grabCursor: !0,
				preventClicks: !1,
				spaceBetween: 30,
				keyboardControl: !0,
				speed: 1e3,
				pagination: {
					el: null
				},
				scrollbar: {
					el: ".swiper-scrollbar",
					draggable: !0,
					hide: !1,
					snapOnRelease: !0
				},
				mousewheel: {
					enable: !0
				},
				keyboard: {
					enabled: !0
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			})
		}, 500)
	}
	$(window).resize(function () {
		$(".swiper-auto-slide").length > 0 && w && (u = w.activeIndex, w.detachEvents(), w.destroy(!0, !1), w = void 0, $(".swiper-auto-slide .swiper-wrapper").css("transform", "").css("transition-duration", ""), $(".swiper-auto-slide .swiper-slide").css("margin-right", ""), setTimeout(function () {
			(w = new Swiper(".swiper-auto-slide", {
				allowTouchMove: !0,
				slidesPerView: "auto",
				centeredSlides: !0,
				spaceBetween: 80,
				preventClicks: !1,
				mousewheelControl: !0,
				observer: !0,
				speed: 1e3,
				pagination: {
					el: null
				},
				scrollbar: {
					el: ".swiper-scrollbar",
					draggable: !0,
					hide: !1,
					snapOnRelease: !0
				},
				autoplay: {
					delay: 3e3
				},
				keyboard: {
					enabled: !0
				},
				navigation: {
					nextEl: ".swiper-next-style2",
					prevEl: ".swiper-prev-style2"
				},
				breakpoints: {
					1199: {
						spaceBetween: 60
					},
					960: {
						spaceBetween: 30
					},
					767: {
						spaceBetween: 15
					}
				},
				on: {
					resize: function () {
						w.update()
					}
				}
			})).slideTo(u, 1e3, !1)
		}, 1e3)), $(".swiper-bottom-scrollbar-full").length > 0 && (clearTimeout(v), v = setTimeout(k, 1e3))
	}), $("ul.mega-menu-full").each(function (e, a) {
		var i = 0;
		$(this).children("li").each(function (e, a) {
			i += $(this).outerWidth()
		}), $(this).width(i + 95), i = 0
	}), (new WOW).init(), $(document).on("click", ".btn-hamburger", function () {
		$(".hamburger-menu").toggleClass("show-menu"), $("body").removeClass("show-menu")
	}), $('.navbar-collapse a[href="javascript:void(0)"]').on("click", function (e) {
		e.stopPropagation()
	}), $(".big-menu-open").on("click", function () {
		$(".big-menu-right").addClass("open")
	}), $(".big-menu-close").on("click", function () {
		$(".big-menu-right").removeClass("open")
	}), $(".accordion-style1 .collapse").on("show.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-minus"></i>')
	}), $(".accordion-style1 .collapse").on("hide.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-plus"></i>')
	}), $(".accordion-style2 .collapse").on("show.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").addClass("fa-angle-up").removeClass("fa-angle-down")
	}), $(".accordion-style2 .collapse").on("hide.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").removeClass("fa-angle-up").addClass("fa-angle-down")
	}), $(".accordion-style3 .collapse").on("show.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").addClass("fa-angle-up").removeClass("fa-angle-down")
	}), $(".accordion-style3 .collapse").on("hide.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").removeClass("fa-angle-up").addClass("fa-angle-down")
	}), $(".toggles .collapse").on("show.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-minus"></i>')
	}), $(".toggles .collapse").on("hide.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-plus"></i>')
	}), $(".toggles-style2 .collapse").on("show.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>')
	}), $(".toggles-style2 .collapse").on("hide.bs.collapse", function () {
		var e = $(this).attr("id");
		$('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="fas fa-angle-down"></i>')
	})
});
var swiper1 = new Swiper(".portfolio_slider", {
	centeredSlides: !0,
	preloadImages: !1,
	lazy: !0,
	autoplay: {
		delay: 1500,
		disableOnInteraction: !0
	},
	breakpoints: {
		767: {
			spaceBetween: 0
		},
		320: {
			spaceBetween: 10
		}
	},
	pagination: {
		el: ".portfolio_slider .swiper-pagination",
		clickable: !0
	},
	navigation: {
		nextEl: ".portfolio_slider .swiper-button-next",
		prevEl: ".portfolio_slider .swiper-button-prev"
	},
	observer: !0,
	observeParents: !0
});
$(".swiper-container").hover(function () {
	this.swiper.autoplay.stop()
}, function () {
	this.swiper.autoplay.start()
});
var num1, num2, print;
var maxVal = 20;
num1 = Math.ceil(Math.random() * maxVal);
num2 = Math.ceil(Math.random() * maxVal);
$("input[name=num1]").val(num1);
$("input[name=num2]").val(num2);
print = num1 + num2;
$("#question").prepend(num1 + " + " + num2 + " =");
$("#question1").prepend(num1 + " + " + num2 + " =");
$("#contact-form").validate({
	rules: {
		name: "required",
		subject: "required",
		custom_captcha: "required",
		message: "required",
		email: {
			required: !0,
			email: !0
		}
	},
	messages: {
		name: "Please enter your name.",
		subject: "Please enter subject.",
		custom_captcha: "*Required",
		message: "Please enter message.",
		email: {
			required: "We need your email address to contact you.",
			email: "Enter valid Email Id."
		}
	},
	submitHandler: function (e) {
		$("#form_message").html("").hide();
		var a = new FormData(e);
		$.ajax({
			url: "ajax/submit.php",
			type: "POST",
			dataType: "json",
			data: a,
			cache: !1,
			contentType: !1,
			processData: !1,
			beforeSend: function () {
				$("#submit_form span#btn_loader").show(), $("#submit_form").attr("disabled", "disabled")
			},
			success: function (e) {
				$("#submit_form span#btn_loader").hide(), $("#submit_form").removeAttr("disabled"), 1 == e.statusCode ? ($("#form_message").show().html(e.message).removeClass("text-danger").addClass("text-success"), num1 = Math.ceil(Math.random() * maxVal), num2 = Math.ceil(Math.random() * maxVal), $("input[name=num1]").val(num1), $("input[name=num2]").val(num2), $("#question").html(""), $("#question").prepend(num1 + " + " + num2 + " ="), $("#question1").html(""), $("#question1").prepend(num1 + " + " + num2 + " ="), $("#contact-form").trigger("reset")) : $("#form_message").show().html(e.message).removeClass("text-success").addClass("text-danger")
			}
		})
	}
}), $("#portfolio-form").validate({
	rules: {
		name: "required",
		subject: "required",
		custom_captcha: "required",
		message: "required",
		email: {
			required: !0,
			email: !0
		}
	},
	messages: {
		name: "Please enter your name.",
		subject: "Please enter subject.",
		custom_captcha: "*Required",
		message: "Please enter message.",
		email: {
			required: "We need your email address to contact you.",
			email: "Enter valid Email Id."
		}
	},
	submitHandler: function (e) {
		$("#form-message").html("").hide();
		var a = new FormData(e);
		$.ajax({
			url: "ajax/submit.php",
			type: "POST",
			dataType: "json",
			data: a,
			cache: !1,
			contentType: !1,
			processData: !1,
			beforeSend: function () {
				$("#submit-form span.btn_loader").show(), $("#submit-form").attr("disabled", "disabled")
			},
			success: function (e) {
				$("#submit-form span.btn_loader").hide(), $("#submit-form").removeAttr("disabled"), 1 == e.statusCode ? ($("#form-message").show().html(e.message).removeClass("text-danger").addClass("text-success"), num1 = Math.ceil(Math.random() * maxVal), num2 = Math.ceil(Math.random() * maxVal), $("input[name=num1]").val(num1), $("input[name=num2]").val(num2), $("#question").html(""), $("#question").prepend(num1 + " + " + num2 + " ="), $("#question1").html(""), $("#question1").prepend(num1 + " + " + num2 + " ="), $("#portfolio-form").trigger("reset")) : $("#form-message").show().html(e.message).removeClass("text-success").addClass("text-danger")
			}
		})
	}
}), $("section .title-tab ul li").click(function () {
	if (!$(this).hasClass("active")) {
		var e = $(this).index();
		$("section .title-tab ul li").removeClass("active"), $(this).addClass("active"), $(".title-content .item").hide(), $(".title-content .item").eq(e).fadeIn()
	}
});
var activeurl = window.location;
$('a[href="' + activeurl + '"]').parents("li").addClass("active"), $(document).on("click", ".video_img span[data-video]", function () {
	var e = $(this).closest(".video_img").next().find(".video-ttl").text(),
		a = "https://www.youtube.com/embed/" + $(this).attr("data-video") + "?rel=0&showinfo=0";
	$("#video-modal").find("iframe").attr("src", a), $("#video-modal").find(".modal-title").html(e)
}), $(".readmore_content").click(function () {
	$(this).next().show(), $(this).parent().next(".hidden-content").show(), $(this).hide()
}), $(function () {
	$("a[href*=\\#]:not([href=\\#])").click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var e = $(this.hash);
			if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
				scrollTop: e.offset().top
			}, 1e3), !1
		}
	})
}), window.location.href.indexOf("ar_vr") > -1 && $('ul.nav.nav-tabs li a[data-target="#ar_vr"]').click(), window.location.href.indexOf("ai") > -1 && $('ul.nav.nav-tabs li a[data-target="#ai"]').click(), window.location.href.indexOf("mobile_app") > -1 && $('ul.nav.nav-tabs li a[data-target="#mobile_app"]').click(), window.location.href.indexOf("gaming") > -1 && $('ul.nav.nav-tabs li a[data-target="#gaming"]').click(), window.location.href.indexOf("blockchain") > -1 && $('ul.nav.nav-tabs li a[data-target="#blockchain"]').click(), window.location.href.indexOf("ui-ux") > -1 && $('ul.nav.nav-tabs li a[data-target="#ui-ux"]').click();
var url = window.location.href,
	lastPart = url.substr(url.lastIndexOf("#") + 1);
"ar_vr" === lastPart && $('ul.nav.nav-tabs li a[data-target="#ar_vr"]').click(), "ai" === lastPart && $('ul.nav.nav-tabs li a[data-target="#ai"]').click(), "gaming" === lastPart && $('ul.nav.nav-tabs li a[data-target="#gaming"]').click(), "mobile_app" === lastPart && $('ul.nav.nav-tabs li a[data-target="#mobile_app"]').click(), "blockchain" === lastPart && $('ul.nav.nav-tabs li a[data-target="#blockchain"]').click(), "ui-ux" === lastPart && $('ul.nav.nav-tabs li a[data-target="#ui-ux"]').click(), $("ul.nav.nav-tabs li a").click(function () {
	window.location = $(this).attr("data-target")
}), $(".navbar-toggler").click(function () {
	$(".navbar-collapse").is(":visible") ? ($(".navbar-collapse").slideUp(), $(this).removeClass("is-active"), $("#mask").hide()) : ($(".navbar-collapse").slideDown(), $(this).addClass("is-active"), $("#mask").show())
}), $("#mask").click(function () {
	$(".navbar-toggler").removeClass("is-active"), $(".navbar-collapse").slideUp(), $(this).hide()
}), $("#particles-js").is(":visible") && particlesJS("particles-js", {
	particles: {
		number: {
			value: 80,
			density: {
				enable: !0,
				value_area: 800
			}
		},
		color: {
			value: "#0e88b9"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#0e88b9"
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: .5,
			random: !1,
			anim: {
				enable: !1,
				speed: 1,
				opacity_min: .1,
				sync: !1
			}
		},
		size: {
			value: 5,
			random: !0,
			anim: {
				enable: !1,
				speed: 40,
				size_min: .1,
				sync: !1
			}
		},
		line_linked: {
			enable: !0,
			distance: 150,
			color: "#ffffff",
			opacity: .4,
			width: 1
		},
		move: {
			enable: !0,
			speed: 6,
			direction: "none",
			random: !1,
			straight: !1,
			out_mode: "out",
			attract: {
				enable: !1,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: !0,
				mode: "repulse"
			},
			onclick: {
				enable: !0,
				mode: "push"
			},
			resize: !0
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: !0,
	config_demo: {
		hide_card: !1,
		background_color: "#0e88b9",
		background_image: "",
		background_position: "50% 50%",
		background_repeat: "no-repeat",
		background_size: "cover"
	}
}), $("#particles-js2").is(":visible") && particlesJS("particles-js2", {
	particles: {
		number: {
			value: 80,
			density: {
				enable: !0,
				value_area: 800
			}
		},
		color: {
			value: "#0e88b9"
		},
		opacity: {
			value: .5,
			random: !1,
			anim: {
				enable: !1,
				speed: 1,
				opacity_min: .1,
				sync: !1
			}
		},
		size: {
			value: 5,
			random: !0,
			anim: {
				enable: !1,
				speed: 40,
				size_min: .1,
				sync: !1
			}
		},
		line_linked: {
			enable: !0,
			distance: 150,
			color: "#0e88b9",
			opacity: .5,
			width: 1
		},
		move: {
			enable: !0,
			speed: 6,
			direction: "none",
			random: !1,
			straight: !1,
			out_mode: "out",
			attract: {
				enable: !1,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: !0,
				mode: "repulse"
			},
			onclick: {
				enable: !0,
				mode: "push"
			},
			resize: !0
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: !0,
	config_demo: {
		hide_card: !1,
		background_color: "#0e88b9",
		background_image: "",
		background_position: "50% 50%",
		background_repeat: "no-repeat",
		background_size: "cover"
	}
});