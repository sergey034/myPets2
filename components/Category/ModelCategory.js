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