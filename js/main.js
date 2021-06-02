
class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
            {id: 2, title: 'Mouse', price: 20, img: "https://irecommend.ru/sites/default/files/product-images/39418/custom_format_m185_ctg_red_mr_enl.jpg"},
            {id: 3, title: 'Keyboard', price: 200, img: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
            {id: 4, title: 'Gamepad', price: 50, img: "https://cdn.pixabay.com/photo/2017/12/29/16/43/game-joystick-3048029_1280.jpg"},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    getSum() {
        let sum = 0;
        this.goods.forEach (good => { 
        sum += good.price;
   });
        alert(sum);
    }    
}


class ProductItem {
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = product.img;
	}
	
	render() {
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" class="product-img" alt="img">
                <h3 class = "product-heading">${this.title}</h3>
                <p class = "product-text">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
list.getSum();

class Cart {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
}

class ElemCart {

}


