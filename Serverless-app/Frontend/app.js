// Toggle mock mode here. When false, it will send real requests to the API_ENDPOINT
const MOCK_MODE = false;
const API_ENDPOINT = 'https://4pb452u5t0.execute-api.eu-north-1.amazonaws.com/prod/items'; 

const itemForm = document.getElementById('itemForm');
const itemNameInput = document.getElementById('itemName');
const itemList = document.getElementById('itemList');
const refreshBtn = document.getElementById('refreshBtn');
const saveLoader = document.getElementById('saveLoader');

// In-memory mock data
let mockItems = [];

async function fetchItems() {
    renderLoading();
    
    if (MOCK_MODE) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        renderList(mockItems);
        return;
    }

    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        // Assuming Data structure is { body: "[...]" } or direct list
        let items = data;
        if(data.body) {
            items = JSON.parse(data.body);
        }
        renderList(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        itemList.innerHTML = `<li class="empty-state" style="color: #ef4444 !important;">Failed to load items.</li>`;
    }
}

async function createItem(name) {
    if (MOCK_MODE) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 600));
        const newItem = {
            id: Math.random().toString(36).substring(2, 9),
            name: name,
            timestamp: new Date().toISOString()
        };
        mockItems.unshift(newItem); // Add to beginning
        return;
    }

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        });
        
        if (!response.ok) throw new Error('Failed to create item');
    } catch (error) {
        console.error('Error creating item:', error);
        throw error; // Rethrow to handle in the form submit
    }
}

function renderLoading() {
    itemList.innerHTML = `<li class="empty-state">Loading items...</li>`;
}

function renderList(items) {
    itemList.innerHTML = '';
    
    if (items.length === 0) {
        itemList.innerHTML = `<li class="empty-state">No items found. Create one above!</li>`;
        return;
    }

    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="item-name">${escapeHTML(item.name)}</span>
            <span class="item-id">#${item.id.substring(0,6)}</span>
        `;
        itemList.appendChild(li);
    });
}

// Utility to prevent XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag])
    );
}

// Event Listeners
itemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = itemNameInput.value.trim();
    if (!name) return;

    // UI state
    saveLoader.classList.remove('hidden');
    itemForm.querySelector('button').style.opacity = '0.8';
    
    try {
        await createItem(name);
        itemNameInput.value = ''; // Reset input
        await fetchItems(); // Refresh list
    } catch (err) {
        alert('Failed to save item. Please check the console.');
    } finally {
        // Restore UI state
        saveLoader.classList.add('hidden');
        itemForm.querySelector('button').style.opacity = '1';
    }
});

refreshBtn.addEventListener('click', () => {
    fetchItems();
});

// Initial load
fetchItems();
