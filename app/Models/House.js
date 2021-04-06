export default class House {
    constructor({ bedrooms, bathrooms, levels, year, price, description, imgUrl, id }) {
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
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
              <h4 class="card-title"><u>${this.bedrooms} Bed | ${this.bathrooms} Bath | ${this.levels}-Story</u></h4>
              <h5 class="card-title">${this.year}</h5>
              <p class="card-text">${this.description}</p>
              <h5 class="text-right">$${this.price.toFixed(2)} / Month</h5>
          </div>
          <div class="px-4 pb-4 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
    }
}