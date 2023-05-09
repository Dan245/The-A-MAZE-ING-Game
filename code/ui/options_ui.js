var op = {
  masterVol: null,
  music: null,
  sfx: null,
  movement: null
}
var change = 100;
var labels = {
  title: 'Options',
  sound: 'Sound',
  masterVol: 'Master Volume',
  music: 'Music',
  sfx: 'SFX',
  ctrl: 'Controls'
}


// sets up all the non canvas elements (the ones that aren't drawn over and over again)
function optionsSetup() {
  op.masterVol = createSlider(0, 100, 100);
  op.masterVol.size(width / 4 * 3)
  op.masterVol.position(windowWidth / 2 - op.masterVol.width / 2, height / 5 * 2 - op.masterVol.height / 2)

  op.music = createSlider(0, 100, 100);
  op.music.size(width / 4 + width / 16)
  op.music.position(op.masterVol.x, height / 5 * 2 * 1.25 - op.music.height / 2)

  op.sfx = createSlider(0, 100, 100);
  op.sfx.size(width / 4 + width / 16)
  op.sfx.position(op.masterVol.x + op.masterVol.width - op.sfx.width, height / 5 * 2 * 1.25 - op.sfx.height / 2)

  op.movement = createRadio();

  op.movement.style('color', 'white')
  op.movement.option('WASD keys', 'standard')

  op.movement.option('←↑↓→ keys', 'old school')
  //op.movement.size(width / 2, height / 2)
  op.movement.value('standard');
  // op.movement.style(')
  //op.movement.style('padding', '0px')
  //op.movement.style('margin,', '0px')
  op.movement.position(windowWidth / 2 - op.movement.width/6, height / 5 * 4);
  //print(op.movement.width)
  // slider.position(10, 10);
  // slider.style('width', '80px');
}

// draws all the canvas elements (title, headers, subheaders)
function optionsDraw() {

  textAlign(CENTER)

  textSize(width / 8)
  textStyle(BOLD)
  fill(0);
  stroke(220)
  strokeWeight(4)
//line(width/2, 0, width/2, height)
  text(labels.title, width / 2, height / 7.5);


  line(0, op.masterVol.y - op.masterVol.y / 4 - (op.masterVol.y - op.masterVol.y / 4) / 4, width, op.masterVol.y - op.masterVol.y / 4 - (op.masterVol.y - op.masterVol.y / 4) / 4)

  textSize(width / 16);
  fill(220);
  stroke(0)

  text(labels.sound, width / 2, op.masterVol.y - op.masterVol.y / 4)
  stroke(220)

textAlign(CENTER)
  textSize(width / 32);
  fill(255);
  strokeWeight(0);

  text(labels.masterVol, op.masterVol.x-((windowWidth-width)/2) + op.masterVol.width / 2, op.masterVol.y  - width/200)

  text(labels.music, op.music.x -((windowWidth-width)/2) + op.music.width / 2, op.music.y - width/200)

  text(labels.sfx, op.sfx.x - ((windowWidth-width)/2) + op.sfx.width / 2, op.sfx.y - width/200)

  strokeWeight(4);
  stroke(220)
  line(0, height/5*3, width, height/5*3)
  
  
  textSize(width / 16);
  fill(220);
  stroke(0);
  
  text(labels.ctrl, width/2, op.movement.y-width/7.5)

  if (op.sfx.value() != change) {
    sfx.ping.play()
  }

      change = op.sfx.value()
}

// the backArrow, for going back from wherever you came from (main menu or the game)
function backArrow() {
    arrow.bh = height / 10
  arrow.bw = arrow.bh * (600 / 445)


  if (touchingButton(arrow.bx, arrow.by, arrow.bw, arrow.bh)) {

    arrow.bw = arrow.bw * 1.05
    arrow.bh = arrow.bh * 1.05
    arrow.bx = width/10 - arrow.bw / 2
    arrow.by = height/10 - arrow.bh / 2
    
image(arrow.bPressed, arrow.bx, arrow.by, arrow.bw, arrow.bh)

  } else {
    arrow.bw = arrow.bw / 1.05
    arrow.bh = arrow.bh / 1.05
    arrow.bx = width/10 - arrow.bw / 2
    arrow.by = height/10 - arrow.bh / 2
        
image(arrow.back, arrow.bx, arrow.by, arrow.bw, arrow.bh)
  }
  
}