//makes class constructor
class Enemy {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.speed = null;
    this.newSpot = true;
    this.desto = [null, null]
    this.count = 0;
    this.delay = 0
  }
}
// stores necessary enemy values
var enemy = {
  n: null,
  image: null
}
// makes array to store each enemy
var enemies = [];



// this spawns the enemies
function spawnEnemies() {
  //pick a random number of enemies to spawn, based on their score
  enemies = [];
  enemy.n = floor(random(7+score*2, 15+score*2))
  
  // for every enemy, pick a random grid location and arrange those values in an Enemy class, then store that new Enemy in the enemies grid
  for (var count = 0; count < enemy.n; count++) {
    var newBoi = new Enemy(floor(random(0, grid.length/cols))*w + width / 100/2 + w/2 - width / 12 / 4 / 2, floor(random(0, grid.length/rows))*w  + height / 100/2 + w/2 - height / 12 / 4 / 2, height / 12 / 4)
    

    

    enemies.push(newBoi)
    
        while (dist(player.x + player.s/2, player.y + player.s /2, enemies[count].x + enemies[count].s/2, enemies[count].y + enemies[count].s/2) <= w*2) {
      enemies[count].x = floor(random(0, grid.length/cols))*w + width / 100/2 + w/2 - width / 12 / 4 / 2
      enemies[count].y = floor(random(0, grid.length/rows))*w  + height / 100/2 + w/2 - height / 12 / 4 / 2;
    }
    
    enemies[count].desto[0] = enemies[count].x
    enemies[count].desto[1] = enemies[count].y
    enemies[count].count = 0;
    enemies[count].delay = 0;
  //  print(enemies[count].x)
    //print(enemies[count].y)
  }
//  print(enemy.n);
 // print(enemies.length)
}

// draws the enemies
function drawEnemies() {

  

  
  for (var count = 0; count < enemies.length; count++) {
    

    if (dist(enemies[count].x, enemies[count].y, enemies[count].desto[0], enemies[count].desto[1]) < 1) {
      enemies[count].newSpot = true;
    } else {
      enemies[count].newSpot = false;
}



 

if  (!pausePlay.paused) {
 if (enemies[count].count >= enemies[count].delay) {   
    if (enemies[count].x > enemies[count].desto[0] && enemies[count].speed > 0) {
      enemies[count].speed = enemies[count].speed*-1
    } else if (enemies[count].x < enemies[count].desto[0] && enemies[count].speed < 0) {
      enemies[count].speed = enemies[count].speed*-1
    }
    
    enemies[count].x += enemies[count].speed
    
        if (enemies[count].y > enemies[count].desto[1] && enemies[count].speed > 0) {
      enemies[count].speed = enemies[count].speed*-1
    } else if (enemies[count].y < enemies[count].desto[1] && enemies[count].speed < 0) {
      enemies[count].speed = enemies[count].speed*-1
    }
    
    enemies[count].y += enemies[count].speed
    
  }
}
    image(enemy.image, enemies[count].x, enemies[count].y, enemies[count].s, enemies[count].s);
    
    
    if (enemies[count].count >= enemies[count].delay) {
        if (enemies[count].newSpot || touchingEdge(enemies[count].x, enemies[count].y, enemies[count].s, count)) {
        enemies[count].desto[0] = enemies[count].x + random(-w*2, w*2)
    enemies[count].desto[1] = enemies[count].y + random(-w*2, w*2)
      
      enemies[count].speed = dist(enemies[count].x, enemies[count].y, enemies[count].desto[0], enemies[count].desto[1])/100
          enemies[count].count = 0;
          enemies[count].delay = delay(random(1, 3))
      
    }
    }  else {
    enemies[count].count++;
  }
  }

}

function delay(secs) {
  return fps * secs;
  
  
}

function touchingEdge(x, y, s, count) {
     if (y <= 0 + strokeSize / 2) {
    enemies[count].y = 0 + strokeSize / 2;
  }
    
    if (y >= height - s - strokeSize / 2) {
    enemies[count].y = height - s - strokeSize / 2
  }
  
  if (x >= width - s - strokeSize / 2) {
    enemies[count].x = width - s - strokeSize / 2
  }
  
  if (x <= 0 + strokeSize / 2) {
    enemies[count].x = 0 + strokeSize / 2;
  }
  
  if (x != enemies[count].x || y != enemies[count].y) {
    return true;
  }
  
  return false;
}

function dead() {
 // print('hello')
  for (var count = 0; count < enemies.length; count++) {
    //print('whats good')
    if (player.x + player.s >= enemies[count].x && player.x <= enemies[count].x + enemies[count].s && player.y + player.s >= enemies[count].y && player.y <= enemies[count].y + enemies[count].s) {
      if (score > highscore) {
        highscore = score;
      }
      screen = 4;
      sfx.death.play();
    }
  }
}