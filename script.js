// Smooth scrolling effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hover effect for the profile image
const profileImage = document.querySelector('.profile-img');
profileImage.addEventListener('mouseenter', () => {
  profileImage.style.transform = 'scale(1.1)';
  profileImage.style.transition = 'transform 0.3s ease-in-out';
});

profileImage.addEventListener('mouseleave', () => {
  profileImage.style.transform = 'scale(1)';
  profileImage.style.transition = 'transform 0.3s ease-in-out';
});

// Fade-in effect when sections come into view
const sections = document.querySelectorAll('section');

const checkSectionVisibility = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.75) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkSectionVisibility);
window.addEventListener('load', checkSectionVisibility);

// Trigger initial check on page load
checkSectionVisibility();




