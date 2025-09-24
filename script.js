const popupEl = document.getElementById("popup");
const closeBtnEl = document.getElementById("closeBtn");
const sidebarEl = document.getElementById("sidebar");

// Fechar popup e mostrar barrinha
closeBtnEl.addEventListener("click", () => {
  popupEl.style.display = "none";
  sidebarEl.style.display = "block";
});

// Reabrir popup ao clicar na barrinha
sidebarEl.addEventListener("click", () => {
  popupEl.style.display = "block";
  sidebarEl.style.display = "none";
});
// Abrir popup
document.getElementById("sidebarBtn").addEventListener("click", function () {
  document.getElementById("popupForm").classList.add("active");
  document.getElementById("popupForm").style.display = "flex";
});

// Fechar popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupForm").classList.remove("active");
  setTimeout(() => {
    document.getElementById("popupForm").style.display = "none";
  }, 500);
});


// =====================
//     CARROSSEL
// =====================
let slides = document.querySelectorAll(".slide");
let indicadores = document.querySelectorAll(".indicadores span");
let indiceAtual = 0;

function mudarSlide(indice) {
  slides[indiceAtual].classList.remove("ativo");
  indicadores[indiceAtual].classList.remove("ativo");

  indiceAtual = indice;

  slides[indiceAtual].classList.add("ativo");
  indicadores[indiceAtual].classList.add("ativo");
}
