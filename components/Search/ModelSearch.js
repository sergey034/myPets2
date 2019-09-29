export class ModelSearch {
  constructor(router) {
    this.router = router;
  }

  filterProducts(phrase) {
    const products = JSON.parse(localStorage.getItem('products'));
    console.log('2', phrase);

    const filteredProducts = products
      .filter(prod => prod.name.toLowerCase().startsWith(phrase.toLowerCase()));

    this.router.router.controllerProduct.sendProductsToRender(filteredProducts); // ?????????????
  }
}