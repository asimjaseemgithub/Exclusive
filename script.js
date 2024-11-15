// Array for category data
const categories = [
    { image: 'image/Category-CellPhone.png', name: 'Phones' },
    { image: 'image/Category-Computer.png', name: 'Computers' },
    { image: 'image/Category-SmartWatch.png', name: 'Smart Watch' },
    { image: 'image/Category-Headphone.png', name: 'Headphones' },
    { image: 'image/Category-Gamepad (1).png', name: 'Gaming' },
    { image: 'image/Group 1000005941.png', name: 'Camera' },
];

// Function to render categories
function renderCategories() {
    const categoryList = document.querySelector('.Category-list');
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('Category-item');

        const img = document.createElement('img');
        img.src = category.image;

        const p = document.createElement('p');
        p.textContent = category.name;

        categoryItem.appendChild(img);
        categoryItem.appendChild(p);
        categoryList.appendChild(categoryItem);
    });
}

// Event listener for rendering categories
document.addEventListener('DOMContentLoaded', renderCategories);

// Fetch products from JSON and render them
document.addEventListener("DOMContentLoaded", () => {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            renderProducts(data);
            
            // Now check if .position-vector2 elements are in the DOM
            const vector2Elements = document.querySelectorAll('.position-vector2');
            console.log('Position-vector2 elements:', vector2Elements); // Should log the NodeList with items
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});

// Function to render products
function renderProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';  // Clear existing content

    products.forEach(product => {
        const productItem = document.createElement('a');
        productItem.classList.add('product-items');

        const roundImage = product.roundImage;

        // Define the specific titles for which we want to add a left margin
        const specialTitles = [
            "Breed Dry Dog Food",
          
          
        ];
        const isSpecialProduct = specialTitles.includes(product.title);

     
        const titleStyle = isSpecialProduct ? 'style="margin-top:-68px;"' : '';

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}"/>
            <div class="position-vector">
                <img src="${product.vector}" alt="Vector Icon"/>
            </div>
            <div class="position-vector2">
                <img src="${product.quickView}" alt="Quick View"/>
            </div>
            <div class="bottom-items">
                <h3 ${titleStyle}>${product.title}</h3>
                <ul>
                    <li>${product.price}</li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (3).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (3).svg" alt="Rating Star"/></li>
                    <li>(${product.ratings})</li>
                </ul>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;

        console.log(productItem.innerHTML);

        if (product.title === "Kids Electric Car" || product.title === "GP11 Shooter USB Gamepad") {
            productItem.innerHTML += `<button class="new-btn">New</button>`;
        }

        if (roundImage) {
            productItem.innerHTML += `
                <div class="round">
                    <img src="${roundImage}" class="rond-img" alt="Round Image"/>
                </div>
            `;
        }

        productGrid.appendChild(productItem);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.navlinks');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('is-active');
        });
    } else {
        console.error("Menu icon or navigation links not found.");
    }
});

// Show menu when menu icon is clicked
// Show menu when menu icon is clicked
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

// Show menu and close icon when menu icon is clicked
menuIcon.addEventListener('click', () => {
    menu.style.display = 'block';
    closeIcon.style.display = 'block'; // Show close icon
  // Hide menu icon to avoid duplicate icons
});

// Hide menu and show menu icon when close icon is clicked
closeIcon.addEventListener('click', () => {
    menu.style.display = 'none';
    closeIcon.style.display = 'none'; // Hide close icon
     // Show menu icon again
});



