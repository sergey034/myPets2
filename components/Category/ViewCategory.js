export class ViewCategory {
  constructor(contr) {
    this.controller = contr;
    document.addEventListener('DOMContentLoaded', this.renderNavbar);
    this.navbar = document.querySelector('#main-menu');
    this.navbar.addEventListener('click', this.controller.runGetCategory.bind(this.controller));
    this.output = document.querySelector('#products');
  }

  renderNavbar() {
    // document.querySelector('#jjj').innerHTML = this.templater.load(product, this.output);
  }
}