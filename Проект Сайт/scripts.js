// Array of product objects with image URLs
const products = [
    { name: 'iPhone', imageUrl: 'iphone.png' },
    { name: 'iPad', imageUrl: 'ipad.png' },
    { name: 'Mac', imageUrl: 'mac.png' },
    { name: 'Watch', imageUrl: 'watch.png' }
];

// Function to dynamically load product images
function loadProducts() {
    const productsSection = document.getElementById('products-section');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        
        const productImage = document.createElement('img');
        productImage.src = `images/${product.imageUrl}`;
        productImage.alt = product.name;
        
        productDiv.appendChild(productName);
        productDiv.appendChild(productImage);
        
        productsSection.appendChild(productDiv);
    });
}
// JavaScript for modal functionality
const modal = document.getElementById('iphoneModal');
const closeButton = document.querySelector('.close');
const buyButton = document.getElementById('buyButton');
const iphoneButton = document.querySelector('nav ul li:nth-child(1) a'); // Выбираем ссылку на iPhone

// При нажатии на кнопку "iPhone" открываем модальное окно
iphoneButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
    modal.style.display = 'block'; // Отображаем модальное окно
});

// При нажатии на кнопку закрытия скрываем модальное окно
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// При нажатии на кнопку "Купить" выводим сообщение
buyButton.addEventListener('click', function() {
    alert('Спасибо за покупку iPhone 15!');
});

// Call the function to load products when the page loads
window.onload = loadProducts;

// JavaScript for modal functionality
const ipadModal = document.getElementById('ipadModal');
const closeIpadButton = document.querySelector('#ipadModal .close');
const buyIpadButton = document.getElementById('buyIpadButton');
const ipadButton = document.querySelector('nav ul li:nth-child(2) a'); // Выбираем ссылку на iPad

const macModal = document.getElementById('macModal');
const closeMacButton = document.querySelector('#macModal .close');
const buyMacButton = document.getElementById('buyMacButton');
const macButton = document.querySelector('nav ul li:nth-child(3) a'); // Выбираем ссылку на Mac

const watchModal = document.getElementById('watchModal');
const closeWatchButton = document.querySelector('#watchModal .close');
const buyWatchButton = document.getElementById('buyWatchButton');
const watchButton = document.querySelector('nav ul li:nth-child(4) a'); // Выбираем ссылку на Watch

const supportModal = document.getElementById('supportModal');
const closeSupportButton = document.querySelector('#supportModal .close');
const supportButton = document.querySelector('nav ul li:nth-child(5) a'); // Выбираем ссылку на Support

// При нажатии на кнопку "iPad" открываем модальное окно
ipadButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    ipadModal.style.display = 'block'; 
});

// При нажатии на кнопку закрытия скрываем модальное окно iPad
closeIpadButton.addEventListener('click', function() {
    ipadModal.style.display = 'none';
});

// При нажатии на кнопку "Купить" выводим сообщение
buyIpadButton.addEventListener('click', function() {
    alert('Спасибо за покупку iPad Pro 12!');
});

// При нажатии на кнопку "Mac" открываем модальное окно
macButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    macModal.style.display = 'block'; 
});

// При нажатии на кнопку закрытия скрываем модальное окно Mac
closeMacButton.addEventListener('click', function() {
    macModal.style.display = 'none';
});

// При нажатии на кнопку "Купить" выводим сообщение
buyMacButton.addEventListener('click', function() {
    alert('Спасибо за покупку MacBook Air!');
});

// При нажатии на кнопку "Watch" открываем модальное окно
watchButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    watchModal.style.display = 'block'; 
});

// При нажатии на кнопку закрытия скрываем модальное окно Watch
closeWatchButton.addEventListener('click', function() {
    watchModal.style.display = 'none';
});

// При нажатии на кнопку "Купить" выводим сообщение
buyWatchButton.addEventListener('click', function() {
    alert('Спасибо за покупку Apple Watch Series 9!');
});

// При нажатии на кнопку "Support" открываем модальное окно
supportButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    supportModal.style.display = 'block'; 
});

// При нажатии на кнопку закрытия скрываем модальное окно Support
closeSupportButton.addEventListener('click', function() {
    supportModal.style.display = 'none';
});
