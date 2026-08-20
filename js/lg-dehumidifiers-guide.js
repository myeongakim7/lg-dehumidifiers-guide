$(function () {
  scroll_sec();

  $(".tab-wrap button").on("click", function () {
    var tab = $(this).attr("aria-tab");
    var tabH = $(".tab-wrap").height();
    // $(".tab-wrap button.on").removeClass("on");
    // $(this).addClass("on");

    $("html,body").animate(
      { scrollTop: $(".sec-" + tab + "-box").offset().top - tabH },
      500
    );
  });

  $(window).on("scroll", function () {
    scroll_sec();
  });

  $(".qa_box .qa_list > li").on("click", function () {
    if ($(this).hasClass("on") == true) {
      $(".qa_box .qa_list > li").removeClass("on");
      $(this).removeClass("on");
      $(this).children(".answer").slideUp();
    } else {
      $(".qa_box .qa_list > li").removeClass("on");
      $(".qa_box .qa_list > li").children(".answer").slideUp();
      $(this).children(".answer").slideDown();
      $(this).addClass("on");
    }
  });

  $(".capacity_list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    dotsClass: "dots_custom",
    infinite: false,
    responsive: [
      {
        breakpoint: 720,
        settings: "unslick",
      },
    ],
  });

  $(".tip_img_list.col-2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    dotsClass: "dots_custom",
    infinite: false,
    responsive: [
      {
        breakpoint: 720,
        settings: "unslick",
      },
    ],
  });
  $(".tip_img_list.col-3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    dotsClass: "dots_custom",
    infinite: false,
    responsive: [
      {
        breakpoint: 720,
        settings: "unslick",
      },
    ],
  });

  $(".comparison_list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    dotsClass: "dots_custom",
    responsive: [
      {
        breakpoint: 720,
        settings: "unslick",
      },
    ],
  });

  $(window).on("resize", function () {
    scroll_sec();
    $(".capacity_list").slick("resize");
    $(".tip_img_list.col-2").slick("resize");
    $(".tip_img_list.col-3").slick("resize");
    $(".comparison_list").slick("resize");
  });
});

function scroll_sec() {
  var scrollPos = $(window).scrollTop();

  $(".section").each(function () {
    var secId = $(this).attr("id");
    var firstSecTop = $(".section").first().offset().top;
    var tabH = $(".tab-wrap").height();
    var secTop = $(this).offset().top;
    var secBottom = secTop + $(this).outerHeight();

    if (scrollPos + tabH * 2 >= secTop && scrollPos < secBottom) {
      $(".tab-wrap button").removeClass("on");
      $(".tab-wrap button[aria-tab='" + secId + "']").addClass("on");
    }

    if (scrollPos < firstSecTop - tabH * 2) {
      $(".tab-wrap button").removeClass("on");
    }
  });
}
