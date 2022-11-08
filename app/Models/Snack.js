export class Snack {
    constructor(name, price) {
        this.name = name,
            this.price = price
        // ...
    }
    get Template() {
        return `<section class="row justify-content-center">
    <div class="col-6 card text-center">
      <h2>${this.name}</h2>
      <button class="btn btn-primary" onclick="app.vendrController.buySnack('${this.name}')">${this.price}</button>
    </div>
  </section>`
    }
}

