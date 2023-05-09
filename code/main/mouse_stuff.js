// buttonClicked stores if a button has been clicked, temp stores what screen to change to when the mosue is released
var buttonClicked = false;
var temp;

// when the mouse is pressed, the function goes down the long list of buttons, and checks if the user was touching them and if they were on the button's corresponding screen. If true, it executes whatever the button does (mainly change the screen var, but some of them switch booleans on and off to reset or resume something). The buttons either use the built-in dist function or my touchingButton function, depending if they're circular or rectangular.
function mousePressed() {
  if (touchingButton(play.x, play.y, play.w, play.h) && screen == 0)   { 
    gameUISetup()
    buttonClicked = true;
    genMaze = true;
    pausePlay.paused = false;
temp = 3;
      print('play')
  } else if (touchingButton(instructions.x, instructions.y, instructions.w, instructions.h) && screen == 0)   { 
    buttonClicked = true;
temp = 1;
      print('how2play')
  } else if (touchingButton(options.x, options.y, options.w, options.h) && screen == 0)   { 
    buttonClicked = true;
temp = 2;
      print('options')
  } else if (touchingButton(arrow.bx, arrow.by, arrow.bw, arrow.bh) && (screen == 1 || screen == 2 || screen == 3.5)) {
    buttonClicked = true;
    if (screen == 3.5) {
      temp = 3;
    } else {
      temp = 0;
    }
    
    print('main menu')
  } else if (touchingButton(arrow.fx, arrow.fy, arrow.fw, arrow.fh) && screen == 1 && page < 4) {
    buttonClicked = true;
    page++;
  } else if (touchingButton(arrow.b2x, arrow.b2y, arrow.b2w, arrow.b2h) && screen == 1&& page > 1) {
    buttonClicked = true;
    page--;
  } else if (touchingButton(restart.x, restart.y, restart.w, restart.h) && (screen == 4 || screen == 3.5)) {
    gameUISetup()
    buttonClicked = true;
    genMaze = true;
    temp = 3;
  } else if (touchingButton(mainMenu.x, mainMenu.y, mainMenu.w, mainMenu.h) && (screen == 4 || screen == 3.5)) {
    buttonClicked = true;
    temp = 0;
  } else if (dist(mouseX, mouseY, width/2-width/2+width/32, height/2-height/2+height/32) <= pausePlay.w*2) {
    if (!pausePlay.paused) {
      pausePlay.paused = true;
    } else if (pausePlay.paused) {
      pausePlay.paused = false;
    }
  } else if (touchingButton(width/2-resume.w, height/2-resume.h-height/5, resume.w*2, resume.h*2) && pausePlay.paused && screen == 3) {
    pausePlay.paused = false;
  } else if (touchingButton(width/2-restart.w, height/2-restart.h, restart.w*2, restart.h*2) && pausePlay.paused && screen == 3) {
    buttonClicked = true;
    genMaze = true;
    pausePlay.paused = false;
    temp = 3;
  } else if (touchingButton(width/2-options.w, height/2-options.h+width/5, options.w*2, options.h*2) && pausePlay.paused && screen == 3) {
    buttonClicked = true;
    temp = 3.5;
  } else if (touchingButton(width/2-mainMenu.w, height/2-mainMenu.h+width/2.5, mainMenu.w*2, mainMenu.h*2) && pausePlay.paused && screen == 3) {
    buttonClicked = true;
        pausePlay.paused = false;
    genMaze = true;
    temp = 0;

    
  }
}


// if a button was clicked, change the screen to whatever the button wants it to
function mouseReleased() {
  if (buttonClicked) {
    screen = temp;
    buttonClicked = false;
    if (screen != 1) {
      //this resets the instructions page
          once = false;
    }

  }
}