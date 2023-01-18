import * as script from "./main.js";

$("document").ready(function () {
  // dark-light
  $(".dark-light-c").click(function () {
    if ($(":root").hasClass("light-theme")) {
      $(":root").removeClass("light-theme");
      $(":root").addClass("dark-theme");
    } else {
      $(":root").removeClass("dark-theme");
      $(":root").addClass("light-theme");
    }
  });

  // humburger menu
  $(".bx-menu").click(function () {
    $(".nav-col-menu").css("display", "block");
    $(".bx-menu").css("display", "none");
    $(".bx-x").css("display", "block");
  });

  // close menu
  $(".bx-x").click(function () {
    $(".nav-col-menu").css("display", "none");
    $(".bx-x").css("display", "none");
    $(".bx-menu").css("display", "block");
  });
  // function on screen < 769px
  $(window).resize(function () {
    if ($(window).width() < 769) {
      // close menu when sub menu click
      $("li").click(function () {
        $(".nav-col-menu").css("display", "none");
        $(".bx-x").css("display", "none");
        $(".bx-menu").css("display", "block");
      });
    }
  });

  // scroll bar with percentage
  var currentPercent1 = 0;
  var maxPercent1 = 90;
  var currentPercent2 = 0;
  var maxPercent2 = 80;
  var currentPercent3 = 0;
  var maxPercent3 = 60;
  var currentPercent4 = 0;
  var maxPercent4 = 95;

  function increasePercent1() {
    currentPercent1++;
    $(".percentg").text(currentPercent1 + "%");
  }

  function increasePercent2() {
    currentPercent2++;
    $(".percentg-2").text(currentPercent2 + "%");
  }

  function increasePercent3() {
    currentPercent3++;
    $(".percentg-3").text(currentPercent3 + "%");
  }

  function increasePercent4() {
    currentPercent4++;
    $(".percentg-4").text(currentPercent4 + "%");
  }

  var interval1 = setInterval(increasePercent1, 50);

  var interval2 = setInterval(increasePercent2, 50);

  var interval3 = setInterval(increasePercent3, 50);

  var interval4 = setInterval(increasePercent4, 50);

  var checkPercent1 = setInterval(function () {
    if (currentPercent1 === maxPercent1) {
      clearInterval(interval1);
      clearInterval(checkPercent1);
    }
  }, 50);

  var checkPercent2 = setInterval(function () {
    if (currentPercent2 === maxPercent2) {
      clearInterval(interval2);
      clearInterval(checkPercent2);
    }
  }, 50);

  var checkPercent3 = setInterval(function () {
    if (currentPercent3 === maxPercent3) {
      clearInterval(interval3);
      clearInterval(checkPercent3);
    }
  }, 50);

  var checkPercent4 = setInterval(function () {
    if (currentPercent4 === maxPercent4) {
      clearInterval(interval4);
      clearInterval(checkPercent4);
    }
  }, 50);

  // form validating
  $("#cnt-form").submit(function (event) {
    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var message = $("textarea[name='message']").val();
    var isValid = true;

    if (name == "") {
      alert("Name field is required.");
      isValid = false;
    }

    if (email == "") {
      alert("Email field is required.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      alert("Invalid email address.");
      isValid = false;
    }

    if (message == "") {
      alert("Message field is required.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    var pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]).?$/i;
    return pattern.test(email);
  }
});
