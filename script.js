const lens = document.getElementById('lens');
const lensText = document.getElementById('lensText');
const root = document.documentElement;

const MAX_TILT = 12;

function moveLens(x, y) {
  lens.style.left = x + 'px';
  lens.style.top = y + 'px';

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const tx = vw / 2 - x;
  const ty = vh / 2 - y;
  lensText.style.setProperty('--tx', tx + 'px');
  lensText.style.setProperty('--ty', ty + 'px');

  const ry = ((x - vw / 2) / (vw / 2)) * MAX_TILT;
  const rx = -((y - vh / 2) / (vh / 2)) * MAX_TILT;
  root.style.setProperty('--ry', ry + 'deg');
  root.style.setProperty('--rx', rx + 'deg');
}

function resetTilt() {
  root.style.setProperty('--ry', '0deg');
  root.style.setProperty('--rx', '0deg');
}

function showLens() { lens.classList.add('visible'); }
function hideLens() {
  lens.classList.remove('visible');
  resetTilt();
}

window.addEventListener('mousemove', (e) => {
  showLens();
  moveLens(e.clientX, e.clientY);
});

window.addEventListener('mouseleave', hideLens);
window.addEventListener('blur', hideLens);

window.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  if (!t) return;
  showLens();
  moveLens(t.clientX, t.clientY);
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  if (!t) return;
  moveLens(t.clientX, t.clientY);
}, { passive: true });

window.addEventListener('touchend', hideLens);
