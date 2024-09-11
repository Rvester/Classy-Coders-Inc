const Employees = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;

  constructor(name, position, salary, clients = []) {
    super(name, position, salary);
    this.clients = clients;
    this.#totalSales = 0;
  }

  getSalesNumber() {
    return this.#totalSales;
  }

  makeSale(amount) {
    if (amount > 0) {
      this.#totalSales += amount;
    }
  }
}

module.exports = SalesPerson;
