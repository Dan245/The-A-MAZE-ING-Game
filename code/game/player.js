var strokeSize;
var touchingStuff = false;

var wasd = {
  w: null,
  a: null,
  s: null,
  d: null
}
  var tempScore
// the player object
var player = {
  x: null,
  y: null,
  s: 50,
  speed: 4,
  entity: null,
  defaultSprite: null,
  hurtSprite: null,
  deadSprite: null

}
// the camera
var cam = {
  x: null,
  y: null
}

// sets of the player size
function playerSetup() {
  noStroke();

  
  player.s = width / 12 / 4



}
// draws the player
function playerDraw() {
    player.entity = image(player.defaultSprite, player.x, player.y, player.s, player.s)
}


//as long as the player isn't touching any walls, move in whatever direction the player commands (with the key presses)
function movement() {
  if (op.movement.value() == 'standard') {
    wasd.w = 87;
    wasd.a = 65;
    wasd.s = 83;
    wasd.d = 68;
  } else {
    wasd.w = UP_ARROW;
    wasd.a = LEFT_ARROW;
    wasd.s = DOWN_ARROW;
    wasd.d = RIGHT_ARROW;
  }
  if (!pausePlay.paused) {

  if (keyIsDown(wasd.w) && player.y > 0 + strokeSize / 2) {
    for (var inc = 0; inc < player.speed; inc++) {

      if (!lineTouch() || !direction[0]) {
        player.y += -1;
        //print('Top line crossed');
      }
     // print(lineTouch())
       // print(direction[0])
    }

  } else if (keyIsDown(wasd.w) && player.y <= 0 + strokeSize / 2) {
    player.y = 0 + strokeSize / 2;
  }




  if (keyIsDown(wasd.d) && player.x < width - player.s - strokeSize / 2) {
    for (var inc3 = 0; inc3 < player.speed; inc3++) {

      if (!lineTouch() || !direction[1]) {
        player.x += 1;
        // print('Right line crossed');
      }
      //print(lineTouch())
       // print(direction[1])
    }
  } else if (keyIsDown(wasd.d) && player.x >= width - player.s - strokeSize / 2) {
    player.x = width - player.s - strokeSize / 2
  }



  if (keyIsDown(wasd.s) && player.y < height - player.s - strokeSize / 2) {
    for (var inc2 = 0; inc2 < player.speed; inc2++) {

      if (!lineTouch() || !direction[2]) {
        player.y += 1;
        // print('Bottom line crossed');
      }
     // print(lineTouch())
       // print(direction[2])
    }
  } else if (keyIsDown(wasd.s) && player.y >= height - player.s - strokeSize / 2) {
    player.y = height - player.s - strokeSize / 2
  }


  if (keyIsDown(wasd.a) && player.x > 0 + strokeSize / 2) {
    for (var inc1 = 0; inc1 < player.speed; inc1++) {

      if (!lineTouch() || !direction[3]) {
        
        player.x += -1;
        //print('Left line crossed');
      }
      //print(lineTouch())
        //print(direction[3])
    }
  } else if (keyIsDown(wasd.a) && player.x <= 0 + strokeSize / 2) {
    player.x = 0 + strokeSize / 2;
  }
  }
}




// the camera scales the user's view of the canvas by 2 and follows the player, so it feels really cool when playing
function playerCamera() {
  cam.x = (-player.x - player.s / 2 + width / 4) * 2
  cam.y = (-player.y - player.s / 2 + height / 4) * 2
  translate(cam.x, cam.y)
  scale(2);
}

function playerPos() {
  if (tempScore != score && score != 0) {
       tempScore = score
    if (door.t == 'top') {
      player.x = door.x + w/2 - player.s/2
      player.y = door.y + w*(rows-1) + w/2 - player.s/2
    } else if (door.t == 'right') {
      player.x = door.x  - w*(cols-1) + w/2 - player.s/2
      player.y = door.y + w/2 - player.s/2
    } else if (door.t == 'bottom') {
      player.x = door.x + w/2 - player.s/2
      player.y = door.y - strokeSize/2 - w*(rows-1) + w/2 - player.s/2
    } else if (door.t == 'left') {
      player.x = door.x  + w*(cols-1) + w/2 - player.s/2
      player.y = door.y + w/2 - player.s/2
    }
   // player.x = door.x - strokeSize/2
    //  player.y = door.y - strokeSize/2
    
  }

  
  
}