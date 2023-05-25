// Seleziona tutti gli elementi li con un menu a tendina
var dropdownItems = document.querySelectorAll('nav ul li');

// Aggiungi un gestore di eventi a ciascun elemento li
dropdownItems.forEach(function(item) {
  // Verifica se l'elemento li ha un menu a tendina
  if (item.querySelector('.dropdown')) {
    // Aggiungi un gestore di eventi per passare il cursore sopra l'elemento li
    item.addEventListener('mouseover', function() {
      // Mostra il menu a tendina
      item.querySelector('.dropdown').style.display = 'block';
    });

    // Aggiungi un gestore di eventi per spostare il cursore fuori dall'elemento li
    item.addEventListener('mouseout', function() {
      // Nascondi il menu a tendina
      item.querySelector('.dropdown').style.display = 'none';
    });
  }
});
