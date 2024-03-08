// Store locator custom element

class StoreLocator extends HTMLElement {
  constructor() {
    super();
    this.sheetKey = "1Kvt0NMl4rrIlQWVRjfg6URO2CCeQulS_-e82AIA6-hg";
    this.apiKey = "AIzaSyD0s1O9edKJ1ujT7701zAxGJsEPsgWlp6A";
    this.sheetUrl =
      "https://sheets.googleapis.com/v4/spreadsheets/" +
      this.sheetKey +
      "/values/Sheet1?key=" +
      this.apiKey;
    this.getSheetData();
    this.sheetData = JSON.parse(localStorage.getItem("sheet_data"));
    this.getCategories();
    this.getStatesData();
  }
  getStatesData() {
    let categoryEl = document.querySelector("#category");
    categoryEl.addEventListener("change", function () {
      getStatesData(this.value);
    });
  }
  getStatesData(value) {
    let statesData = this.sheetData.slice(1).map((each) => each);
    let states = [];
    console.log(statesData);
    for (let each of statesData) {
      if (statesData[1] === value) {
        if (states.includes(each)) {
          continue;
        } else {
          states.push(each);
        }
      }
    }
    let stateOptions = `<option class="custom-store-locator__filter-option" value="Select Category">Select state</option>`;
    for (let each of states) {
      stateOptions += `<option class="custom-store-locator__category-option" value=${each}>${each}</option>`;
    }
    console.log(states);
    let stateEl = document.querySelector("#state");
    stateEl.innerHTML = stateOptions;
  }
  getCategories() {
    let categoriesData = this.sheetData.slice(1).map((each) => each[1]);
    let categories = [];
    for (let each of categoriesData) {
      if (categories.includes(each)) {
        continue;
      } else {
        categories.push(each);
      }
    }
    let CategoryOptions = `<option class="custom-store-locator__filter-option" value="Select Category">Select Category</option>`;
    for (let each of categories) {
      CategoryOptions += `<option class="custom-store-locator__category-option" value=${each}>${each}</option>`;
    }
    let categoryEl = document.querySelector("#category");
    categoryEl.innerHTML = CategoryOptions;
  }
  getSheetData() {
    fetch(this.sheetUrl)
      .then((response) => response.json())
      .then((data) => {
        let sheetData = JSON.stringify(data.values);
        localStorage.setItem("sheet_data", sheetData);
      })
      .catch((error) => console.log("Error: ", error));
  }
}

customElements.define("store-locator", StoreLocator);
