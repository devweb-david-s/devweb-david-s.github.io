// Liste des pages dans l'ordre de navigation
const pages = [
  "index.html",      // Accueil
  "a-propos.html",   // À propos de moi
  "cv.html",         // CV
  "projet.html",     // Projets
  "competence.html", // Compétences
  "contact.html"     // Contact
];

// Détecte le chemin actuel
let path = window.location.pathname;

// Récupère juste le nom du fichier
let currentPage = path.substring(path.lastIndexOf("/") + 1);

// Si on est à la racine sans fichier ("/"), on considère index.html
if (currentPage === "" || currentPage === "/") {
  currentPage = "index.html";
}

// Trouve l’index dans le tableau
let currentIndex = pages.indexOf(currentPage);



// Fonction pour construire un chemin absolu correct
function getPagePath(page) {
  return page === "index.html"
    ? "/index.html"
    : "/html/" + page;
}

// Fonction pratique pour attacher un listener si le bouton existe
function addClickListener(id, callback) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", callback);
  }
}

// Bouton "Page suivante"
addClickListener("nextPage", () => {
  if (currentIndex < pages.length - 1) { // pas de boucle
    window.location.href = getPagePath(pages[currentIndex + 1]);
  }
});

// Bouton "Page précédente"
addClickListener("prevPage", () => {
  if (currentIndex > 0) { // pas de boucle
    window.location.href = getPagePath(pages[currentIndex - 1]);
  }
});                         
