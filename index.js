$("button").on("click", function(){
  var pressedButton = $(this).text();
  handleClick(pressedButton);
  buttonAnimation(pressedButton);
});

$(document).on("keydown", function(e){
//   console.log(e.key);
  handleClick(e.key);
  buttonAnimation(e.key);
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

function buttonAnimation(key){

    switch(key){
    case 'n':
        $(".w").addClass("pressed");
          setTimeout(function(){
        $(".w").removeClass("pressed");
        }, 
    break;
    case 'd':
        $(".q").addClass("pressed");
          setTimeout(function(){
        $(".q").removeClass("pressed");
        }, 
    break;
    case 'l':
        $(".k").addClass("pressed");
          setTimeout(function(){
        $(".k").removeClass("pressed");
        },                      
    break;
    case 'h':
        $(".a").addClass("pressed");
          setTimeout(function(){
        $(".a").removeClass("pressed");
        },                      
    break;
    case 'a':
         $(".j").addClass("pressed");
          setTimeout(function(){
        $(".j").removeClass("pressed");
        },                    
    break;
    case 'w':
         $(".d").addClass("pressed");
          setTimeout(function(){
        $(".d").removeClass("pressed");
        }, 
    break;
    case 'k':
        $(".l").addClass("pressed");
          setTimeout(function(){
        $(".l").removeClass("pressed");
        },                      
    break;
  }

}

