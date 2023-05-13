// Load menu items from CSV file
async function loadMenuItems(filename) {
  const response = await fetch(filename);
  const text = await response.text();
  const items = text.split('\n');
  const menuItems = items.map(item => {
    const [title, description, price] = item.split(',');
    return { title, description, price };
  });
  return menuItems;
}

// Append menu items to container element
function appendMenuItems(menuItems, container) {
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');
    const titleElement = document.createElement('h3');
    titleElement.textContent = menuItem.title;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = menuItem.description;
    const priceElement = document.createElement('p');
    priceElement.textContent = menuItem.price;
    menuItemElement.appendChild(titleElement);
    menuItemElement.appendChild(descriptionElement);
    menuItemElement.appendChild(priceElement);
    container.appendChild(menuItemElement);
  }
}

// Load menu items and append to container elements
const appetizersContainer = document.querySelector('#appetizers .menu-items');
const entreesContainer = document.querySelector('#entrees .menu-items');
const dessertsContainer = document.querySelector('#desserts .menu-items');
const drinksContainer = document.querySelector('#drinks .menu-items');

loadMenuItems('appetizers.csv')
  .then(menuItems => {
    appendMenuItems(menuItems, appetizersContainer);
  });

loadMenuItems('entrees.csv')
  .then(menuItems => {
    appendMenuItems(menuItems, entreesContainer);
  });

loadMenuItems('desserts.csv')
  .then(menuItems => {
    appendMenuItems(menuItems, dessertsContainer);
  });

loadMenuItems('drinks.csv')
  .then(menuItems => {
    appendMenuItems(menuItems, drinksContainer);
  });

// Add click event to Instagram icon
const instagramIcon = document.querySelector('footer img');
const instagramText = document.querySelector('footer p');
instagramText.classList.add('blink');
instagramIcon.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/';
});
