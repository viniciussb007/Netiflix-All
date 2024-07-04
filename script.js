// script.js
document.getElementById("searchBar").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".col");

  cards.forEach(function (card) {
    let title = card.querySelector(".card-title").textContent.toLowerCase();
    let text = card.querySelector(".card-text").textContent.toLowerCase();

    if (title.includes(filter) || text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

function addToCart() {
  document.getElementById("cart-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("cart-modal").style.display = "none";
}
