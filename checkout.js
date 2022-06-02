const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    //!set item to LocalStorage
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    //!set item to SessionStorage
    // sessionStorage.setItem("taxRate", taxRate);
    // sessionStorage.setItem("shippingPrice", shippingPrice);
});

//*****Capturing method*****//

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event)=>{
    console.log(event.target);

});




