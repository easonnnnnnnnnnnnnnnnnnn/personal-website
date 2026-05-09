const lens = document.getElementById('lens');
const zh = document.querySelector('.headline .zh');
const root = document.documentElement;

function updateLens(x, y) {
  lens.style.left = x + 'px';
  lens.style.top = y + 'px';

  const rect = zh.getBoundingClientRect();
  const localX = x - rect.left;
  const localY = y - rect.top;
  zh.style.setProperty('--mx', localX + 'px');
  zh.style.setProperty('--my', localY + 'px');

  const size = parseFloat(getComputedStyle(root).getPropertyValue('--lens-size'));
  zh.style.setProperty('--lens-radius', (size / 2) + 'px');
}

function hideLens() {
  lens.classList.remove('visible');
  zh.style.setProperty('--mx', '-9999px');
  zh.style.setProperty('--my', '-9999px');
}

window.addEventListener('mousemove', (e) => {
  lens.classList.add('visible');
  updateLens(e.clientX, e.clientY);
});

window.addEventListener('mouseleave', hideLens);

window.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  if (!t) return;
  lens.classList.add('visible');
  updateLens(t.clientX, t.clientY);
}, { passive: true });

window.addEventListener('touchend', hideLens);
