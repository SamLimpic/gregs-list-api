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
        return /*html*/`
    <div class="col-md-4 mb-3">
        <div id="${this.id + '-card'}" class="card shadow">
            <img class="card-img-top p-4" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title"><u>${this.make} | ${this.model}</u></h4>
                <h5 class="card-title">${this.year}</h5>
                <p class="card-text">${this.description}</p>
                <h5 class="text-right">$${this.price.toFixed(2)}</h5>
            </div>
            <div class="px-4 pb-4 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><big>Delete</big></button>
                <button type="button" class="btn btn-success" onclick="app.housesController.edit('${this.id}')"><big>Edit</big></button>
                <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')"><big>Bid</big></button>
            </div>
        </div>

        <form id="${this.id}" onsubmit="app.carsController.editCar('${this.id}')" class="d-none card shadow">
            <button class="btn btn-danger d-flex align-self-start mt-3 ml-3" onclick="app.carsController.close('${this.id}')"><i class="fas fa-times"></i> </button>
            <div class="modal-body p-4">
                <div class="row justify-content-between">
                    <div class="form-group col-6">
                        <label for="make">Make</label>
                        <input type="text" class="form-control" id="make" value="${this.make}" placeholder="Make..." minlength="3" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="model">Model</label>
                        <input type="text" class="form-control" id="model" value="${this.model}" placeholder="Model..." minlength="3" required>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="form-group col-6">
                        <label for="year">Year</label>
                        <input type="number" class="form-control" id="year" value="${this.year}" placeholder="Year..." min="1"
                            max="80" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="price">Price</label>
                        <input type="number" class="form-control" id="price" value="${this.price}" placeholder="Price..." min="1" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" value="${this.description}" placeholder="Description..." maxlength="50">
                </div>
                <div class="form-group">
                    <label for="imgUrl">Image Url</label>
                    <input type="text" class="form-control" id="imgUrl" value="${this.imgUrl}" placeholder="Image Url...">
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success"><big>Save</big></button>
            </div>
        </form>


    </div>
    `
    }
}