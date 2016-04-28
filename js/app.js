$(document).ready(function() {
  console.log("Hello! I'm working!");
  var isClicked = false;

  $(".text-field").on("click", ".add-item" , function(e) {
    e.preventDefault();
    var input = $("#item-entered").val();
    $("ul").append("<li class='added'><i class='fa-li fa fa-square-o'></i>" + input + "</li>");
    $("#item-entered").val("").focus();
  })

  $(".fa-ul").on("mouseover", ".added" , function() {
    $(this).children("i").removeClass("fa-square-o").addClass("fa-check-square-o");
  })

  $(".fa-ul").on("mouseleave", ".added", function() {
    if (!isClicked) {
      $(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
    }
  })

  $(".fa-ul").on("click", ".added", function() {
    $(this).isClicked = true;
    $(this).removeClass().addClass("to-delete");
    $(this).children("i").removeClass("fa-square-o").addClass("fa-trash");
  })

  $(".fa-ul").on("click", ".to-delete", function() {
    (this).remove();
  })
});