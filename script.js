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


// Get the profile image element by id
const profileImage = document.getElementById('profileImage');

// Add click event listener to rotate the image
profileImage.addEventListener('click', function () {
  profileImage.style.transform = 'rotate(360deg)'; // Rotate the image by 360 degrees
  // Optionally, you can reset it after a short time for repeated clicks
  setTimeout(() => {
    profileImage.style.transform = 'rotate(0deg)';
  }, 600); // Reset after 600ms (duration of the rotation)
});


