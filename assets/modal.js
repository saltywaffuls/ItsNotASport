const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalVideo = document.getElementById('modal-video');
const modalDescription = document.getElementById('modal-description');
const learnMoreBtn = document.querySelector('.learn-more-btn');

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    console.log('Project clicked:', project.dataset.title);

    modalTitle.textContent = project.dataset.title;
    modalVideo.src = project.dataset.video;
    modalDescription.textContent = project.dataset.description;

    if (project.dataset.link) {
      learnMoreBtn.href = project.dataset.link;
      learnMoreBtn.style.display = 'inline-block';
    } else {
      learnMoreBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
  });
});

function closeModal() {
  modal.style.display = 'none';
  modalVideo.src = '';
}
