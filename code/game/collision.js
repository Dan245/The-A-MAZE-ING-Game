var touchingLine = false;
var direction = [false, false, false, false];

// checks if square is touching any line
function lineTouch() {
  //resets the direction booleans (these determine if the player can move in a certain direction or not, false means they can)
  direction = [false, false, false, false];
  //var cw = width / 12;
  //go through every line of every cell on the grid (4 lines per cell)
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      for (var count = 0; count < grid[index(i, j)].walls.length; count++) {
        //print(grid[index(i, j)].walls[count]);
        //get the 0,0 coordinate for this particular cell
        var lx = i * w;
        var ly = j * w;
        //check if the line is displayed or not (if not the player should be able to pass through it)
        if (grid[index(i, j)].walls[count]) {


          //checks what type of line it is (top, right bottom, left), and runs the squarelineCollision function with the appropriate x and y values for the line
          if (count == 0) {

            squareLineCollision(player.x, player.y, player.s, lx, ly, lx + w, ly, strokeSize);





          } else if (count == 1) {
            squareLineCollision(player.x, player.y, player.s, lx + w, ly, lx + w, ly + w, strokeSize);



          } else if (count == 2) {
            squareLineCollision(player.x, player.y, player.s, lx + w, ly + w, lx, ly + w, strokeSize);




          } else if (count == 3) {
            squareLineCollision(player.x, player.y, player.s, lx, ly + w, lx, ly, strokeSize);


          }
        }
      }
    }
  }
  //after all the lines have been checked, if any of the directions have been disabled, return true, else return false
  if (direction[0] || direction[1] || direction[2] || direction[3]) {
    return true;
  } else {
    return false;
  }
}




//checks each line to see if the square is touching it
function squareLineCollision(x, y, s, x1, y1, x2, y2, w) {
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

       // if (x + s > x1 + w / 2 || x < x1 - w / 2) {
        //  if (y + s > y1) {
       //     direction[0] = true;
        //  } else if (y < y2) {
       //     direction[2] = true;
       //   }
       // }


        //return true;
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

     //   if (x + s > x1 + w / 2 || x < x1 - w / 2) {
      //    if (y + s > y2) {
       //     direction[0] = true;
      //    } else if (y < y1) {
      //      direction[2] = true;
       //   }
      //  }
        //return true;
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



        //return true;
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


          //return true;
       // }
      }

    }

  }
}

function touchingKey() {
  if (dist(player.x + player.s / 2, player.y + player.s / 2, mrKey.x + mrKey.w / 2, mrKey.y + mrKey.h / 2) <= mrKey.w / 2 + player.w / 2 || dist(player.x + player.s / 2, player.y + player.s / 2, mrKey.x + mrKey.w / 2, mrKey.y + mrKey.h / 2) <= mrKey.h / 2 + player.s / 2) {
    if (drawKey) {
      sfx.collect.play()
    }
    drawKey = false;
  } else {
    return false;
  }
}