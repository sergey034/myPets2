export class ServiceProduct {

  getProducts() {
    // return fetch('./data/goods.json')
    return fetch('https://cors-anywhere.herokuapp.com/https://gentle-coast-49966.herokuapp.com/get-goods')
      .then(data => data.json())
      .then(data => {
        if (localStorage.getItem.products) {
          return JSON.parse(localStorage.getItem('products'));
        } else {
          localStorage.setItem('products', JSON.stringify(data));
        }

        return data;
      })
  }

  // getProducts(src) {
  //   fetch(src)
  //     .then(data => data.json())
  // }

  // loadToLocStor(products) {
  //   localStorage.setItem('products', JSON.stringify(products));
  //   // return localStorage.getItem('products');
  // }

  // getProductsArrFromLocStor() {
  //   // returns products array
  //   return JSON.parse(localStorage.getItem('products'));
  // }

  // loadProducts() {
  //   return this.getProducts('../../data/shop.json')
  //     .then(data => this.loadToLocStor(data))
  //     .then(() => this.getProductsArrFromLocStor())
  //     .then(data => this.controller.sendProductsToRender(data));
  // }

}