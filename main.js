
const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('play', () => {
                videos.forEach(otherVideo => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });


const buttonLink = document.getElementById('button-link');

buttonLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  goToPage(); 
});

function goToPage() {
  window.location.href = "#";
}
