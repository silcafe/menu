// Load menu items from CSV files
const appetizers = loadMenuItems('appetizers.csv');
const entrees = loadMenuItems('entrees.csv');
const desserts = loadMenuItems('desserts.csv');
const drinks = loadMenuItems('drinks.csv');

// Append menu items to DOM
const appetizersContainer = document.querySelector('.appetizers .menu-items-container');
appendMenuItems(appetizers, appetizersContainer);

const entreesContainer = document.querySelector('.entrees .menu-items-container');
appendMenuItems(entrees, entreesContainer);

const dessertsContainer = document.querySelector('.desserts .menu-items-container');
appendMenuItems(desserts, dessertsContainer);

const drinksContainer = document.querySelector('.drinks .menu-items-container');
appendMenuItems(drinks, drinksContainer);

// Function to load menu items from CSV file
function loadMenuItems(file) {
  const items = [];

  fetch(file)
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n');
      const headers = rows[0].split(',');
      for (let i = 1; i < rows.length; i++) {
        const itemData = rows[i].split(',');
        const item = {};
        for (let j = 0; j < headers.length; j++) {
          item[headers[j]] = itemData[j];
        }
        items.push(item);
      }
    });

  return items;
}

// Function to append menu items to DOM
function appendMenuItems(items, container) {
  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const title = document.createElement('h3');
    title.textContent = item['Title'];
    menuItem.appendChild(title);

    const description = document.createElement('p');
    description.textContent = item['Description'];
    menuItem.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = item['Price'];
    menuItem.appendChild(price);

    container.appendChild(menuItem);
  });
}

// Function to make follow-us text blink
const followUs = document.querySelector('.follow-us');
setInterval(() => {
  followUs.classList.toggle('blink');
}, 600);
