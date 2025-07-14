document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Load products when switching to view all tab
            if (tabId === 'view-all') {
                loadAllProducts();
            }
        });
    });
    
    // Modal handling
    const modal = document.getElementById('edit-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Load all products on initial load
    loadAllProducts();
    
    // Search product functionality
    document.getElementById('search-btn').addEventListener('click', searchProduct);
    
    // Create product form submission
    document.getElementById('create-form').addEventListener('submit', createProduct);
    
    // Edit product form submission
    document.getElementById('edit-form').addEventListener('submit', updateProduct);
});

// Function to load all products
function loadAllProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const tableBody = document.querySelector('#product-table tbody');
            tableBody.innerHTML = '';
            
            if (products.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">No products found</td></tr>';
                return;
            }
            
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>
                        <button class="action-btn edit-btn" data-id="${product.id}">Edit</button>
                        <button class="action-btn delete-btn" data-id="${product.id}">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
            
            // Add event listeners to edit and delete buttons
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', () => openEditModal(btn.getAttribute('data-id')));
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', () => deleteProduct(btn.getAttribute('data-id')));
            });
        })
        .catch(error => {
            console.error('Error loading products:', error);
            showNotification('Error loading products. Please try again.', 'error');
        });
}

// Function to search for a product by ID
function searchProduct() {
    const productId = document.getElementById('search-id').value.trim();
    
    if (!productId) {
        showNotification('Please enter a product ID', 'error');
        return;
    }
    
    fetch(`/api/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Product not found');
            }
            return response.json();
        })
        .then(product => {
            const resultDiv = document.getElementById('search-result');
            resultDiv.innerHTML = `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p><strong>ID:</strong> ${product.id}</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                    <div class="card-actions">
                        <button class="action-btn edit-btn" data-id="${product.id}">Edit</button>
                        <button class="action-btn delete-btn" data-id="${product.id}">Delete</button>
                    </div>
                </div>
            `;
            
            // Add event listeners to the buttons in search result
            resultDiv.querySelector('.edit-btn').addEventListener('click', () => 
                openEditModal(product.id)
            );
            
            resultDiv.querySelector('.delete-btn').addEventListener('click', () => 
                deleteProduct(product.id)
            );
        })
        .catch(error => {
            console.error('Error searching product:', error);
            document.getElementById('search-result').innerHTML = `
                <div class="notification error">
                    Product not found or an error occurred.
                </div>
            `;
        });
}

// Function to create a new product
function createProduct(event) {
    event.preventDefault();
    
    const productData = {
        name: document.getElementById('product-name').value.trim(),
        description: document.getElementById('product-description').value.trim(),
        price: parseFloat(document.getElementById('product-price').value)
    };
    
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create product');
        }
        return response.json();
    })
    .then(product => {
        showNotification('Product created successfully!', 'success');
        document.getElementById('create-form').reset();
        
        // Switch to view all tab and refresh the list
        document.querySelector('[data-tab="view-all"]').click();
    })
    .catch(error => {
        console.error('Error creating product:', error);
        showNotification('Error creating product. Please try again.', 'error');
    });
}

// Function to open the edit modal and populate with product data
function openEditModal(productId) {
    fetch(`/api/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Product not found');
            }
            return response.json();
        })
        .then(product => {
            document.getElementById('edit-id').value = product.id;
            document.getElementById('edit-name').value = product.name;
            document.getElementById('edit-description').value = product.description;
            document.getElementById('edit-price').value = product.price;
            
            document.getElementById('edit-modal').style.display = 'block';
        })
        .catch(error => {
            console.error('Error loading product for editing:', error);
            showNotification('Error loading product data. Please try again.', 'error');
        });
}

// Function to update a product
function updateProduct(event) {
    event.preventDefault();
    
    const productId = document.getElementById('edit-id').value;
    const productData = {
        name: document.getElementById('edit-name').value.trim(),
        description: document.getElementById('edit-description').value.trim(),
        price: parseFloat(document.getElementById('edit-price').value)
    };
    
    fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update product');
        }
        return response.json();
    })
    .then(product => {
        document.getElementById('edit-modal').style.display = 'none';
        showNotification('Product updated successfully!', 'success');
        
        // Refresh the product list or search result based on active tab
        const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
        if (activeTab === 'view-all') {
            loadAllProducts();
        } else if (activeTab === 'search') {
            searchProduct();
        }
    })
    .catch(error => {
        console.error('Error updating product:', error);
        showNotification('Error updating product. Please try again.', 'error');
    });
}

// Function to delete a product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        fetch(`/api/products/${productId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            
            showNotification('Product deleted successfully!', 'success');
            
            // Refresh the product list or search result based on active tab
            const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
            if (activeTab === 'view-all') {
                loadAllProducts();
            } else if (activeTab === 'search') {
                document.getElementById('search-result').innerHTML = '';
                document.getElementById('search-id').value = '';
            }
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            showNotification('Error deleting product. Please try again.', 'error');
        });
    }
}

// Function to show notifications
function showNotification(message, type) {
    // Check if a notification already exists and remove it
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification to the active tab content
    const activeContent = document.querySelector('.tab-content.active');
    activeContent.insertBefore(notification, activeContent.firstChild);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
