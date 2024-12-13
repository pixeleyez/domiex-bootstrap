document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const skipBackwardButton = document.getElementById('skip-backward');
    const skipForwardButton = document.getElementById('skip-forward');
    const muteButton = document.getElementById('mute');
    const volumeRange = document.getElementById('volume-range');
    const progressBar = document.getElementById('progress-bar').children[0];
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const volumeIcon = document.getElementById('volume-icon');

    let isPlaying = false;
    let isMuted = false;

    // Update the duration text when the metadata is loaded
    audio.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(audio.duration);
    });

    // Update current time and progress bar during playback
    audio.addEventListener('timeupdate', function() {
        const currentTime = audio.currentTime;
        currentTimeDisplay.textContent = formatTime(currentTime);
        progressBar.style.width = (currentTime / audio.duration) * 100 + '%';
    });

    // Play / Pause functionality
    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playPauseButton.querySelector('i').classList.replace('ri-pause-line', 'ri-play-line');
        } else {
            audio.play();
            playPauseButton.querySelector('i').classList.replace('ri-play-line', 'ri-pause-line');
        }
        isPlaying = !isPlaying;
    });

    // Skip backward 10 seconds
    skipBackwardButton.addEventListener('click', function() {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    });

    // Skip forward 10 seconds
    skipForwardButton.addEventListener('click', function() {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    });

    // Toggle mute functionality
    muteButton.addEventListener('click', function() {
        isMuted = !isMuted;
        audio.muted = isMuted;
        if (isMuted) {
            volumeIcon.classList.replace('ri-volume-up-line', 'ri-volume-mute-line');
            volumeRange.value = 0;
        } else {
            volumeIcon.classList.replace('ri-volume-mute-line', 'ri-volume-up-line');
            volumeRange.value = 50;  // Restore to default value (can be updated dynamically)
        }
    });

    // Update volume based on slider
    volumeRange.addEventListener('input', function() {
        audio.volume = volumeRange.value / 100;
        if (volumeRange.value == 0) {
            isMuted = true;
            volumeIcon.classList.replace('ri-volume-up-line', 'ri-volume-mute-line');
        } else {
            isMuted = false;
            volumeIcon.classList.replace('ri-volume-mute-line', 'ri-volume-up-line');
        }
    });

    // Format time in minutes:seconds format
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});
