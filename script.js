// Obtén el elemento de video
const video = document.getElementById('miVideo');

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