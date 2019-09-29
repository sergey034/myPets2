import Templater from '../../src/Templater.js';

export class ViewCategory {
  constructor(contr) {
    this.controller = contr;
    // this.templater = new Templater('./components/Category/Category.html');
    this.templater = new Templater('./components/Product/Product.html');
    this.output = document.querySelector('#products');
    this.navbar = document.querySelector('#main-menu');
    this.navbar.addEventListener('click', this.controller.runGetCategory.bind(this.controller));
  }

  // render(products) {
  //   this.output.innerHTML = '';

  //   products.forEach(product => {
  //     this.templater.load(product, this.output);
  //   });
  // }
}