export class ModelSearch {
  constructor(controller) {
    this.controller = controller;
  }

  filterProducts(phrase) {
    const products = JSON.parse(localStorage.getItem('products'));
    console.log('2', phrase);
  }
}