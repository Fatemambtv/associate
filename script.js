const productData = [
    {
        imageSrc: "https://m.media-amazon.com/images/I/61rsK1maJrL._SL1500_.jpg",
        title: "logitech pebble keys keyboard",
        link: "https://amzn.in/d/guQO8dE"
    },
    {
        imageSrc: "https://m.media-amazon.com/images/I/51pIShw4V8L._SL1500_.jpg",
        title: "Logitech pebble mouse 2",
        link: "https://amzn.in/d/7S1xAII"
    },
    {
        imageSrc: "https://m.media-amazon.com/images/I/61rsK1maJrL._SL1500_.jpg",
        title: "logitech pebble keys keyboard",
        link: "https://amzn.in/d/guQO8dE"
    },
    {
        imageSrc: "https://m.media-amazon.com/images/I/51pIShw4V8L._SL1500_.jpg",
        title: "Logitech pebble mouse 2",
        link: "https://amzn.in/d/7S1xAII"
    },

    // Add more products here
];

const productGrid = document.querySelector('.product-grid');

productData.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.imageSrc}" alt="${product.title}" class="product-image" data-link="${product.link}">
        <p class="product-title">${product.title}</p>
        <a href="${product.link}" class="product-link" target="_blank">Buy Now</a>
    `;
    productGrid.appendChild(productDiv);
});

const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('click', () => {
        window.open(image.dataset.link, '_blank');
    });
});
