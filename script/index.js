let dish;
let mainDish;
let drink;
let chosedDishPrice;
let chosedMainDish;
let chosedMainDishPrice;
let chosedDrink;
let chosedDrinkPrice;
let checkOutValue;

function chosedOption(element) {
  dish = document.querySelector(".menu .chosed");
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
  document.querySelector(".main").classList.add("noScroll");
  // document.querySelector(".main").style.display = "none";
  document.querySelector(".checkOut").classList.remove("hidden");
  chosedDish = document.querySelector(".menu .chosed .chosedDish").innerHTML;
  chosedDishPrice = Number(
    document.querySelector(".menu .chosed .value").innerHTML
  );
  chosedMainDish = document.querySelector(
    ".menu-main .chosed .chosedDish"
  ).innerHTML;
  chosedMainDishPrice = Number(
    document.querySelector(".menu-main .chosed .value").innerHTML
  );
  chosedDrink = document.querySelector(
    ".menu-drink .chosed .chosedDish"
  ).innerHTML;
  chosedDrinkPrice = Number(
    document.querySelector(".menu-drink .chosed .value").innerHTML
  );
  checkOutValue = Number(
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
}

function makeOrder() {
  let url = "https://wa.me/+5547988608094";
  let message = `?text=Olá, gostaria de fazer o pedido:%0a- Entrada: ${chosedDish}%0a- Prato Principal: ${chosedMainDish}%0a- Bebida: ${chosedDrink}%0aTotal: ${checkOutValue.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}`;
  document.querySelector(".link").href=`${url}${message}`

}
function cancel() {
  document.querySelector(".checkOut").classList.add("hidden");
  document.querySelector(".main").classList.remove("blur");
  dish.classList.remove("chosed");
  mainDish.classList.remove("chosed");
  drink.classList.remove("chosed");
}
