var screen;
var once = false;
var genMaze = true;

// here's the mess of wires behind the computer case


//setup all the things that need to be intiialized
function screenSetups() {
  screen = 0;
  optionsSetup();
  overlaySetup();
  gameUISetup();

}

// functions that run for the start screen
function startScreen() {
  titleText();
  playButton();
  instructionsButton();
  optionsButton();
}


// functions that run for the instructions screen
function instructionsScreen() {
  if (!once) {
    instructionsInit();
    once = true;
  }

  instructionsDraw();
  backArrow();
  bArrow();
  fArrow();
}


// functions that run for the options screen
function optionsScreen() {
  optionsDraw();
  backArrow();
}


// functions that run for the game screen
function gameScreen() {
  if (genMaze) {
    setupMaze();
    while (stack.length > 0 || !grid[1].visited) {
      generateMaze();
          playerSetup();
      player.x = w/2 - player.s/2
      player.y = w/2 - player.s/2

    }
    playerSetup();
    playerPos()
    objectSetup();
   spawnEnemies();
    doorSetup()


    genMaze = false
  }
 playerCamera();

  fill(220);
  noStroke();
  square(0, 0, width);
  
  drawMaze();
  mazeKey()
  mazeDoor()
  playerDraw()
  movement();
 drawEnemies();

  dead();
  touchingKey();

overlayDraw();
  gameUIDraw()

}


// functions that run for the game over screen
function gameOverScreen() {
  gmDraw();
  mainMenuButton();
  playAgainButton()
}


// the function that detects when the screen has changed then calls the appropriate function
function screenchange() {


  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    instructionsScreen();
  } else if (screen == 2) {
    optionsScreen();
  } else if (screen == 3) {
    gameScreen();
  } else if (screen == 3.5) {
    optionsScreen();
  } else if (screen == 4) {
    gameOverScreen();
  }

  if (screen == 2 || screen == 3.5) {
    op.masterVol.show();
    op.music.show();
    op.sfx.show();
    op.movement.show();
  } else {
    op.masterVol.hide();
    op.music.hide();
    op.sfx.hide();
    op.movement.hide();
  }

  if (screen == 3) {
    bg = 0;
  } else {
    bg = 50;
  }
}