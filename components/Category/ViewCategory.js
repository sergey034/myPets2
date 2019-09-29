export class ViewCategory {
  constructor(contr) {
    this.controller = contr;
    this.output = document.querySelector('#products');
    this.navbar = document.querySelector('#main-menu');
    this.navbar.addEventListener('click', this.controller.runGetCategory.bind(this.controller));
  }
}