function pauseVideo(videoId) {
    const video = document.getElementById(videoId);
    video.pause(); // Pauses the video
}
const videos = document.querySelectorAll('video');

        // Add event listeners to each video
        videos.forEach(video => {
            video.addEventListener('play', () => {
                // Pause all other videos when one is played
                videos.forEach(otherVideo => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });