/*console.log("hello to mac keyboad");
alert("welcome ")*/



var song2 = document.getElementById("song2");
var  pad = document.getElementById("pad");

pad.onclick =  function(){
  if (song2.paused){
    song2.play();
  } else {
    song2.pause();

  }
}
