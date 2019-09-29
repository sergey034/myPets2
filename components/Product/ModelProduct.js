export class ModelProduct {
  constructor(router) {
    this.router = router;
  }

  getProducts() {
    this.router.serviceProduct.getProducts()
      .then(data => this.sendProductsToRender(data));
  }
}