onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const btn = document.getElementById('startButton');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
  btn.style.display = 'none';        // Butonu gizle
  container.style.display = 'flex';  // Çiçek ve yazıyı göster
});