import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  duration: 61.857;
  percent: 1.049;
  seconds: 3.034;

  console.log();

  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const saveTime = localStorage.getItem('videoplayer-current-time');
const parseTime = JSON.parse(saveTime);

const currentSec = Math.round(saveTime);

console.log(`You stopped at ${currentSec}`);

player
  .setCurrentTime(parseTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));
