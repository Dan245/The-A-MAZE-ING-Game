// all the values for the ui elements
var gameOver = {
  image: null,
  x: null,
  y: null,
  w: null,
  h: null
  
}
var restart = {
  image1: null,
  image2: null,
  x: null,
  y: null,
  w: null,
  h: null
  
}
var mainMenu = {
  image: null,
  x: null,
  y: null,
  w: null,
  h: null
}


function gmDraw() {
  //drawing all the non button elements, most of the code is just positioning and formatting it correctly
  gameOver.h = height/5;
  gameOver.w = gameOver.h*(337/87);
  gameOver.x = width/2-gameOver.w/2
  gameOver.y = height/5-gameOver.h/2
      image(gameOver.image, gameOver.x, gameOver.y, gameOver.w, gameOver.h);
  
  textAlign(CENTER)
  textSize(width / 10);
  fill(255);
  stroke(0);
  strokeWeight(4);
  
  if (score != 1) {
    plural = 's';
  } else {
    plural = ''
  }
  text(score + ' maze' + plural + ' completed', width/2, height/12*5.5)
  
    if (highscore != 1) {
    plural = 's';
  } else {
    plural = ''
  }
  fill(220)
  textSize(width / 16);
  text('Highscore: ' + highscore + ' maze' + plural + ' completed', width/2, height/2+50)
}

// these next 2 buttons follow the same formula as all the other buttons (i'm not explaining what each button does when you press it here, that'll be in mouse_stuff.js)
function mainMenuButton() {
      mainMenu.h = height / 12
  mainMenu.w = mainMenu.h * (342 / 62)


  if (touchingButton(mainMenu.x, mainMenu.y, mainMenu.w, mainMenu.h)) {

    mainMenu.w = mainMenu.w * 1.05
    mainMenu.h = mainMenu.h * 1.05
    mainMenu.x = width / 2 - mainMenu.w / 2
    mainMenu.y = height / 16 * 14 - mainMenu.h / 2
    


  } else {
    mainMenu.w = mainMenu.w / 1.05
    mainMenu.h = mainMenu.h / 1.05
    mainMenu.x = width / 2 - mainMenu.w / 2
    mainMenu.y = height / 16 * 14 - mainMenu.h / 2
        

  }
image(mainMenu.image, mainMenu.x, mainMenu.y, mainMenu.w, mainMenu.h)
}

function playAgainButton() {
        restart.h = height / 12
  restart.w = restart.h * (363 / 73)


  if (touchingButton(restart.x, restart.y, restart.w, restart.h)) {

    restart.w = restart.w * 1.05
    restart.h = restart.h * 1.05
    restart.x = width / 2 - restart.w / 2
    restart.y = height / 16 * 12 - restart.h / 2
    


  } else {
    restart.w = restart.w / 1.05
    restart.h = restart.h / 1.05
    restart.x = width / 2 - restart.w / 2
    restart.y = height / 16 * 12 - restart.h / 2
        

  }
image(restart.image2, restart.x, restart.y, restart.w, restart.h)

}