import Player from '@vimeo/player';
const player = new Player('vimeo-player');
player.on('timeupdate', function(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
  player.ready().then(function() {
    player.play();
  });
