let dish;
let mainDish;
let drink;

function chosedOption(element) {
  dish = document.querySelector(".menu .chosed");
  mainDish = document.querySelector(".menu-main .chosed");
  drink = document.querySelector(".menu-drink .chosed");

  if (dish !== null && element.classList.contains("dish")) {
    dish.classList.remove("chosed");
  } else if (mainDish !== null && element.classList.contains("main-dish")) {
    mainDish.classList.remove("chosed");
  } else if (drink !== null && element.classList.contains("drink")) {
    drink.classList.remove("chosed");
  }

  element.classList.add("chosed");
  closeOrder();
}

function closeOrder() {
  dish = document.querySelector(".menu .chosed");
  mainDish = document.querySelector(".menu-main .chosed");
  drink = document.querySelector(".menu-drink .chosed");
  
  let closeOrder = document.querySelector(".button button")

  if (dish && mainDish && drink) {
    closeOrder.classList.add("done");
    closeOrder.innerHTML = "Finalizar Pedido"
    closeOrder.disabled = false
  }
}

function checkOut() {
    let nome = prompt("Qual é seu nome?")
    let endereço = prompt("Qual é seu endereço?")
    document.querySelector(".main").classList.add("blur")
}
