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
        return /*html*/`
    <div class="col-md-4 mb-3">
        <div id="${this.id + '-card'}" class="card shadow">
            <img class="card-img-top p-4 img-card" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title"><u>${this.bedrooms} Bed | ${this.bathrooms} Bath | ${this.levels}-Story</u></h4>
                <h5 class="card-title">${this.year}</h5>
                <p class="card-text">${this.description}</p>
                <h5 class="text-right">$${this.price.toFixed(2)} / Month</h5>
            </div>
            <div class="px-4 pb-4 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
                <button type="button" class="btn btn-success" onclick="app.housesController.edit('${this.id}')"><big>Edit</big></button>
                <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
            </div>
        </div>

        <form id="${this.id}" onsubmit="app.housesController.editHouse('${this.id}')" class="d-none card shadow">
            <button class="btn btn-danger d-flex align-self-start mt-3 ml-3" onclick="app.carsController.close('${this.id}')"><i class="fas fa-times"></i> </button>
            <div class="modal-body p-4">
                <div class="row justify-content-between">
                    <div class="form-group col-4">
                        <label for="bedrooms">Bedrooms</label>
                        <input type="number" class="form-control" id="bedrooms" value="${this.bedrooms}" placeholder="Bedrooms..." min="1" required>
                    </div>
                    <div class="form-group col-4">
                        <label for="bathrooms">Bathrooms</label>
                        <input type="number" class="form-control" id="bathrooms" value="${this.bathrooms}" placeholder="Bathrooms..." min="1" required>
                    </div>
                    <div class="form-group col-4">
                        <label for="levels">Levels</label>
                        <input type="number" class="form-control" id="levels" value="${this.levels}" placeholder="Levels..." min="1"
                            max="80" required>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="form-group col-6">
                        <label for="year">Year</label>
                        <input type="number" class="form-control" id="year" value="${this.year}" placeholder="Year..." min="1800" required>
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