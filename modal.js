
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('experienciaModal');

// Función para pausar todos los videos en el modal
function pauseAllVideos() {
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
    });
}

if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Bloquea scroll
    });

    closeModalBtn.addEventListener('click', () => {
        pauseAllVideos(); // Pausar videos antes de cerrar
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Habilita scroll
    });

    modal.addEventListener('click', e => {
        if (e.target === modal) { 
            pauseAllVideos(); // Pausar videos antes de cerrar
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Habilita scroll
        }
    });
} else {
    console.error('modal.js: One or more elements not found', {openModalBtn, closeModalBtn, modal});
}