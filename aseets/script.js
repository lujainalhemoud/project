const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const payment = document.getElementById("payment");
const coupon = document.getElementById("coupon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const paymentValue = payment.value.trim();
  const couponValue = coupon.value.trim();
}

if (usernameValue === "") {
  setErrorfor(username, "Username cannot be blank");
} else {
  setSuccessFor(Username);
}

if (emailValue === "") {
  setErrrorFor(email, "Email cannot be blank");
}

function setErrrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return; //.test(email)
}

// -----variables------//
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".cart-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overly");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".products-center");

//--------------- cart-------//
let cart = [];
// --------getting the products-----//
class products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products//
class UI {}

// local storage//
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new products();

  // get all products//
  products.getProducts() .then(data => console.log(data);
});



// product page//
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll (".shoe");
const gradients = document.querySelectorAll (".gradient");

function changeColor(){
  let primary = this.getAttribute(" primary");
  let color = this.getAttribute("color");
  let shoe = document.querySelector(".shoe [color]");
  console.log(color);
  sizes.forEach(size=> size.classList.remove("active"));

  this.classList.add("active");
  document.documentElement.setProperty("--prrimary",primary);
  shoes.forEach(s=>s.classList.remove("show"));

}
function changeSize(){
  sizes.forEach(size=> size.classList.remove("active"));
  this.classList.add("active");
}
sizes.forEach (size=>size.addEventListener("click",changeSize));
colors.forEach(c=> c.addEventListener("click",changeColor));

$(".gradientss div") .click(function()(
  $(".gradientss div").removeClass("active");
  $(this).addClass("active");
  $("body").css("background",$(this).attr("primary"));

));