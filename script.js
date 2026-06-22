const products = [
    {
        id: 1,
        name: "Racing Jacket",
        price: 95.00,
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png"
    },
    {
        id: 2,
        name: "Rust-eze Bumper Ointment",
        price: 15.00,
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png" 
    },
    {
        id: 3,
        name: "Lightyear Racing Tires",
        price: 120.00,
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png"
    }
];

let count = 0;
const cartDisplay = document.getElementById('cart-count');
const productContainer = document.getElementById('product-container');

// 2. Function to render products dynamically
function displayProducts() {
    productContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="buy-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// 3. Handle Add to Cart clicks using Event Delegation
productContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('buy-btn')) {
        const button = event.target;
        
        // Update cart total
        count++;
        cartDisplay.textContent = count;

        // Feedback animation
        button.textContent = 'IN CART!';
        button.style.backgroundColor = 'gold';
        button.style.color = 'black';

        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#ff0000';
            button.style.color = 'white';
        }, 1000);
    }
});

// Initialize the page
displayProducts();