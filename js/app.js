function appendInput() {
  $("input.add-item").on("click", function() {
    // console.log("Button clicked");
    var input = $("#item-entered").val();
    $("ul").append("<li class='added'><i class='fa-li fa fa-square-o'></i>" + input + "</li>");
    // console.log("Input: " + input);
  })
  $(document).keypress(function(e) {
    var input = $("#item-entered").val();
    if (e.which == 13) {
      e.preventDefault();
      $(".text-field").submit();
      $("ul").append("<li class='added'><i class='fa-li fa fa-square-o'></i>" + input + "</li>");
    }
  });
}

function hoverOver() {
  var itemType = $("li.added").text();
  $("li.added").on("mouseover", function() {
    $(this).html("<span class='hover-color'><li class='hover'><i class='fa-li fa fa-check-square-o list-check'>" + itemType + "</i></li></span>")
  });
};

$(document).ready(function() {
  console.log("Hello! I'm working!");
  appendInput();
  hoverOver();
});