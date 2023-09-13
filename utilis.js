import menuArray from './data.js';
const paymentForm = document.getElementById("payment_form");
const menuListHtml = [];
const CheckOutCart = [];
// get menu items from data.js

function getMenu(){
    menuArray.forEach((item) => {
        const {name, ingredients, price, emoji} = item;
                menuListHtml.push(  `<div class="menu" id="menu">
                    <div class="menu_flex_div">
                        <img src="${emoji}" class="food_image">
                        <div class="menu_item">
                            <h3 class="menu_item_name">${name}</h3>
                            <p class="menu_item_description">${ingredients}</p>
                            <p class="menu_item_price">$ ${price}</p>
                        </div>
                    </div>
                    <button class="add_to_cart_btn" id="add_to_cart_btn" data-item=${name}>+</button>
                </div>
                `)
            
    });
    return menuListHtml.join("");
}

function addToCartBtnClick(itemName){

    const itemNameObj = menuArray.filter( item => item.name === itemName)[0];
    
    CheckOutCart.push(itemNameObj);

    checkOut();

}

function handleRemoveClick(itemId){
    CheckOutCart.splice(itemId, 1);
    checkOut();
}

function handlePaymentClick(){
    paymentForm.style.display = "block";

}

function checkOut(){
    if(CheckOutCart.length){
        let orderSummary = 
        `<div class="order">
         <h3 class="order_section">Your Order</h3>`

    let total  = 0;

    CheckOutCart.forEach((menu, index)=>{
        orderSummary += `<div class="order_summary"> 
            <h3> ${menu.name}</h3>
            <button class="remove_order_btn" id="remove_order_btn" data-remove=${index}> Remove </button>
            <p>  $${menu.price} </p>
        </div>`
        total += menu.price;

    })
    orderSummary += `<div class="order_total">
                        <h3> Total Price: </h3>
                        <p> $${total} </p>
                        </div>
                        <button class="complete_order" id="complete_order_btn"> Complete Order </button>
                        </div>`
    document.getElementById("order").innerHTML = orderSummary;

    }else {
        order.innerHTML = '';
    }
}

export { getMenu, addToCartBtnClick, handleRemoveClick, handlePaymentClick };