import {ViewSearch} from './ViewSearch.js';
import {ModelSearch} from './ModelSearch.js';

export class ControllerSearch {
  constructor(router) {
    this.router = router;
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
  }

  filterProducts(phrase) {
    this.model.filterProducts(phrase);
  }
}