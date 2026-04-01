// Substitui pelo URL real do teu CV Interativo
function botaosardinha() {
  window.location.href = "https://filippaantunes.github.io/CV-Interativo/"; 
}

function botaohistória() { window.location.href = "historia.html"; }
function botaogaleria() { window.location.href = "galeria.html"; }
function botaoreferencias() { window.location.href = "referencias.html"; }
function botaovoltar() { window.location.href = "index.html"; }

// Carrossel Responsivo 
let slideIndex = 0;
const slides = document.getElementById("slides");
const legendaEl = document.getElementById("legenda");
const legendas = [
   "Convento de Santos-o-Novo",
   "Forte de Santa Apolónia",
   "Museu Nacional do Azulejo",
   "Cemitério do Alto de São João",
   "Igreja e convento da Madre de Deus",
   "Palácio dos Marqueses de Niza"
];

// Garante que o total de slides é calculado corretamente
const totalSlides = slides ? slides.children.length : 0;

function muda(d) {
  if (!slides || !totalSlides) return; // Segurança se o carrossel não carregar

  // Cicla os slides (vão de 0 a totalSlides-1)
  slideIndex = (slideIndex + d + totalSlides) % totalSlides;
  
  // MÁGICA RESPONSIVA: Move 100% da largura do carrossel para a esquerda
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  
  // Atualiza a legenda se o elemento existir
  if (legendaEl) {
    legendaEl.textContent = legendas[slideIndex];
  }
}

// Inicia o carrossel automático a cada 3 segundos
setInterval(() => muda(1), 3000);
