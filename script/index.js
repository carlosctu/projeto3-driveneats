let dish;
let mainDish;
let drink;
let chosedDish;
let chosedMainDish;
let chosedDrink;

function chosedOption(element) {
  dish = document.querySelector(".menu .chosed");
  // console.log(dish);
  mainDish = document.querySelector(".menu-main .chosed");
  drink = document.querySelector(".menu-drink .chosed");

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

  let closeOrder = document.querySelector(".button button");

  if (dish && mainDish && drink) {
    closeOrder.classList.add("done");
    closeOrder.innerHTML = "Finalizar Pedido";
    closeOrder.disabled = false;
  }
}

function checkOut() {
  document.querySelector(".main").classList.add("blur");
  let teste = document.querySelector(".checkOut").classList.remove("hidden")
  let chosedDish = document.querySelector(
    ".menu .chosed .chosedDish"
  ).innerHTML;
  let chosedDishPrice = Number(
    document.querySelector(".menu .chosed .value").innerHTML
  );
  let chosedMainDish = document.querySelector(
    ".menu-main .chosed .chosedDish"
  ).innerHTML;
  let chosedMainDishPrice = Number(
    document.querySelector(".menu-main .chosed .value").innerHTML
  );
  let chosedDrink = document.querySelector(
    ".menu-drink .chosed .chosedDish"
  ).innerHTML;
  let chosedDrinkPrice = Number(
    document.querySelector(".menu-drink .chosed .value").innerHTML
  );
  let checkOutValue = Number(
    (chosedDrinkPrice + chosedMainDishPrice + chosedDishPrice).toFixed(2)
  );
  document.querySelector(".dishOrder .dishName").innerHTML = chosedDish;
  document.querySelector(".dishOrder .dishValue").innerHTML =
    chosedDishPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  document.querySelector(".mainDishOrder .dishName").innerHTML = chosedMainDish;
  document.querySelector(".mainDishOrder .dishValue").innerHTML =
    chosedMainDishPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  document.querySelector(".drinkOrder .dishName").innerHTML = chosedDrink;
  document.querySelector(".drinkOrder .dishValue").innerHTML =
    chosedDrinkPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  document.querySelector(".checkOut .totalValue").innerHTML =
    checkOutValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  // console.log(teste)
  // let nome = prompt("Qual é seu nome?")
  // let endereço = prompt("Qual é seu endereço?")
}
