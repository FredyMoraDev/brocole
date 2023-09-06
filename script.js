// Obtén el elemento de video
const video = document.getElementById('miVideo');
const playlistItems = document.querySelectorAll('.playlist li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            video.src = videoSrc;
            video.play();
        });
    });

// Personaliza los controles del reproductor
// Desactiva los controles nativos
video.addEventListener('click', togglePlay);

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}