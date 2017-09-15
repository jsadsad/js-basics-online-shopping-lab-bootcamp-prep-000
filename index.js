var cart = [];

function getCart() {
 return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 100);
 cart.push({[itemName]:itemPrice});
 console.log(`${itemName} has been added to your cart.`);

 return getCart();
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var resultArray =[];
    let i = 0;

    while (i < cart.length) {
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)[0];
      var price = itemAndPrice[item];

      resultArray.push(`${item} at \$${price}`);
      i++
    }
    switch
    console.log(`In your cart, you have ${resultArray.join(', ')}.`)
  }
}

function total() {
  let total = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      total += cart[i][itemName];
    }
  }
  return total;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  if (cardNumber != undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
