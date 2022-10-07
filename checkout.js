const vintageFiyat = 25.98;
const leviFiyat = 45.99;
const antiqueFiyat = 74.99;

const products = document.querySelector(".products");
const subTotal = document.querySelector("#cart-subtotal").lastElementChild;
const tax = 18 / 100;
const taxBox = document.querySelector("#cart-tax").lastElementChild;
const shipping = 10;
const shippingBox = document.querySelector("#cart-shipping").lastElementChild;
const total = document.querySelector("#cart-total").lastElementChild;
const hesapla = (e) => {
	//!
	//!  Subtotalı yazdırma
	let araToplam = 0;
	document
		.querySelectorAll(".product-line-price")
		.forEach((a) => (araToplam += +a.innerHTML));
	subTotal.innerHTML = araToplam.toFixed(2);
	//!
	//!  tax yüzde 18zi yazdırma
	taxBox.innerHTML = (subTotal.innerHTML * tax).toFixed(2);
	//!
	//!  shipping hesaplama
	shippingBox.innerHTML = subTotal.innerHTML == 0 ? 0 : shipping;
	//!
	//! total yazdırma
	total.innerHTML = (
		+subTotal.innerHTML +
		+taxBox.innerHTML +
		+shippingBox.innerHTML
	).toFixed(2);
};

products.addEventListener("click", (e) => {
	// console.log(e.target.classList);

	// * Artırma butonu
	if (e.target.classList.contains("plus")) {
		//!
		//! miktarı bir artırır
		e.target.previousElementSibling.innerHTML =
			+e.target.previousElementSibling.innerHTML + 1;
		//!
		//! artırma 10 dan fazla olmaz
		if (e.target.previousElementSibling.innerHTML > 10) {
			e.target.previousElementSibling.innerHTML = 10;
		}
		//!
		//!  Product totalı yazdırma
		e.target.parentElement.nextElementSibling.nextElementSibling.innerHTML = (
			+e.target.parentElement.previousElementSibling.firstElementChild
				.firstElementChild.innerHTML *
			+e.target.previousElementSibling.innerHTML
		).toFixed(2);
		hesapla(e);
	}

	// * Azaltma butonu
	if (e.target.classList.contains("minus")) {
		// console.log(e.target.classList);
		//!
		//! miktarı bir azaltır
		e.target.nextElementSibling.innerHTML =
			+e.target.nextElementSibling.innerHTML - 1;
		//!
		//! ürünü 1 in altına düşürse ürünü silme
		if (e.target.nextElementSibling.innerHTML < 1) {
			if (confirm("Kafan yerinde mi?") == true) {
				e.target.parentElement.parentElement.parentElement.remove();
			} else {
				e.target.nextElementSibling.innerHTML = 1;
			}
		}
		//!
		//! Product totalı yazdırma
		e.target.parentElement.nextElementSibling.nextElementSibling.innerHTML = (
			+e.target.parentElement.previousElementSibling.firstElementChild
				.firstElementChild.innerHTML * +e.target.nextElementSibling.innerHTML
		).toFixed(2);
		hesapla(e);
	}

	//!
	//!  remove butonu
	if (e.target.classList.contains("remove-product")) {
		if (confirm("Kafan yerinde mi?") == true) {
			e.target.parentElement.parentElement.parentElement.remove();
		}
		hesapla(e);
	}
});

// // const taxRate = 0.18;
// // const shippingPrice = 15.0;

// window.addEventListener("load", () => {
// 	calculateCartTotal();
// 	//! set item to LocalStorage
// 	// localStorage.setItem("taxRate", taxRate);
// 	// localStorage.setItem("shippingPrice", shippingPrice);

// 	//! set item to SessionStorage
// 	//  sessionStorage.setItem("taxRate", taxRate);
// 	//  sessionStorage.setItem("shippingPrice", shippingPrice);
// });

// //*****  Capturing method  *****//
// let productsDiv = document.querySelector(".products");
// productsDiv.addEventListener("click", (event) => {
// 	if (event.target.className == "minus") {
// 		let quantityP = event.target.nextElementSibling;
// 		if (quantityP.innerText > 1) {
// 			quantityP.innerText--;
// 			//!parameter == selected productInfoDiv
// 			calculateProductAndCartTotal(event.target.parentElement.parentElement);
// 		} else {
// 			if (confirm("Product will be deleted?")) {
// 				event.target.parentElement.parentElement.parentElement.remove();
// 				calculateCartTotal();
// 			}
// 		}
// 		// console.log(typeof event.target.nextElementSibling.innerText);
// 		// console.log("minus button clicked");
// 	} else if (event.target.classList.contains("plus")) {
// 		event.target.previousElementSibling.innerText++;
// 		//!parameter == selected productInfoDiv
// 		calculateProductAndCartTotal(event.target.parentElement.parentElement);
// 		// console.log("plus button clicked");
// 	} else if (event.target.classList.contains("remove-product")) {
// 		if (confirm("Product will be deleted?")) {
// 			event.target.parentElement.parentElement.parentElement.remove();
// 			calculateCartTotal();
// 		}

// 		// console.log("remove button clicked");
// 	} else {
// 		// console.log("other element clicked");
// 	}
// });

// //*****  Calculate cart and product totals  *****//
// const calculateProductAndCartTotal = (productInfoDiv) => {
// 	//* Product calculation
// 	// console.log(productInfoDiv);
// 	let price = productInfoDiv.querySelector("strong").innerText;
// 	let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
// 	let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
// 	productTotalDiv.innerText = (price * quantity).toFixed(2);

// 	//* Cart calculation
// 	calculateCartTotal();
// };

// //* Calculate cart totals
// const calculateCartTotal = () => {
// 	//nodeList Div
// 	let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");
// 	// console.log(productsTotalPriceDivs);
// 	let subtotal = 0;
// 	productsTotalPriceDivs.forEach((eachProductTotalDiv) => {
// 		subtotal += parseFloat(eachProductTotalDiv.innerText);
// 	});
// 	console.log(subtotal);
// 	let taxPrice = subtotal * localStorage.getItem("taxRate");
// 	console.log(taxPrice);

// 	let shippingPrice =
// 		subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0;

// 	let cartTotal = subtotal + taxPrice + shippingPrice;

// 	document.querySelector("#cart-subtotal p:nth-child(2)").innerText =
// 		subtotal.toFixed(2);

// 	document.querySelector("#cart-tax p:nth-child(2)").innerText =
// 		taxPrice.toFixed(2);

// 	document.querySelector("#cart-shipping p:nth-child(2)").innerText =
// 		shippingPrice.toFixed(2);

// 	document.querySelector("#cart-total").lastElementChild.innerText =
// 		cartTotal.toFixed(2);
// };
