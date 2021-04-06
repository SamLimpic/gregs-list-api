export default class Car {
    constructor({ make, model, year, price, description, imgUrl, id }) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
        this.id = id
    }

    get Template() {
        return `
    <div class="col-md-4 mb-3">
        <div class="card shadow">
            <img class="card-img-top p-4" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title"><u>${this.make} | ${this.model}</u></h4>
                <h5 class="card-title">${this.year}</h5>
                <p class="card-text">${this.description}</p>
                <h5 class="text-right">$${this.price.toFixed(2)}</h5>
            </div>
            <div class="px-4 pb-4 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><big>Delete</big></button>
                <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')"><big>Bid</big></button>
            </div>
        </div>
    </div>
    `
    }
}