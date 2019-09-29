// import Templater from '../../src/Templater.js';

export class ViewSearch {
  constructor(contr) {
    this.controller = contr;
    // this.templater = new Templater('./components/Search/Search.html');
    this.searchBar = document.querySelector('#search-bar');
    // document.addEventListener('DOMContentLoaded', this.renderSearchBar);
    this.searchBtn = document.querySelector('#search-btn');
    this.searchBtn.addEventListener('click', this.getValue.bind(this));

  }

  renderSearchBar() {
    this.searchBar.insertAdjacentHTML('afterBegin', `
    <div class="container">
      <form class="form-inline my-2 my-lg-0 justify-content-center w-100">
        <input class="form-control mr-sm-2 w-75" type="search" aria-label="Search">
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit"><i class="fas fa-search "></i></button>
      </form>
    </div>
    `)
  }

  getValue(e) {
    e.preventDefault();

    let searchValue = document.querySelector('#search-input').value;
    this.controller.filterProducts(searchValue);
  }

}