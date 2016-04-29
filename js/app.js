$(document).ready(function() {
  var isClicked = false;

  $(".text-field").on("click", ".add-item" , function(e) {
    e.preventDefault();
    var input = $("#item-entered").val();
    if (input == "") {
      alert("Please enter an item before submitting. Thanks! :)");
    } else {
      $("ul").append("<li class='added'><i class='fa-li fa fa-square-o'></i>" + input + "</li>");
    }
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
    $(this).children("i").removeClass("fa-square-o").addClass("fa-trash");
    $(this).removeClass().addClass("delete-or-undo center").append("<i class='fa-li fa fa-undo'></i>");
  })

  $(".fa-ul").on("click", ".delete-or-undo > .fa-undo", function() {
    $(this).parent(".delete-or-undo").children("i").removeClass("fa-trash").addClass("fa-square-o");
    $(this).parent(".delete-or-undo").removeClass().addClass("added");
    $(this).remove(".fa-undo");
  })

  $(".fa-ul").on("click", ".delete-or-undo > .fa-trash", function() {
    $(this).parent(".delete-or-undo").remove();
  })
});