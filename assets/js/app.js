$(document).ready(function () {
  $(".delete").on("click", function () {
    return confirm("Are you sure you want to delete this item?");
  });

  $("#pwd").on("click", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#pwdinput");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
    input.focus();
  });

  $("#pimg").on("click", function () {
    $("#pimgi").click();
  });
  $(".pimgedit").on("click", function () {
    $("#pimgi").click();
  });
});
