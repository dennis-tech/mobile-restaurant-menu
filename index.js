import { getMenu, addToCartBtnClick, handleRemoveClick, handlePaymentClick } from '/utilis.js';

const paymentForm = document.getElementById("payment_form");
const order = document.getElementById("order");
const paymentFormData = document.getElementById("payment_form_data");


// listening for clicks on the body

document.addEventListener("click", function(e) {
    if(e.target.dataset.item){
        addToCartBtnClick(e.target.dataset.item);
    } else if(e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    } else if(e.target.id === "complete_order_btn"){
        handlePaymentClick();
    }
      
})

// order confirmation

paymentFormData.addEventListener("submit", function(e){
    const orderConfirmation = document.getElementById("order_confirmation");
    e.preventDefault();
    const paymentFormInfo = new FormData(paymentFormData);
    const name = paymentFormInfo.get("name");

    paymentForm.style.display = "none";
    orderConfirmation.style.display = "block";
    order.style.display = "none";

    orderConfirmation.innerHTML = `<h3> Thanks, ${name}! Your order is on its way! </h3>`


})

// render menu
document.getElementById("item").innerHTML = getMenu();
