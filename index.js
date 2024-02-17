function openModal(cardNumber) {
  var modal = document.getElementById("myModal");
  var cardNumberElement = document.getElementById("card-heading");
  cardNumberElement.textContent = cardNumber;
  modal.style.transform = "translateY(-120%)"; // Move modal into view
  //   show overlay
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.transform = "translateY(100%)"; // Move modal out of view
  setTimeout(function () {
    modal.style.display = "block";
    overlay.style.display = "none";
  }, 300); // After 0.3s (duration of transition), hide modal
}
