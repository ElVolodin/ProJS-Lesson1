const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {id: 2, title: 'Mouse', price: 20, img: "https://irecommend.ru/sites/default/files/product-images/39418/custom_format_m185_ctg_red_mr_enl.jpg"},
    {id: 3, title: 'Keyboard', price: 200, img: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {id: 4, title: 'Gamepad', price: 50, img: "https://cdn.pixabay.com/photo/2017/12/29/16/43/game-joystick-3048029_1280.jpg"},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src= ${item.img} class= product-img id=image-product alt="">
                <h3 class= "product-heading">${item.title}</h3>
                <p class= "product-text">Цена: ${item.price} рублей</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);