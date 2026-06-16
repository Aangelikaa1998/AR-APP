const startBtn = document.getElementById('startBtn');
const statusEl = document.getElementById('status');
const startScreen = document.getElementById('startScreen');
const toolbar = document.getElementById('toolbar');
const sceneEl = document.querySelector('a-scene');
const cameraEntity = document.getElementById('cameraEntity');
const screwdriverEntity = document.getElementById('screwdriverEntity');
let rotating = false;
let currentScale = 0.25;

function setStatus(txt) { statusEl.textContent = txt; }
function setScale(s) { currentScale = Math.max(0.08, Math.min(1.2, s)); cameraEntity.setAttribute('scale', `${currentScale} ${currentScale} ${currentScale}`); }
function reset() { rotating=false; cameraEntity.removeAttribute('animation'); cameraEntity.setAttribute('rotation','0 0 0'); setScale(0.25); }

startBtn.addEventListener('click', async () => {
  try {
    if (!window.isSecureContext) {
      setStatus('Błąd: kamera działa tylko przez HTTPS albo localhost. Nie otwieraj pliku index.html lokalnie.');
      return;
    }
    setStatus('Proszę o dostęp do kamery...');
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
    stream.getTracks().forEach(t => t.stop());
    setStatus('Uruchamiam AR...');
    await sceneEl.systems['mindar-image-system'].start();
    startScreen.classList.add('hidden');
    toolbar.classList.remove('hidden');
  } catch (err) {
    setStatus('Nie udało się uruchomić kamery/AR: ' + err.message);
  }
});

document.getElementById('btnRotate').addEventListener('click', () => {
  rotating = !rotating;
  if (rotating) cameraEntity.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 6000; easing: linear');
  else cameraEntity.removeAttribute('animation');
});
document.getElementById('btnZoomIn').addEventListener('click', () => setScale(currentScale + 0.05));
document.getElementById('btnZoomOut').addEventListener('click', () => setScale(currentScale - 0.05));
document.getElementById('btnReset').addEventListener('click', reset);
document.getElementById('btnNormal').addEventListener('click', reset);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
