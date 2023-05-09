var ovrly;

//creates the extra canvas layer
function overlaySetup() {
  ovrly = createGraphics(width, height);
    ovrly.background(0);
}

// draws a bunch of circles with varying degrees of stroke, erase hardness, and size, relative to the player to create a cool human flashlight effect (it limits the view of the maze)
function overlayDraw() { 
  image(ovrly, 0, 0);
    ovrly.background(0);
  
  
ovrly.strokeWeight(12)
  ovrly.erase(240, 127.5);

    ovrly.circle(player.x+player.s/2, player.y+player.s/2, 40);

  ovrly.noErase();
  
  ovrly.strokeWeight(15)
    ovrly.erase(63.75, 31.875)
  ovrly.circle(player.x+player.s/2, player.y+player.s/2, 60)
  ovrly.noErase()
  
    ovrly.strokeWeight(25)
    ovrly.erase(15.9375, 10)
  ovrly.circle(player.x+player.s/2, player.y+player.s/2, 100)
  ovrly.noErase()
}