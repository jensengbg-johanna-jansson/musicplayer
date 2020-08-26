let audioFiles = document.getElementsByTagName('audio');

let togglePlayPause = () => {
    let playButton = document.querySelector('.play');
    let pauseButton = document.querySelector('.pause');

    if(playButton.classList.contains('hidden')) {
        playButton.classList.remove('hidden');
        pauseButton.classList.add('hidden');
    } else {
        pauseButton.classList.remove('hidden');
        playButton.classList.add('hidden');
    }
}

let songTitle = (currentTrack) => {
    let songTitles = ['Energy', 'Happy Rock', 'Hip Jazz'];
    currentSongTitle = songTitles[currentTrack];

    document.querySelector('.song__title').innerText = currentSongTitle;
}

let playTrack = () => {
    let currentTrack = document.querySelector('.songID').innerText;
    audioFiles[currentTrack].play();
    togglePlayPause();
}

let pauseTrack = () => {
    let currentTrack = document.querySelector('.songID').innerText;
    audioFiles[currentTrack].pause();
    togglePlayPause();
}

let nextTrack = () => {
    let trackIdentifier = document.querySelector('.songID');
    let currentTrack = parseInt(trackIdentifier.innerText);

    let newTrack = currentTrack + 1;
    if(newTrack <= audioFiles.length - 1) {
        let playButton = document.querySelector('.play');

        audioFiles[currentTrack].pause();
        if(playButton.classList.contains('hidden')) {
            togglePlayPause();
        }
        trackIdentifier.innerText = newTrack;
        songTitle(newTrack);
    } else {
        let msg = document.querySelector('.next__btn');
        msg.classList.remove('hidden');
        document.querySelector('.noTracksMsg').addEventListener("webkitAnimationEnd", function () {
            msg.classList.add('hidden');
        });

        console.log('You have reached the last track');
    }
}

let prevTrack = () => {
    let trackIdentifier = document.querySelector('.songID');
    let currentTrack = parseInt(trackIdentifier.innerText);

    let newTrack = currentTrack - 1;
    if(newTrack >= 0) {
        let playButton = document.querySelector('.play');

        audioFiles[currentTrack].pause();
        if(playButton.classList.contains('hidden')) {
            togglePlayPause();
        }
        trackIdentifier.innerText = newTrack;
        songTitle(newTrack);
    } else {
        let msg = document.querySelector('.back__btn');
        msg.classList.remove('hidden');
        document.querySelector('.noTracksMsg').addEventListener("webkitAnimationEnd", function () {
            msg.classList.add('hidden');
        });

        console.log('You have reached the first track');
    }
}

songTitle('0');

document.querySelector('.play').addEventListener('click', playTrack);
document.querySelector('.pause').addEventListener('click', pauseTrack);
document.querySelector('.forward').addEventListener('click', nextTrack);
document.querySelector('.back').addEventListener('click', prevTrack);