function changeLanguage(language) {
    var languageButton = document.getElementById('language-button');
    languageButton.textContent = language;
  }

  // Aggiungi questa parte solo se vuoi generare le carte dinamicamente
// Puoi ripetere questo codice per ogni carta che vuoi generare
const cardContainer = document.getElementById("card-container");

const card = document.createElement("div");
card.className = "polaroid-card";

const image = document.createElement("img");
image.src = "path_to_image.jpg";
image.alt = "Immagine Polaroid";
card.appendChild(image);

const caption = document.createElement("div");
caption.className = "caption";
caption.textContent = "Testo della scritta";
card.appendChild(caption);

cardContainer.appendChild(card);

 