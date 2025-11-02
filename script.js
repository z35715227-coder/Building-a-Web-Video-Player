// 1. Get DOM Elements
const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const timeDisplay = document.getElementById('timeDisplay');

// Helper function to format seconds into M:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}

// 2. Play/Pause Functionality
playPauseBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = '⏸️ Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶️ Play';
    }
});

// 3. Update Progress Bar and Time Display
video.addEventListener('timeupdate', () => {
    // Update progress bar
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.value = percentage;

    // Update time display
    const currentTimeFormatted = formatTime(video.currentTime);
    const durationFormatted = formatTime(video.duration);
    timeDisplay.textContent = `${currentTimeFormatted} / ${durationFormatted}`;
});

// 4. Seek Functionality (Jump to a new time)
progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * video.duration;
    video.currentTime = time;
});
