

// all the images (located in assets) are preloaded here, with all the different object vars
function preload() {
  
  player.defaultSprite =     loadImage('assets/sprites/player.png');
  player.hurtSprite = loadImage('assets/sprites/playerHurt.png');
  player.deadSprite = loadImage('assets/sprites/playerDead.png');
  
    arrow.forward = loadImage('assets/UI/forwardArrow.png');
  arrow.fPressed = loadImage('assets/UI/fArrowHigh.png');
  arrow.back = loadImage('assets/UI/backArrow.png');
  arrow.bPressed = loadImage('assets/UI/bArrowHigh.png');
  
  title.image = loadImage('assets/UI/title.png')
  
  play.regular = loadImage('assets/UI/Play Button.png')
  play.pressed = loadImage('assets/UI/PlayButtonPressed.png');
  
  instructions.image = loadImage('assets/UI/how2play.png');
  
  options.image = loadImage('assets/UI/Options.png')
  
  gameOver.image = loadImage('assets/UI/Game-Over.png');
  
  mainMenu.image = loadImage('assets/UI/Main-Menu.png')
  
  restart.image2 = loadImage('assets/UI/Play-Again.png');

  pausePlay.pause = loadImage('assets/UI/pause.png');
  pausePlay.play = loadImage('assets/UI/play.png');
  
  resume.image = loadImage('assets/UI/Resume.png');
  
  restart.image1 = loadImage('assets/UI/Restart.png')
  
  mrKey.image = loadImage('assets/sprites/key.png')
  
  enemy.image = loadImage('assets/sprites/enemy.png')
  
  
  music.lobby = loadSound('assets/sound/menu.mp3')
  music.game = loadSound('assets/sound/game.mp3')
  
  sfx.collect = loadSound('assets/sound/collect.mp3');
  sfx.complete = loadSound('assets/sound/score.mp3');
  sfx.ping = loadSound('assets/sound/ping.mp3');
  sfx.death = loadSound('assets/sound/death.mp3');
  
  
}