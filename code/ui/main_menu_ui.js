// more vars for all the values of every element

var title = {
  image: null,
  x: null,
  y: null,
  w: null,
  h: null
}

var play = {
  regular: null,
  pressed: null,
  x: null,
  y: null,
  w: null,
  h: null
}

var instructions = {
  image: null,
  x: null,
  y: null,
  w: null,
  h: null
}

var options = {
  image: null,
  x: null,
  y: null,
  w: null,
  h: null
}

// this function is used for every button, and checks if the mouse is touching a button. Why is it in main_menu.js? Because I don't have anywhere else to put it (yet).
function touchingButton(x, y, w, h) {
  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    return true;
  } else {
    return false;
  }
}

// the title element (I made the title with an online editor, looks very professional)
function titleText() {
  title.h = height/6.2;
  title.w = height/6.2*(465/75);
  
  title.x = width/2-title.w/2
  title.y = height/5-title.h/2
      image(title.image, title.x, title.y, title.w, title.h);
}

//these are all buttons, nothing notable. The only thing is the play button changes colors (like the arrow buttons)
function playButton() {
  play.h = height / 7
  play.w = play.h * (482 / 162)


  if (touchingButton(play.x, play.y, play.w, play.h)) {

    play.w = play.w * 1.05
    play.h = play.h * 1.05
    play.x = width / 2 - play.w / 2
    play.y = height / 5*3.5 - play.h / 2
    
image(play.pressed, play.x, play.y, play.w, play.h)

  } else {
    play.w = play.w / 1.05
    play.h = play.h / 1.05
    play.x = width / 2 - play.w / 2
    play.y = height / 5*3.5 - play.h / 2
        
image(play.regular, play.x, play.y, play.w, play.h)
  }


}

function instructionsButton() {
    instructions.h = height / 17.5
  instructions.w = instructions.h * (439 / 80)


  if (touchingButton(instructions.x, instructions.y, instructions.w, instructions.h)) {

    instructions.w = instructions.w * 1.05
    instructions.h = instructions.h * 1.05
    instructions.x = width / 6 - instructions.w / 2
    instructions.y = height / 16 * 15 - instructions.h / 2
    


  } else {
    instructions.w = instructions.w / 1.05
    instructions.h = instructions.h / 1.05
    instructions.x = width / 6 - instructions.w / 2
    instructions.y = height / 16 * 15 - instructions.h / 2
        

  }
image(instructions.image, instructions.x, instructions.y, instructions.w, instructions.h)
}

function optionsButton() {
      options.h = height / 17.5
  options.w = options.h * (340 / 92)


  if (touchingButton(options.x, options.y, options.w, options.h)) {

    options.w = options.w * 1.05
    options.h = options.h * 1.05
    options.x = width / 6*5 - options.w / 2
    options.y = height / 16 * 15 - options.h / 2
    


  } else {
    options.w = options.w / 1.05
    options.h = options.h / 1.05
    options.x = width / 6*5 - options.w / 2
    options.y = height / 16 * 15 - options.h / 2
        

  }
  image(options.image, options.x, options.y, options.w, options.h)
}