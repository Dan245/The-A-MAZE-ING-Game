
// background, fps,  and screen vars
var screen;
var bg = 50;
var fps = 30;
var temp2;

// the setup function
function setup() {
// makes a square canvas, always making sure it fits within the user's window
  var cnv = createCanvas(floor(windowWidth / 12) * 12, floor(windowHeight / 12) * 12);

  if (width > height) {
    resizeCanvas(height, height);
  } else if (height > width) {
    resizeCanvas(width, width);
  }
  frameRate(fps)
    var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //sets up all the screens that need initializing
screenSetups();

userStartAudio()



  //squareLineCollision(width/4+7.5,40, 100, width/4, 0, width/4, 100, 15 )
}

// the draw function
function draw() {
  // draws the background
  background(bg);
  
  
  if (temp2 != screen) {
      musicSound();
    temp2 = screen;
  }
  volumeControl()
  //only one function??? How does everything work?
  //well, I did something called sweeping the mess under the rug, the bjillion functions are all routed through screens.js, making this area look very clean!
screenchange();


// print(direction);
//print(lineTouch())

}