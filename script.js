// Element definitions with icons and properties
const elementDefinitions = {
    earth: { icon: '🌍', name: 'Earth', color: '#8B7355' },
    fire: { icon: '🔥', name: 'Fire', color: '#FF6B35' },
    water: { icon: '💧', name: 'Water', color: '#4ECDC4' },
    energy: { icon: '⚡', name: 'Energy', color: '#FFD700' },
    sea: { icon: '🌊', name: 'Sea', color: '#1E90FF' },
    ocean: { icon: '🌊', name: 'Ocean', color: '#1E90FF' },
    air: { icon: '💨', name: 'Air', color: '#A8E6CF' },
    lava: { icon: '🌋', name: 'Lava', color: '#FF4500' },
    stone: { icon: '🪨', name: 'Stone', color: '#808080' },
    sand: { icon: '🏖️', name: 'Sand', color: '#EDC9AF' },
    steam: { icon: '💨', name: 'Steam', color: '#D3D3D3' },
    cloud: { icon: '☁️', name: 'Cloud', color: '#E0E0E0' },
    rain: { icon: '🌧️', name: 'Rain', color: '#87CEEB' },
    mud: { icon: '💩', name: 'Mud', color: '#654321' },
    brick: { icon: '🧱', name: 'Brick', color: '#B22222' },
    wall: { icon: '🧱', name: 'Wall', color: '#B22222' },
    house: { icon: '🏠', name: 'House', color: '#FFD700' },
    town: { icon: '🏘️', name: 'Town', color: '#FF6347' },
    city: { icon: '🏙️', name: 'City', color: '#708090' },
    glass: { icon: '🔍', name: 'Glass', color: '#ADD8E6' },
    glasses: { icon: '👓', name: 'Glasses', color: '#ADD8E6' },
    primordialSoup: { icon: '🧪', name: 'Primordial Soup', color: '#6A5ACD' },
    life: { icon: '🌱', name: 'Life', color: '#32CD32' },
    clay: { icon: '🧱', name: 'Clay', color: '#B5651D' },
    bird: { icon: '🐦', name: 'Bird', color: '#FFD700' },
    animal: { icon: '🐾', name: 'Animal', color: '#8B4513' },
    human: { icon: '🧍', name: 'Human', color: '#F5DEB3' },
    bacteria: { icon: '🦠', name: 'Bacteria', color: '#7FFFD4' },
    sickness: { icon: '🤒', name: 'Sickness', color: '#FF69B4' },
    hospital: { icon: '🏥', name: 'Hospital', color: '#FF69B4' },
    plant: { icon: '🌱', name: 'Plant', color: '#228B22' },
    hourglass: { icon: '⏳', name: 'Hourglass', color: '#D2B48C' },
    time: { icon: '⏰', name: 'Time', color: '#D2B48C' },
    tree: { icon: '🌳', name: 'Tree', color: '#228B22' },
    metal: { icon: '⚙️', name: 'Metal', color: '#B0C4DE' },
    tool: { icon: '🔧', name: 'Tool', color: '#B0C4DE' },
    wood: { icon: '🪵', name: 'Wood', color: '#DEB887' },
    wheel: { icon: '🛞', name: 'Wheel', color: '#B0C4DE' },
    car: { icon: '🚗', name: 'Car', color: '#FF6347' },
    ambulance: { icon: '🚑', name: 'Ambulance', color: '#FF6347' },
    bicycle: { icon: '🚲', name: 'Bicycle', color: '#FF6347' },
    compass: { icon: '🧭', name: 'Compass', color: '#B0C4DE' },
    magnet: { icon: '🧲', name: 'Magnet', color: '#B0C4DE' },
    mriMachine: { icon: '🧲', name: 'MRI Machine', color: '#B0C4DE' },
};

// Recipe data structure - maps created items to their recipe combinations
const recipeData = {
    energy: { inputs: ['fire', 'fire'], display: 'Fire + Fire' },
    lava: { inputs: ['earth', 'fire'], display: 'Earth + Fire' },
    stone: { inputs: ['lava', 'water'], display: 'Lava + Water' },
    sand: { inputs: ['stone', 'air'], display: 'Stone + Air' },
    steam: { inputs: ['fire', 'water'], display: 'Fire + Water' },
    cloud: { inputs: ['air', 'water'], display: 'Air + Water' },
    rain: { inputs: ['cloud', 'water'], display: 'Cloud + Water' },
    mud: { inputs: ['earth', 'water'], display: 'Earth + Water' },
    brick: { inputs: ['mud', 'fire'], display: 'Mud + Fire' },
    wall: { inputs: ['brick', 'brick'], display: 'Brick + Brick' },
    house: { inputs: ['wall', 'wall'], display: 'Wall + Wall' },
    town: { inputs: ['house', 'house'], display: 'House + House' },
    city: { inputs: ['town', 'town'], display: 'Town + Town' },
    glass: { inputs: ['sand', 'fire'], display: 'Sand + Fire' },
    glasses: { inputs: ['glass', 'glass'], display: 'Glass + Glass' },
    sea: { inputs: ['water', 'water'], display: 'Water + Water' },
    ocean: { inputs: ['sea', 'sea'], display: 'Sea + Sea' },
    primordialSoup: { inputs: ['earth', 'sea'], display: 'Earth + Sea' },
    life: { inputs: ['primordialSoup', 'energy'], display: 'Primordial Soup + Energy' },
    clay: { inputs: ['mud', 'stone'], display: 'Mud + Stone' },
    bird: { inputs: ['air', 'life'], display: 'Air + Life' },
    animal: { inputs: ['earth', 'life'], display: 'Earth + Life' },
    human: { inputs: ['clay', 'life'], display: 'Clay + Life' },
    bacteria: { inputs: ['mud', 'life'], display: 'Mud + Life' },
    sickness: { inputs: ['bacteria', 'human'], display: 'Bacteria + Human' },
    hospital: { inputs: ['sickness', 'house'], display: 'Sickness + House' },
    plant: { inputs: ['earth', 'rain'], display: 'Earth + Rain' },
    hourglass: { inputs: ['sand', 'glass'], display: 'Sand + Glass' },
    time: { inputs: ['hourglass', 'hourglass'], display: 'Hourglass + Hourglass' },
    tree: { inputs: ['plant', 'time'], display: 'Plant + Time' },
    metal: { inputs: ['stone', 'fire'], display: 'Stone + Fire' },
    tool: { inputs: ['metal', 'human'], display: 'Metal + Human' },
    wood: { inputs: ['tree', 'tool'], display: 'Tree + Tool' },
    wheel: { inputs: ['wood', 'tool'], display: 'Wood + Tool' },
    car: { inputs: ['wheel', 'metal'], display: 'Wheel + Metal' },
    ambulance: { inputs: ['car', 'hospital'], display: 'Car + Hospital' },
    bicycle: { inputs: ['wheel', 'wheel'], display: 'Wheel + Wheel' },
    compass: { inputs: ['metal', 'glass'], display: 'Metal + Glass' },
    magnet: { inputs: ['compass', 'earth'], display: 'Compass + Earth' },
    mriMachine: { inputs: ['magnet', 'hospital'], display: 'Magnet + Hospital' },
};

// Recipes mapping - combinations that produce new items
const recipes = {
    'fire+fire': 'energy',
    'earth+fire': 'lava',
    'fire+earth': 'lava',
    'lava+water': 'stone',
    'water+lava': 'stone',
    'stone+air': 'sand',
    'air+stone': 'sand',
    'fire+water': 'steam',
    'water+fire': 'steam',
    'air+water': 'cloud',
    'water+air': 'cloud',
    'cloud+water': 'rain',
    'water+cloud': 'rain',
    'earth+water': 'mud',
    'water+earth': 'mud',
    'mud+fire': 'brick',
    'fire+mud': 'brick',
    'brick+brick': 'wall',
    'wall+wall': 'house',
    'house+house': 'town',
    'town+town': 'city',
    'sand+fire': 'glass',
    'fire+sand': 'glass',
    'glass+glass': 'glasses',
    'water+water': 'sea',
    'sea+sea': 'ocean',
    'earth+sea': 'primordialSoup',
    'sea+earth': 'primordialSoup',
    'primordialSoup+energy': 'life',
    'energy+primordialSoup': 'life',
    'mud+stone': 'clay',
    'stone+mud': 'clay',
    'air+life': 'bird',
    'life+air': 'bird',
    'earth+life': 'animal',
    'life+earth': 'animal',
    'clay+life': 'human',
    'life+clay': 'human',
    'mud+life': 'bacteria',
    'life+mud': 'bacteria',
    'bacteria+human': 'sickness',
    'human+bacteria': 'sickness',
    'sickness+house': 'hospital',
    'house+sickness': 'hospital',
    'earth+rain': 'plant',
    'rain+earth': 'plant',
    'sand+glass': 'hourglass',
    'glass+sand': 'hourglass',
    'hourglass+hourglass': 'time',
    'plant+time': 'tree',
    'time+plant': 'tree',
    'stone+fire': 'metal',
    'fire+stone': 'metal',
    'metal+human': 'tool',
    'human+metal': 'tool',
    'tree+tool': 'wood',
    'tool+tree': 'wood',
    'wood+tool': 'wheel',
    'tool+wood': 'wheel',
    'wheel+metal': 'car',
    'metal+wheel': 'car',
    'car+hospital': 'ambulance',
    'hospital+car': 'ambulance',
    'wheel+wheel': 'bicycle',
    'metal+glass': 'compass',
    'glass+metal': 'compass',
    'compass+earth': 'magnet',
    'earth+compass': 'magnet',
    'magnet+hospital': 'mriMachine',
    'hospital+magnet': 'mriMachine',
};

// Game state
let inventory = {
    earth: 1,
    fire: 1,
    water: 1,
    air: 1,
};

let discoveredRecipes = new Set();
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

const workspace = document.getElementById('workspace');
const inventoryDiv = document.getElementById('inventory');
const resetBtn = document.getElementById('resetBtn');
const collapseBtn = document.getElementById('collapseBtn');
const recipesDiv = document.getElementById('recipes');
const elementCounter = document.getElementById('elementCounter');

// Initialize the game
function initializeGame() {
    loadGame();
    renderInventory();
    renderRecipes();
    updateElementCounter();
    resetBtn.addEventListener('click', resetGame);
    collapseBtn.addEventListener('click', toggleRecipes);
}

// Render recipes based on discovered status
function renderRecipes() {
    recipesDiv.innerHTML = '';
    
    for (const [item, recipe] of Object.entries(recipeData)) {
        if (discoveredRecipes.has(item)) {
            const recipeEl = document.createElement('div');
            recipeEl.className = 'recipe';
            recipeEl.innerHTML = `<strong>${recipe.display}</strong> = ${elementDefinitions[item].name}`;
            recipesDiv.appendChild(recipeEl);
        }
    }
    
    if (discoveredRecipes.size === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'recipe';
        placeholder.style.color = '#999';
        placeholder.innerHTML = 'Combine elements to discover recipes!';
        recipesDiv.appendChild(placeholder);
    }
}

// Toggle recipes panel
function toggleRecipes() {
    recipesDiv.classList.toggle('collapsed');
    collapseBtn.classList.toggle('collapsed');
}

// Save game to localStorage
function saveGame() {
    const gameState = {
        inventory: inventory,
        discoveredRecipes: Array.from(discoveredRecipes),
    };
    localStorage.setItem('alchemyGameState', JSON.stringify(gameState));
}

// Load game from localStorage
function loadGame() {
    const savedState = localStorage.getItem('alchemyGameState');
    if (savedState) {
        try {
            const gameState = JSON.parse(savedState);
            inventory = gameState.inventory || {
                earth: 1,
                fire: 1,
                water: 1,
                air: 1,
            };
            discoveredRecipes = new Set(gameState.discoveredRecipes || []);
        } catch (e) {
            console.log('Could not load game state');
        }
    }
}

// Render inventory items
function renderInventory() {
    inventoryDiv.innerHTML = '';
    
    for (const [element, count] of Object.entries(inventory)) {
        if (count > 0) {
            const elementEl = createInventoryElement(element);
            inventoryDiv.appendChild(elementEl);
        }
    }
    
    updateElementCounter();
}

// Update element counter display
function updateElementCounter() {
    const discoveredCount = Object.keys(inventory).filter(el => inventory[el] > 0).length;
    const totalCount = Object.keys(elementDefinitions).length;
    elementCounter.textContent = `(${discoveredCount}/${totalCount})`;
}

// Create an element for the inventory
function createInventoryElement(elementKey) {
    const elementDef = elementDefinitions[elementKey];
    const div = document.createElement('div');
    div.className = 'element';
    div.draggable = true;
    div.dataset.element = elementKey;
    
    div.innerHTML = `
        <div class="element-icon">${elementDef.icon}</div>
        <div class="element-name">${elementDef.name}</div>
    `;
    
    div.addEventListener('dragstart', handleInventoryDragStart);
    
    return div;
}

// Create a workspace element (draggable in the game area)
function createWorkspaceElement(elementKey, x, y) {
    const elementDef = elementDefinitions[elementKey];
    const div = document.createElement('div');
    div.className = 'workspace-element';
    div.draggable = true;
    div.dataset.element = elementKey;
    
    div.innerHTML = `
        <div class="workspace-element-icon">${elementDef.icon}</div>
        <div class="workspace-element-name">${elementDef.name}</div>
    `;
    
    // Set initial position
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    
    // Add event listeners
    div.addEventListener('dragstart', handleWorkspaceDragStart);
    div.addEventListener('dragend', handleDragEnd);
    
    workspace.appendChild(div);
    
    return div;
}

// Handle dragging from inventory
function handleInventoryDragStart(e) {
    const elementKey = e.target.closest('.element').dataset.element;
    draggedElement = {
        type: 'inventory',
        element: elementKey,
        source: e.target.closest('.element'),
    };
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', elementKey);
}

// Handle dragging from workspace
function handleWorkspaceDragStart(e) {
    const element = e.target.closest('.workspace-element');
    const rect = element.getBoundingClientRect();
    const workspaceRect = workspace.getBoundingClientRect();
    
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    draggedElement = {
        type: 'workspace',
        element: element.dataset.element,
        source: element,
    };
    
    element.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

// Handle drop on workspace
function handleWorkspaceDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleWorkspaceDrop(e) {
    e.preventDefault();
    
    const elementKey = e.dataTransfer.getData('text/plain');
    const rect = workspace.getBoundingClientRect();
    
    let x = e.clientX - rect.left - 40; // Center the element
    let y = e.clientY - rect.top - 40;
    
    // Keep elements within bounds
    x = Math.max(0, Math.min(x, rect.width - 80));
    y = Math.max(0, Math.min(y, rect.height - 80));
    
    if (draggedElement && draggedElement.type === 'workspace') {
        // Moving existing workspace element
        draggedElement.source.style.left = x + 'px';
        draggedElement.source.style.top = y + 'px';
    } else if (elementKey) {
        // Adding from inventory
        createWorkspaceElement(elementKey, x, y);
    }
}

function handleDragEnd(e) {
    if (draggedElement && draggedElement.type === 'workspace') {
        draggedElement.source.classList.remove('dragging');
    }
    draggedElement = null;
}

// Handle drag over inventory to allow dropping
function handleInventoryDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    inventoryDiv.style.backgroundColor = '#f0f0f0'; // Visual feedback
}

// Handle drag leave inventory
function handleInventoryDragLeave(e) {
    if (e.target === inventoryDiv) {
        inventoryDiv.style.backgroundColor = '';
    }
}

// Handle drop on inventory - delete workspace element
function handleInventoryDrop(e) {
    e.preventDefault();
    inventoryDiv.style.backgroundColor = '';
    
    // Only delete if dragging from workspace
    if (draggedElement && draggedElement.type === 'workspace') {
        draggedElement.source.remove();
        showNotification('Element removed');
        saveGame();
    }
}

// Check for collisions and combine elements
function checkCollisions() {
    const elements = Array.from(workspace.querySelectorAll('.workspace-element'));
    
    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            const el1 = elements[i];
            const el2 = elements[j];
            
            if (isOverlapping(el1, el2)) {
                const element1 = el1.dataset.element;
                const element2 = el2.dataset.element;
                
                // Try both combinations
                const recipe1 = recipes[element1 + '+' + element2];
                const recipe2 = recipes[element2 + '+' + element1];
                const result = recipe1 || recipe2;
                
                if (result) {
                    // Create new element
                    const rect1 = el1.getBoundingClientRect();
                    const rect2 = el2.getBoundingClientRect();
                    const workspaceRect = workspace.getBoundingClientRect();
                    
                    const newX = (rect1.left + rect2.left) / 2 - workspaceRect.left - 40;
                    const newY = (rect1.top + rect2.top) / 2 - workspaceRect.top - 40;
                    
                    // Check if this is the first time discovering this element
                    const isFirstDiscovery = !discoveredRecipes.has(result);
                    
                    // Add to inventory
                    inventory[result] = (inventory[result] || 0) + 1;
                    
                    // Mark recipe as discovered
                    discoveredRecipes.add(result);
                    
                    // Remove combined elements from workspace
                    el1.remove();
                    el2.remove();
                    
                    // Create new element on workspace
                    createWorkspaceElement(result, newX, newY);
                    
                    // Show notification only on first discovery
                    if (isFirstDiscovery) {
                        showNotification(`You created ${elementDefinitions[result].name}!`);
                    }
                    
                    // Update inventory and recipes
                    renderInventory();
                    renderRecipes();
                    saveGame();
                    
                    return; // Only process one combination at a time
                }
            }
        }
    }
}

// Check if two elements are overlapping
function isOverlapping(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    
    const distance = Math.sqrt(
        Math.pow(rect1.left - rect2.left, 2) + 
        Math.pow(rect1.top - rect2.top, 2)
    );
    
    // Elements overlap if distance is less than combined radius
    return distance < 100;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Reset game
function resetGame() {
    if (confirm('Are you sure you want to reset the game? All progress will be lost.')) {
        workspace.innerHTML = '';
        inventory = {
            earth: 1,
            fire: 1,
            water: 1,
            air: 1,
        };
        discoveredRecipes = new Set();
        renderInventory();
        renderRecipes();
        saveGame();
        showNotification('Game reset!');
    }
}

// Set up drag and drop for workspace
workspace.addEventListener('dragover', handleWorkspaceDragOver);
workspace.addEventListener('drop', handleWorkspaceDrop);

// Set up drag and drop for inventory to delete elements
inventoryDiv.addEventListener('dragover', handleInventoryDragOver);
inventoryDiv.addEventListener('dragleave', handleInventoryDragLeave);
inventoryDiv.addEventListener('drop', handleInventoryDrop);

// Check for collisions periodically
setInterval(checkCollisions, 100);

// Initialize the game on load
window.addEventListener('DOMContentLoaded', initializeGame);
