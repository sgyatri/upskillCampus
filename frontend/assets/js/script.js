/*let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}

function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        let cartList = document.getElementById('cart-items');
        let total = 0;

        cartList.innerHTML = '';
        cart.forEach((product) => {
            let li = document.createElement('li');
            li.textContent = `${product.item} - $${product.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += product.price;
        });

        document.getElementById('total').textContent = total.toFixed(2);
    }
}

if (document.getElementById('cart-items')) {
    loadCart();
}
*/

let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
    loadCart();  // Refresh cart after adding item
}

function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        let cartList = document.getElementById('cart-items');
        let total = 0;

        cartList.innerHTML = '';
        cart.forEach((product, index) => {
            let li = document.createElement('li');
            li.innerHTML = `
                ${product.item} - $${product.price.toFixed(2)}
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartList.appendChild(li);
            total += product.price;
        });

        document.getElementById('total').textContent = total.toFixed(2);
    }
}

// Function to Remove an Item from the Cart
function removeFromCart(index) {
    cart.splice(index, 1);  // Remove item at given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    loadCart();  // Reload the cart
}

// Load cart if cart-items element exists
if (document.getElementById('cart-items')) {
    loadCart();
}




  