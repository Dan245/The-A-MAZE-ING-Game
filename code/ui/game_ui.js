
//pause button
var pausePlay = {
  pause: null,
  play: null,
  x: null,
  y: null,
  w: null,
  h: null,
  paused: null,
  
}

// resume button
var resume = {
image: null,
  x: null,
  y: null,
  w: null,
  h: null,
  
}

 

// score and highscore vars
var score = 0;
var highscore = 0;

// values needed for offsetting
var offsetUI = {
  x: null,
  y: null,
  up: null,
  right: null,
  down: null,
  left: null
}

//game ui setup
function gameUISetup() {
    //uiGame = createGraphics(width, height);
  //uiGame.background(220, 0, 220);
  // start the game with it unpaused and the score 0
  pausePlay.paused = false
  score = 0;
}

function gameUIDraw() {
 // image(uiGame, 0, 0);
 // uiGame.clear()
  
  //all of the buttons and text that appears while playing the game
  offset();
  pausePlayButton();
  scoreText();
  resumeButton()
  restartButton()
  optionsButton2()
  mainMenuButton2();
}

// the pause button
function pausePlayButton() {
  
  // dynamic button size, must divide by 2 since the camera is zoomed 2x when the game is playing
    pausePlay.h = height/10/2;
  pausePlay.w = pausePlay.h;
  
 //pausePlay.x = width/64-pausePlay.w/2
 //pausePlay.y = height/64-pausePlay.h/2
  
  // puts the button in top left corner, relative to where the player is so it stays in the same spot (offseUI.x and .y are needed for when the player moves)
   pausePlay.x = player.x-width/4+width/64 + offsetUI.x
 pausePlay.y = player.y-height/4+width/64 + offsetUI.y
 
  // determining which image to draw depending on whether or not the game is paused
  if (!pausePlay.paused) {

      image(pausePlay.pause, pausePlay.x, pausePlay.y, pausePlay.w, pausePlay.h);

  } else if (pausePlay.paused) {
  image(pausePlay.play, pausePlay.x, pausePlay.y, pausePlay.w, pausePlay.h);
  }
//print(pausePlay.x);
 // print(pausePlay.y)
//print(mouseX)
}

// the score text
function scoreText() {
  
  //alignin text to the right so that it'll never go off the screen
  textAlign(RIGHT)
  
  // customizing text
  textSize(width / 40);
  fill(220);
  stroke(0);
  strokeWeight(4);
  
  
  // grammar is important!
  if (score != 1) {
    plural = 's';
  } else {
    plural = ''
  }
  
  // drawing the text (again with the offset)
  text(score + ' Maze' + plural + '\nCompleted', player.x+width/4-width/40+ offsetUI.x, player.y-height/4+height/20+ offsetUI.y)
}

// the resume button (gee I couldn't have guessed)
function resumeButton() {
  
  //textAlign(CENTER)
  //customizing the height, and keeping the aspect ratio of the image 
      resume.h = height/10/2;
  resume.w = resume.h*(245/56);
  
  // since the button's x and y values are relative to the canvas and not what's shown on screen, I had to imitate its values relative to the screen. this checks if the player is hovering over the button
  if (touchingButton(width/2-resume.w, height/2-resume.h-height/5, resume.w*2, resume.h*2)) {

    // making it bigger if you touch it
    resume.w = resume.w * 1.05
    resume.h = resume.h * 1.05
    resume.x = player.x-resume.w/2
    resume.y = player.y-resume.h/2-width/10
    


  } else {
    // reverting back to normal when mouse is not touching it
    resume.w = resume.w / 1.05
    resume.h = resume.h / 1.05
    resume.x = player.x-resume.w/2
    resume.y = player.y-resume.h/2-width/10
        

  }
  // having it only display if the game is paused
if (pausePlay.paused) {
  image(resume.image, resume.x, resume.y, resume.w, resume.h);
  }

}

//the restart button
function restartButton() {
    textAlign(CENTER)
    //customizing the height, and keeping the aspect ratio of the image
      restart.h = height/10/2;
  restart.w = restart.h*(267/56);
  
 //pausePlay.x = width/64-pausePlay.w/2
 //pausePlay.y = height/64-pausePlay.h/2
  



// same as resume, but with this button instead
  if (touchingButton(width/2-restart.w, height/2-restart.h, restart.w*2, restart.h*2)) {

    // making it bigger if you touch it
    restart.w = restart.w * 1.05
    restart.h = restart.h * 1.05
    restart.x = player.x-restart.w/2
    restart.y = player.y-restart.h/2
    


  } else {
    // reverting back to normal when mouse is not touching it
    restart.w = restart.w / 1.05
    restart.h = restart.h / 1.05
    restart.x = player.x-restart.w/2
    restart.y = player.y-restart.h/2
        

  }
  // only showing if the image is paused
if (pausePlay.paused) {
  image(restart.image1, restart.x, restart.y, restart.w, restart.h);
  }
}

// the next 2 buttons have literally the exact same format as the last 2 buttons
function optionsButton2() {
    textAlign(CENTER)
      options.h = height/10/2;
  options.w = options.h*(340/92);


  if (touchingButton(width/2-options.w, height/2-options.h+width/5, options.w*2, options.h*2)) {

    options.w = options.w * 1.05
    options.h = options.h * 1.05
    options.x = player.x-options.w/2
    options.y = player.y-options.h/2+width/10
    


  } else {
    options.w = options.w / 1.05
    options.h = options.h / 1.05
    options.x = player.x-options.w/2
    options.y = player.y-options.h/2+width/10
        

  }
if (pausePlay.paused) {
  image(options.image, options.x, options.y, options.w, options.h);
}
}

function mainMenuButton2() {
      textAlign(CENTER)
      mainMenu.h = height/10/2;
  mainMenu.w = mainMenu.h*(342/62);
  
  




  if (touchingButton(width/2-mainMenu.w, height/2-mainMenu.h+width/2.5, mainMenu.w*2, mainMenu.h*2)) {

    mainMenu.w = mainMenu.w * 1.05
    mainMenu.h = mainMenu.h * 1.05
    mainMenu.x = player.x-mainMenu.w/2
    mainMenu.y = player.y-mainMenu.h/2+width/5
    


  } else {
    mainMenu.w = mainMenu.w / 1.05
    mainMenu.h = mainMenu.h / 1.05
    mainMenu.x = player.x-mainMenu.w/2
    mainMenu.y = player.y-mainMenu.h/2+width/5
        

  }
if (pausePlay.paused) {
  image(mainMenu.image, mainMenu.x, mainMenu.y, mainMenu.w, mainMenu.h);
}
}

// this function changes the ui position if the player is moving, so there's no jolts whenever you move
function offset() {
// goes through each key press and changes the offset accordingly
    if (keyIsDown(wasd.w) && player.y > 0 + strokeSize / 2 && !pausePlay.paused) {

      if (!lineTouch() || !direction[0]) {
        offsetUI.up = player.speed;
      } else {
        offsetUI.up = 0;
      }


  } else {
    offsetUI.up = 0;
  }

  
  if (keyIsDown(wasd.d) && player.x < width - player.s - strokeSize / 2 && !pausePlay.paused) {

      if (!lineTouch() || !direction[1]) {
        offsetUI.right = -player.speed;
      } else {
        offsetUI.right = 0;
      }

  } else  {
    offsetUI.right = 0;
  }



  if (keyIsDown(wasd.s) && player.y < height - player.s - strokeSize / 2 && !pausePlay.paused) {

      if (!lineTouch() || !direction[2]) {
        offsetUI.down = -player.speed;

      } else {
        offsetUI.down = 0;
      }
  } else {
    offsetUI.down = 0;
  }


  if (keyIsDown(wasd.a) && player.x > 0 + strokeSize / 2 && !pausePlay.paused) {


      if (!lineTouch() || !direction[3]) {
        
        offsetUI.left = player.speed;

      } else {
        
        offsetUI.left = 0;
      }

  } else {
    
offsetUI.left = 0;
  }
  // adds the offset values together to get a final value sent to the buttons
  offsetUI.x = offsetUI.right + offsetUI.left;
  offsetUI.y = offsetUI.up + offsetUI.down;
  
}