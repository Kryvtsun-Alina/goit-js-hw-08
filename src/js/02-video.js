import Player from '@vimeo/player';
const videoElement = document.querySelector("#vimeo-player");
const player = new Player(videoElement);
const onTimeupdate = function(data) {
   const currentTime = data.seconds;
   console.log('Оновлення часу відтворення:', currentTime);
   localStorage.setItem('videoplayer-current-time', currentTime)
};

player.on('timeupdate', onTimeupdate);
