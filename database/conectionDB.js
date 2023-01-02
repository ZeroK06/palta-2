import data from "./data";
export default class Database {
  constructor() {}
  allData() {
    return Object.values(data);
  }
  getById(id) {
    if (!this.allData().some((item) => item.id == id)) {
      return null;
    }
    return this.allData().find((item) => item.id == id);
  }
}
