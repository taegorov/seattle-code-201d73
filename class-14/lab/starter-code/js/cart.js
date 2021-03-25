/* global Cart */
'use strict';
let button = document.createElement('button');
button.addEventListener ('click', removeItemFromCart);


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
// let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
  const tBodyElem = document.getElementsByName('tbody');
  tBodyElem.innerHTML = '';
  // const trElem = document.createElement('tr');
  // tBodyElem.appendChild(trElem);



// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tBodyElem = document.getElementsByName('tbody');

  // TODO: Iterate over the items IN the cart
  for (let i = 0; i < cart.items.length; i += 1) {
    let currentCartItem = cart.items[i];
  // TODO: Create a TR
  const trElem = document.createElement('tr');
  tBodyElem.appendChild(trElem);

  // TODO: Create a TD for the delete link, quantity,  and the item
  const tdElem1 = document.createElement('td');
  trElem.appendChild(tdElem1);

  // //DANGER - fix this. 'button' is defined at top of this doc
  tdElem1.appendChild(button);

  const tdElem2 = document.createElement('td');
  trElem.appendChild(tdElem2);
  // tdElem2.textContent = this.quantity;
  tdElem2.textContent = currentCartItem.quantity;


  const tdElem3 = document.createElement('td');
  trElem.appendChild(tdElem3);
  tdElem3.textContent = currentCartItem.product;

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  
  
  // TODO: Save the cart back to local storage
  
  
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
