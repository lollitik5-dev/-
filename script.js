
window.addEventListener("click", function(event) {

    let button = event.target;

    if (button.classList.contains("plus") ||
        button.classList.contains("minus")) {

        let card = button.closest(".product-card");
        let count = card.querySelector(".count");

        let value = Number(count.textContent);

        if (button.classList.contains("plus")) {
            value++;
        }

        if (button.classList.contains("minus") && value > 0) {
            value--;
        }

        count.textContent = value;

        updateCart();
    }
});


function updateCart() {

    let cards = document.querySelectorAll(".product-card");
    let cart = document.getElementById("cart-list");
    let total = 0;

    cart.innerHTML = "";

    cards.forEach(function(card) {

        let name = card.dataset.name;
        let price = Number(card.dataset.price);
        let count = Number(card.querySelector(".count").textContent);

        if (count > 0) {

            let item = document.createElement("li");

            item.textContent = name + " — " + count + " шт.";

            cart.appendChild(item);

            total += price * count;
        }
    });

    document.getElementById("total").textContent = total;
}
