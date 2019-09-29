export class ModelCategory {
  constructor(contr) {
    this.controller = contr;
  }

  getCategory(e) {
    const category = e.target.parentNode.id;
    let data = JSON.parse(localStorage.getItem('products'));

    if (category === 'all') {
      this.controller.sendProductsToRender(data);
    } else {
      let dataFiltered = data.filter((el) => el.type === category);
      this.controller.sendProductsToRender(dataFiltered);
    }
  }
}

// export class ModelCategory {
// constructor(router) {
//   this.router = router;

  // getCategory(e) {
  //   const category = e.target.parentNode.id;
  //   let data = this.router.router.serviceProduct.allProducts;

  //   if (category === 'all') {
  //     this.router.router.controllerProduct.sendProductsToRender(data);
  //   } else {
  //     let dataFiltered = data.filter((el) => el.type === category);
  //     this.router.router.controllerProduct.sendProductsToRender(dataFiltered);
  //   }
  // }
// }