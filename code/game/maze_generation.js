// this part I will admit, I followed a tutorial. But! Before you think less of me, I did write everything out by hand (or by key!), it wasn't a copy paste job. Also, I had to change soe stuff in order for it to fit my needs, and it's integration in the game meant I had to really understand how this works. I think I understand it, but I'm sure there's probably something thats flying over my head.

// the global variables needed
var cols, rows;
var w;
var grid = [];
var current;
var stack = [];
// this sets up a maze, is run every time a player beats a maze, and when they start the game
function setupMaze() {
  stack = [];
  grid = [];
  w = width / 12;
  cols = width / w;
  rows = height / w;

// this makes the grid, for every row, look at every collumn, and make a cell, and store it in the grid array
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

// starting point for maze gen
  current = grid[0];




}

// this draws the maze after its generated, it checks which lines should be visible and displays them
function drawMaze() {
    for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

// the cool part
function generateMaze() {

  // sets the current cell to visited
  current.visited = true;
 // current.highlight();

// checks if the current cell has any unvisited neighbors, if it does, pick a random one and set it to next. Then mark that cell as visited, push it into the stack (stack is used for backtracking when a cell has no neighbors, like leaving a breadcrumg trail), remove the walls in between current and next, and set the current cell to the next cell
  var next = current.checkNeighbors();
  if (next) {

    next.visited = true;

    stack.push(current);

    removeWalls(current, next);

    current = next;

  } else if (stack.length > 0) {
    //if a cell has no unvisited neighbors, keep backtracking along the trail you made until you find one with an unvisited neighbor (this will continue until you're back at the start, meaning all cells are visited). This method of generating mazes is called depth first search with recursive backtracking (I think)
    current = stack.pop();
  }
}

// the index function is a way of calculating a grid position on a 1d array, based on how the array was drawn (in this case for each row, draw every column). It'll return -1 if the index requested is outside the bounds of the grid (this is to stop it from drawing lines forever)
function index(i, j) {

  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

// the cell function
function Cell(i, j) {
  
  // stores th i(column), j (row) of the particular cell, and defaults it to not have been visited and all its walls are shown
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true]
  this.visited = false;

  // the check neighbors function grabs the index of the cells around it (not the diagonal adjacent cells), and checks if they've been visited. If it hasn't, it adds it to a list, then after all neighbors have been checked it picks a random one from that list and returns it, otherwise it returns nothing
  this.checkNeighbors = function() {

    var neighbors = [];

    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }



    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }

  };

  //highlight was used to check the current cell that the generator is on, useless for me because I generate the maze all at once. It draws a square at the current cell
  this.highlight = function() {
    var x = i * w;
    var y = j * w;

   noStroke();
    fill(0, 0, 255, 100);
    square(x, y, w);
  };
// the shoe function grabs the cell, and draws walls all around it, it then removes those walls depending on how the maze was generated
  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    var s = width / 100;
    strokeSize = s;
    stroke(0);
    strokeWeight(s)

    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
    if (this.visited) {
     // fill(155, 0 ,155);
     // noStroke();
     // square(i * w + s / 2, j * w + s / 2, w-15);

    }

  }

}

// the function remove walls checks where the next cell is in relation to the current, and removes the walls in between
function removeWalls(a, b) {

  var x = a.i - b.i
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}