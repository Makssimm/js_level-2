const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, img = `./img/card.jpg" alt="card`) => {
    return `<div class="product-item">
                <img src="${img}"
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <div class="wrapper">
                <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(product => renderProduct(product));
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);