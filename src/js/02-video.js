import Player from '@vimeo/player';
const videoElement = document.querySelector("#vimeo-player");
const player = new Player(videoElement);
const onTimeupdate = function(data) {
   const currentTime = data.seconds;
   console.log('Оновлення часу відтворення:', currentTime);
   localStorage.setItem('videoplayer-current-time', currentTime)
};

player.on('timeupdate', onTimeupdate);

const savedTime = localStorage.getItem('videoplayer-current-time');
const seekTime = JSON.parse(savedTime);

player.setCurrentTime(seekTime).then(function(seconds) {
    console.log('Плеєр перемістився на час:', seconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('Час був менше 0 або більше тривалості відео');
            break;

        default:
            console.log('Сталася інша помилка:', error);
            break;
    }
});