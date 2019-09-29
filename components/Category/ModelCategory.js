export class ModelCategory {
  constructor(router) {
    this.router = router;
  }

  getCategory(e) {
    const category = e.target.parentNode.id;

    let data = this.router.router.serviceProduct.allProducts;

    if (category === 'all') {
      this.router.router.controllerProduct.sendProductsToRender(data);
    } else {

      let dataFiltered = data.filter((el) => el.type === category);

      this.router.router.controllerProduct.sendProductsToRender(dataFiltered);
    }
  }
}