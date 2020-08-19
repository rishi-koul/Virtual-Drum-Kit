$("button").on("click", function(){
  var pressedButton = $(this).text();
  handleClick(pressedButton);
});

$(document).on("keydown", function(e){
  console.log(e.key);
  handleClick(e.key);
});


function handleClick(pressedButton){

  switch(pressedButton){
    case 'n':
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case 'd':
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case 'l':
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case 'h':
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case 'a':
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case 'w':
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case 'k':
    var crash2 = new Audio("sounds/crash.mp3");
    crash2.play();
    break;
  }

}
