
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('experienciaModal');

if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Bloquea scroll
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Habilita scroll
    });

    modal.addEventListener('click', e => {
        if (e.target === modal) { 
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Habilita scroll
        }
    });
} else {
    console.error('modal.js: One or more elements not found', {openModalBtn, closeModalBtn, modal});
}
