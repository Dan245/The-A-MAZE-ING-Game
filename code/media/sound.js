var music = {
  lobby: null,
  game: null,
  
}

var playing = false;
var playing2 = false;

var sfx = {
  collect: null,
  complete: null,
  death: null,
  ping: null
}

var volume = {
  master: null,
  music: null,
  sfx: null
}

function volumeControl() {
  volume.master = op.masterVol.value()/100
  volume.music = op.music.value()/100*volume.master
  volume.sfx = op.sfx.value()/100*volume.master
  
  music.lobby.setVolume(volume.music)
  music.game.setVolume(volume.music)
  
  sfx.collect.setVolume(volume.sfx)
  sfx.complete.setVolume(volume.sfx)
  sfx.death.setVolume(volume.sfx)
  sfx.ping.setVolume(volume.sfx)
  
}

function musicSound() {
  if ((screen != 3 && screen != 2 && !pausePlay.paused) && screen != 4 && !playing) {
    music.lobby.loop()
    playing = true;
  } else if (screen == 3 || (screen == 2 && pausePlay.paused) || screen == 4) {
    music.lobby.stop()
    playing = false;
  }
  
  if ((screen == 3 || (screen == 2 && pausePlay.paused)) && !playing2) {
    music.game.loop()
    playing2 = true;
  } else if (screen != 3 && (screen != 2 && !pausePlay.paused)) {
    music.game.stop()
   playing2 = false;
  }
}