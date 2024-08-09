

$(document).ready(function(){
    // this function will load all of our header and footer related files into our main HTML document
     $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
});




$(document).ready(function() {
    // Create arrays for each cart
    let cart1 = [];
    let cart2 = [];
    let cart3 = [];
    let cart4 = [];
    let cart5 = [];
    let cart6 = [];

    // Function to add a product to the cart and update display
    function addToCart(cart, product, cartDisplayId) {
        cart.push(product);
        alert(`${product.name} has been added to your cart!`);
        updateCartDisplay(cart, cartDisplayId);
    }

    // Function to update the cart display
    function updateCartDisplay(cart, cartDisplayId) {
        let cartDisplay = document.getElementById(cartDisplayId);
        if (!cartDisplay) {
            console.error(`Cart display element with ID ${cartDisplayId} not found.`);
            return; // Prevent further execution if the element is not found
        }
        cartDisplay.innerHTML = ''; // Clear existing content

        cart.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            cartDisplay.appendChild(listItem);
        });
    }

    // Add event listeners for each product's "Add to Cart" button
    $('#add-to-cart1').on('click', function() {
        let product = {
            name: $('#product-info1 h1').text(),
            price: $('#price1').text(),
            image: $('#product-image1 img').attr('src'),
        };
        addToCart(cart1, product, 'cart-display1');
    });

    $('#add-to-cart2').on('click', function() {
        let product = {
            name: $('#product-info2 h1').text(),
            price: $('#price2').text(),
            image: $('#product-image2 img').attr('src'),
        };
        addToCart(cart2, product, 'cart-display2');
    });

    $('#add-to-cart3').on('click', function() {
        let product = {
            name: $('#product-info3 h1').text(),
            price: $('#price3').text(),
            image: $('#product-image3 img').attr('src'),
        };
        addToCart(cart3, product, 'cart-display3');
    });

    $('#add-to-cart4').on('click', function() {
        let product = {
            name: $('#product-info4 h1').text(),
            price: $('#price4').text(),
            image: $('#product-image4 img').attr('src'),
        };
        addToCart(cart4, product, 'cart-display4');
    });

    $('#add-to-cart5').on('click', function() {
        let product = {
            name: $('#product-info5 h1').text(),
            price: $('#price5').text(),
            image: $('#product-image5 img').attr('src'),
        };
        addToCart(cart5, product, 'cart-display5');
    });

    $('#add-to-cart6').on('click', function() {
        let product = {
            name: $('#product-info6 h1').text(),
            price: $('#price6').text(),
            image: $('#product-image6 img').attr('src'),
        };
        addToCart(cart6, product, 'cart-display6');
    });
});




$(document).ready(function() {
    // Initialize cart from localStorage or create an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart!`);
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    $('#add-to-cart1').on('click', function() {
        let product = {
            name: $('#product-info1 h1').text(),
            price: $('#price1').text(),
            image: $('#product-image1 img').attr('src'),
        };
        addToCart(product);
    });

    // Add event listener for the Add to Cart button for the first product
    $('#add-to-cart2').on('click', function() {
        let product = {
            name: $('#product-info2 h1').text(),
            price: $('#price2').text(),
            image: $('#product-image2 img').attr('src'),
        };
        addToCart(product);
    });

    $('#add-to-cart3').on('click', function() {
        let product = {
            name: $('#product-info3 h1').text(),
            price: $('#price3').text(),
            image: $('#product-image3 img').attr('src'),
        };
        addToCart(product);
    });

    $('#add-to-cart4').on('click', function() {
        let product = {
            name: $('#product-info4 h1').text(),
            price: $('#price4').text(),
            image: $('#product-image4 img').attr('src'),
        };
        addToCart(product);
    });

    $('#add-to-cart5').on('click', function() {
        let product = {
            name: $('#product-info5 h1').text(),
            price: $('#price5').text(),
            image: $('#product-image5 img').attr('src'),
        };
        addToCart(product);
    });

    $('#add-to-cart6').on('click', function() {
        let product = {
            name: $('#product-info6 h1').text(),
            price: $('#price6').text(),
            image: $('#product-image6 img').attr('src'),
        };
        addToCart(product);
    });
});














document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalContainer.innerHTML = '';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            total += parseFloat(item.price.replace('$', '')); // Calculate total price
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
        cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    }
});

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    location.reload(); // Reload page to reflect changes
}