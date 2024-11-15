
document.addEventListener("DOMContentLoaded", () => {
    fetch('product2.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderProducts(data);

            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');

            if (searchInput && searchButton) {
                searchButton.addEventListener('click', () => {
                    const query = searchInput.value.trim().toLowerCase();
                    const filteredProducts = data.filter(product => 
                        product.title.toLowerCase().includes(query) || 
                        (product.description && product.description.toLowerCase().includes(query))
                    );
                    renderProducts(filteredProducts);
                });

                searchInput.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        const query = searchInput.value.trim().toLowerCase();
                        const filteredProducts = data.filter(product => 
                            product.title.toLowerCase().includes(query) || 
                            (product.description && product.description.toLowerCase().includes(query))
                        );
                        renderProducts(filteredProducts);
                    }
                });
            } else {
                console.error("Search input or button not found in the DOM.");
            }
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});

function renderProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-items');

        const oldPrice = product.oldPrice ? product.oldPrice : null;
        const roundImage = product.roundImage;
        const discount = product.discount;

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image"/>
            <div class="position-vector">
                <img src="${product.vector}" alt="Vector Icon"/>
            </div>
            <div class="position-vector2">
                <img src="${product.quickView}" alt="Quick View"/>
            </div>
            <div class="bottom-items">
                <h3>${product.title}</h3>
                <ul>
                    <li class="current-price">${product.currentPrice}</li>
                    ${oldPrice ? `<li class="old-price">${oldPrice}</li>` : ''}
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (3).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (3).svg" alt="Rating Star"/></li>
                    <li>(${product.ratings})</li>
                </ul>
            </div>
            <a> <button class="add-to-cart">Add to Cart</button></a>
        `;

        if (roundImage) {
            productItem.innerHTML += `
                <div class="round">
                    <img src="${roundImage}" class="rond-img" alt="Round Image"/>
                </div>
            `;
        }

        if (product.title === "Kids Electric Car" || product.title === "GP11 Shooter USB Gamepad") {
            productItem.innerHTML += `<button class="new-btn">New</button>`;
        }
        if (product.title === "HAVIT HV-G92 Gamepad" || product.title === "Ak-900 Wired keyboard" || product.title === "Ips LCD Gaming Monitor"  && discount) {
            productItem.innerHTML += `<button class="red-btn">${discount}</button>`;
        }
        

    
        productItem.innerHTML += `
            <div class="color-selection">
                <button class="color-btn red-color"></button>
                <button class="color-btn blue-color"></button>
                <button class="color-btn green-color"></button>
            </div>
        `;

        productGrid.appendChild(productItem);
    });
}

