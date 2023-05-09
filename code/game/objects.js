// stores the code for the key and the door


//values of the 2 objects
var mrKey = {
  image: null,
  r: null,
  c: null,
  gen: true,
  x: null,
  y: null,
  w: null,
  h: null
}

var door = {
  r: null,
  c: null,
  i: null,
  t: null,
  x: null,
  y: null,
  x1: null,
  y1: null,
  x2: null,
  y2: null,
  unlocked: false
}

// letting drawKey = true, and setting the edge vars
var drawKey = true;
var edge = [1, 12];

//for the key, until it is far enough from the player, keep generating a random grid location for it
function objectSetup() {
  drawKey = true;
  while (dist(player.x + player.s / 2, player.y + player.s / 2, mrKey.x + mrKey.w / 2, mrKey.y + mrKey.h / 2) <= width/2 || genMaze) {

    mrKey.r = floor(random(0, grid.length))
    mrKey.c = floor(random(0, grid.length))
    mrKey.w = w / 4
    mrKey.h = mrKey.w * (125 / 119);

    mrKey.x = floor(mrKey.r / rows) * w + w / 2 - mrKey.w / 2
    mrKey.y = floor(mrKey.c / cols) * w + w / 2 - mrKey.h / 2
    genMaze = false;
  }
  //while (dist(player.x + player.s / 2, player.y + player.s / 2, mrKey.x + mrKey.w / 2, mrKey.y + mrKey.h / 2) <= 50) {
    
 // }
  
  // grab a random edge, find a random grid spot on that edge, draw a line on the edge depending on what edge you're on
  doorSetup()

}

// draws the key as long as the user hasn't collected it (drawKey == false, this happens in the mouse stuff file)
function mazeKey() {
  mrKey.w = w / 4
  mrKey.h = mrKey.w * (125 / 119);

  mrKey.x = floor(mrKey.r / rows) * w + w / 2 - mrKey.w / 2
  mrKey.y = floor(mrKey.c / cols) * w + w / 2 - mrKey.h / 2
  if (drawKey) {
    image(mrKey.image, mrKey.x, mrKey.y, mrKey.w, mrKey.h)
    fill(255, 0, 255)

  }



}

function doorSetup() {
  

  if (round(random(0, 1)) == 0) {
    door.c = random(edge)
    door.r = floor(random(1, grid.length / rows))
    
    if (door.c == 1) {
      door.t = 'left';
    } else if (door.c == 12) {
      door.t = 'right'
    }

  } else {
    door.c = floor(random(1, grid.length / cols))
    door.r = random(edge)
    
    if (door.r == 1) {
      door.t = 'top'
    } else if (door.r == 12) {
      door.t = 'bottom'
    }

  }
door.i = door.c-1 + (door.r-1)*rows
  //print(door.c);
 // print(door.r);
  //print(door.i);
  //print(door.t);
  

}

//draws the door as long as it hasn't been unlocked
function mazeDoor() {
  stroke(139,69,19);

  strokeWeight(strokeSize/2)
  
  if (door.t == 'top') {
      door.x = (door.c-1)*w
  door.y = (door.r-1)*w + strokeSize/2

    door.x1 = door.x + strokeSize
      door.y1 = door.y
      door.x2 = door.x + w - strokeSize
      door.y2 = door.y
    
  } else if (door.t == 'right') {
      door.x = (door.c-1)*w - strokeSize/2
  door.y = (door.r-1)*w
    
    
    door.x1 = door.x + w
      door.y1 = door.y + strokeSize
      door.x2 = door.x + w
      door.y2 = door.y + w - strokeSize
  } else if (door.t == 'bottom') {
      door.x = (door.c-1)*w
  door.y = (door.r-1)*w - strokeSize/2
    
      door.x1 = door.x + w - strokeSize
      door.y1 = door.y + w
      door.x2 = door.x + strokeSize
      door.y2 = door.y + w
  } else if (door.t == 'left') {
      door.x = (door.c-1)*w + strokeSize/2
  door.y = (door.r-1)*w
    
    door.x1 = door.x 
      door.y1 = door.y + w - strokeSize
      door.x2 = door.x
      door.y2 = door.y + strokeSize
  }
  
    line(door.x1, door.y1, door.x2, door.y2);

if (doorCollision(player.x, player.y, player.s, door.x1, door.y1, door.x2, door.y2, strokeSize/2) && !drawKey) {
screen = 3;
  genMaze = true;
  score++;
  sfx.complete.play()
}

    
} 

function doorCollision(x, y, s, x1, y1, x2, y2, w) {
  //checks if line is vertical
  if (x1 == x2) {
    //checks which y value of line is greater than the other
    if (y1 > y2) {
      //checks if the square is touching the line by checking if its x value is touching the right side or its x plus size value is touchin the left side, and one of its corners is within the boundaries of the line
      if (x + s >= x1 - w / 2 && x <= x1 + w / 2 && y + s >= y2 && y <= y1) {
        //checks which side of the line the square is on, and disables the corresponding direction
        if (x < x1 - w / 2) {
          direction[1] = true;
          // print(x1)
        } else if (x + s > x1 + w / 2) {
          direction[3] = true;
        }
        return true;
      }
    } else if (y2 > y1) {
      //checks if the square is touching the line
      if (x + s >= x1 - w / 2 && x <= x1 + w / 2 && y + s >= y1 && y <= y2) {
        //checks which side of the line the square is on, and disables the corresponding direction
        if (x < x1 - w / 2) {
          direction[1] = true;
        } else if (x + s > x1 + w / 2) {
          direction[3] = true;
        }
        return true;
      }
    }
    //checks if line is horizontal
  } else if (y1 == y2) {
    //checks which x value of line is greater than the other
    if (x1 > x2) {
      //checks if the square is touching the line
      if (y + s >= y1 - w / 2 && y <= y1 + w / 2 && x + s >= x2 && x <= x1) {
        //checks which side of the line the square is on, and disables the corresponding direction
        if (y < y1 - w / 2) {
          direction[2] = true;
        } else if (y + s > y1 + w / 2) {
          direction[0] = true;
        }
        return true;
      }
    } else if (x2 > x1) {
      //checks if the square is touching the line
      if (y + s >= y1 - w / 2 && y <= y1 + w / 2 && x + s >= x1 && x <= x2) {
        //checks which side of the line the square is on, and disables the corresponding direction
        if (y < y1 - w / 2) {
          direction[2] = true;
        } else if (y + s > y1 + w / 2) {
          direction[0] = true;
        }
        return true;
      }
    }

  }


}