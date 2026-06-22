// 1. Product Data
const products = [
    {
        id: 1,
        name: "Racing Jacket",
        price: 95.00,
        image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V30569s.jpg?im=Resize,width=750"
    },
    {
        id: 2,
        name: "Rust-eze Bumper Ointment",
        price: 15.00,
        image: "https://static.wikia.nocookie.net/pixar/images/0/02/Rust-eze2.jpg/revision/latest?cb=20101107021119" 
    },
    {
        id: 3,
        name: "Lightyear Racing Tires",
        price: 120.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5-DWVD5UMrChesJmEH1wELnnhAG6nZo7RQVmjbpUsCQNcB_NJ-rwXLM&s=10"
    },
    {
        id: 4,
        name: "Replica Piston Cup Trophy",
        price: 350.00,
        image: "https://d11unjture0ske.cloudfront.net/transparent_background_image.67d718f3-658b-4815-a112-053541fad6ae.b4ca3e11-33d1-461e-8ca2-91049d836a02.png"
    }
];

let cart = []; 
// ADD THESE TWO LINES BACK IN:
const cartDisplay = document.getElementById('cart-count');
const productContainer = document.getElementById('product-container');

// (Keep these exactly as you have them)
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalDisplay = document.getElementById('cart-total');
const cartSidebar = document.getElementById('cart-sidebar');
const cartStatusBtn = document.querySelector('.cart-status'); 
const closeCartBtn = document.getElementById('close-cart');

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

// 3. Handle Add to Cart clicks
productContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('buy-btn')) {
        const button = event.target;

        const productId = parseInt(button.getAttribute('data-id')); 
        const clickedProduct = products.find(p => p.id === productId);
        cart.push(clickedProduct);
        updateCartUI();
        
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

function updateCartUI() {
    cartDisplay.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty!</p>';
        cartTotalDisplay.textContent = '0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalDisplay.textContent = total.toFixed(2);
}

// 4. Sidebar Open/Close Logic
cartStatusBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Initialize the page
displayProducts();