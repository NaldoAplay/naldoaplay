// Configuração de vídeos do YouTube
// Substitua pelos IDs reais dos vídeos
const VIDEO_IDS = [
  "abcd1234", // Vídeo 1
  "efgh5678", // Vídeo 2
  "ijkl9012", // Vídeo 3
  "mnop3456"  // Vídeo 4
];

// Monta os vídeos na grid
const videoGrid = document.getElementById("videoGrid");
VIDEO_IDS.forEach(id => {
  const div = document.createElement("div");
  div.innerHTML = `<img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" width="100%">`;
  div.addEventListener("click", () => openVideo(id));
  videoGrid.appendChild(div);
});

// Modal vídeo
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");
function openVideo(id) {
  modal.style.display = "flex";
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
}
closeBtn.onclick = () => {
  modal.style.display = "none";
  iframe.src = "";
}
window.onclick = (e) => { if(e.target == modal) closeBtn.onclick(); };

// Navegação interna
document.querySelectorAll(".nav-bar button").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = document.getElementById(btn.dataset.section);
    window.scrollTo({top: section.offsetTop - 60, behavior: "smooth"});
  });
});
document.getElementById("homeLink").onclick = () => window.scrollTo({top:0,behavior:"smooth"});

// Rádio
const radioAudio = document.getElementById("radioAudio");
const radioBtn = document.getElementById("radioPlay");
let isPlaying = false;
radioBtn.onclick = () => {
  if(isPlaying){
    radioAudio.pause();
    radioBtn.textContent = "▶ NaldoA Play";
  } else {
    radioAudio.play();
    radioBtn.textContent = "⏸ Pause";
  }
  isPlaying = !isPlaying;
};

// Fundo interativo
const bg = document.querySelector(".background");
document.addEventListener("mousemove", e => {
  let moveX = (e.clientX / window.innerWidth - 0.5) * 20;
  let moveY = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});
