// theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// tiny typewriter effect
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
