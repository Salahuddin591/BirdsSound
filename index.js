// Detecting Button presss
for(var i=0 ; i < document.querySelectorAll(".drum").length ; i++ ){

  document.querySelectorAll('.drum')[i].addEventListener("click" ,function() {


      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

  });
}
// Detecting keyboard press

  document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
  });

  function makeSound(key){
    switch (key) {
      case "w":
        var chicken = new Audio('sounds/chicken.wav');
        chicken.play();
      break;

      case "a":
         var cock = new Audio('sounds/cock.mp3');
         cock.play();
      break;

      case "s":
        var duck = new Audio('sounds/duck.wav');
        duck.play();
      break;

      case "d":
        var goshawk = new Audio('sounds/goshawk.wav');
        goshawk.play();
      break;

      case "j":
      var pigeon = new Audio('sounds/pigeon.wav');
      pigeon.play();
      break;

      case "k":
      var cuckoo= new Audio('sounds/cuckoo.wav');
      cuckoo.play();
      break;

      case "l":
      var blue = new Audio('sounds/bluej.wav');
      blue.play();
      break;

      default: console.log(buttonInnerHTML);

     }

  }

  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  }
