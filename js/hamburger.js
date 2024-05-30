$(document).ready(function () {
  $(".nav-btn").click(function (event) {
    $(".nav-btn").toggleClass("active");
    $(".hamburger-icon").toggleClass("close");
    $(".close-icon").toggleClass("close");
    $(".hamburger-nav-list").toggleClass("close");
    $("main").toggleClass("mask");
  });
});
