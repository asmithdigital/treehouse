// Problem: no user interaction causes no change to application
// Solution: when user interacts cause changes apropriately

var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastevent;
var mouseDown = false;

// When clicking on control list items
$(".controls").on("click", "li", function(){
   // Deselect siling elements
  $(this).siblings().removeClass("selected");
  // Then select clicked element
  $(this).addClass("selected");
  // Cache current color here
  color = $(this).css("background-color");
});
 

// When "New color" is pressed 
$("#revealColorSelect").click(function(){
  // Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

// Update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
  
// When color sliders change
$("input[type=range]").change(changeColor);
 

// When "Add color" is pressed 
$("#addNewColor").click(function(){
  // Append the color to the controls <ul>
   var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // select the new color
  $newColor.click();
  
});
  

// On mouse events on the canvas
$canvas.mousedown(function(e){
  lastevent = e;
  mouseDown =   true;
}).mousemove (function(e){
    // Draw lines
    if (mouseDown){
      context.beginPath();
      context.moveTo(lastevent.offsetX,lastevent.offsetY);
      context.lineTo(e.offsetX,e.offsetY);
      context.stroke();
      context.strokeStyle = color;
      lastevent = e;
    }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});




