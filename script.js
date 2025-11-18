// theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// typewriter
const txt = "MS Bioinformatics · Researcher · Educator";
let i = 0;
const typeWriter = () => {
  if (i < txt.length) {
    document.querySelector('.typewriter').textContent = txt.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 80);
  }
};
window.addEventListener('load', typeWriter);

// mouse-move background orbs
document.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.orb');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  orbs[0].style.transform = `translate(${x * 60}px, ${y * 60}px)`;
  orbs[1].style.transform = `translate(${x * -60}px, ${y * -60}px)`;
  orbs[2].style.transform = `translate(${y * 40}px, ${x * -40}px)`;
});

// scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
