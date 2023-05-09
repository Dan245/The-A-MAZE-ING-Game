// values for the arrow buttons and the instructions text
var arrow = {
  back: null,
  bPressed: null,
  bx: null,
  by: null,
  bw: null,
  bh: null,
  b2x: null,
  b2y: null,
  b2w: null,
  b2h: null,
  forward: null,
  fx: null,
  fy: null,
  fw: null,
  fh: null
}

var instructionsText = {
  t: null,
  p: null
}
var page;

// resets the page to 1 when you go to this page
function instructionsInit() {
  page = 1;
}

// draws the appropriate title and paragraph text depending on the page number
function instructionsDraw() {
  if (page == 1) {
    instructionsText.t = 'The A-Maze-Ing Game!';
    instructionsText.p = 'What? You\'ve never heard of this game before?\n Well, The A-Maze-Ing Game is all about solving mazes!\n (Sorry it\'s probably not that evident from the title)\n In The A-Maze-Ing Game, you\'re put through a series of mazes,\n each one completely random!\n In each maze there is a key, and a door. The door\n is your way out of the maze (and onto the next one!), but it can\n only be unlocked if you have the key.\n You must navigate through each maze, find \nthe key, and open the door.\n '
      textSize(width / 18)
      
  } else if (page == 2) {
    instructionsText.t = 'The A-Maze-Ing Game!';
    instructionsText.p = 'But don\'t think that\'s all there is to it!\n You see, you\'re not alone in the mazes. I\'ve filled them all \n with evil ghost versions of you!\n Why are they evil? Well...they\'re red, duh. \nThey\'re not quite as smart as you though. All they do is \nwander the maze, they\'re quite boring actually, and won\'t follow\n you around or anything! Just make sure you don\'t touch them!\n I coated each one in a thick poison that will kill you in an instant \n(because why not).\n It should be pretty easy to avoid them...\nalthough the maze corridors are pretty tight...\n and there are a lot of them...\n and they can go through walls...\n maybe not then haha! Just be careful, \nand you\'ll make it out in no time!'
      textSize(width / 18)
  } else if (page == 3) {
    instructionsText.t = 'The A-Maze-Ing Game!';
    instructionsText.p = 'Wait a second...\n Am I an infomercial? Because wait! There\'s more!\n I\'ve also limited your visibility! We wouldn\'t want you to see \nthe entire maze now would we?\n\n That\'s pretty much everything...\n so order no-... I mean start the game! \nIt\'s pretty cool, I promise!'
      textSize(width / 18)
  } else if (page == 4) {
    instructionsText.t = 'Controls'
    instructionsText.p = 'WASD or arrow keys to move \n(default is WASD, change in options)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThat\'s it, go play the game now'
      textSize(width / 12)
  }
  textAlign(CENTER)


  textStyle(BOLD)

  fill(0);
  stroke(220)
  strokeWeight(4)
  
  text(instructionsText.t, width/2, height/8)
  
    textSize(width / 32);
  fill(255);
  strokeWeight(0);
  
  text(instructionsText.p, width/2, height/3)
}

// the 2 arrows are similar to the other buttons, except they also change color. They allow the user to go forward and back to look at each page
function fArrow() {
  if (page < 4) {
    arrow.fh = height / 10
  arrow.fw = arrow.fh * (600 / 445)


  if (touchingButton(arrow.fx, arrow.fy, arrow.fw, arrow.fh)) {

    arrow.fw = arrow.fw * 1.05
    arrow.fh = arrow.fh * 1.05
    arrow.fx = width/10*9 - arrow.fw / 2
    arrow.fy = height/10*9 - arrow.fh / 2
    
image(arrow.forward, arrow.fx, arrow.fy, arrow.fw, arrow.fh)

  } else {
    arrow.fw = arrow.fw / 1.05
    arrow.fh = arrow.fh / 1.05
    arrow.fx = width/10*9 - arrow.fw / 2
    arrow.fy = height/10*9 - arrow.fh / 2
        
image(arrow.fPressed, arrow.fx, arrow.fy, arrow.fw, arrow.fh)
  }
  }
}

function bArrow() {
  if (page > 1) {

  arrow.b2h = height / 10
  arrow.b2w = arrow.b2h * (600 / 445)


  if (touchingButton(arrow.b2x, arrow.b2y, arrow.b2w, arrow.b2h)) {

    arrow.b2w = arrow.b2w * 1.05
    arrow.b2h = arrow.b2h * 1.05
    arrow.b2x = width/10 - arrow.b2w / 2
    arrow.b2y = height/10*9 - arrow.b2h / 2
    
image(arrow.back, arrow.b2x, arrow.b2y, arrow.b2w, arrow.b2h)

  } else {
    arrow.b2w = arrow.b2w / 1.05
    arrow.b2h = arrow.b2h / 1.05
    arrow.b2x = width/10 - arrow.b2w / 2
    arrow.b2y = height/10*9 - arrow.b2h / 2
        
image(arrow.bPressed, arrow.b2x, arrow.b2y, arrow.b2w, arrow.b2h)
  }
  }
}