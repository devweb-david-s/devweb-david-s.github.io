/*aller en haut de page*/
document.addEventListener("DOMContentLoaded", () => {
  const btnRetour = document.getElementById("btn-retour-haut");
  const wrapper = document.getElementById("wrapper");

  if (btnRetour && wrapper) {
    btnRetour.addEventListener("click", () => {
      wrapper.scrollIntoView({ behavior: "smooth" });
    });
  }
});


/*agrandir image*/ 

document.querySelectorAll('.imageProjet').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('agrandie');
    });
});

