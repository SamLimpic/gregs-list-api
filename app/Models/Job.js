export default class Job {
    constructor({ company, jobTitle, hours, rate, description, imgUrl = "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg", id }) {
        this.company = company
        this.title = jobTitle
        this.hours = hours
        this.rate = rate
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
                <h4 class="card-title"><u>${this.company} | ${this.title}</u></h4>
                <h5 class="card-title">${this.hours} Hours / Week</h5>
                <p class="card-text">${this.description}</p>
                <h5 class="text-right">$${this.rate.toFixed(2)} / Hour</h5>
            </div>
            <div class="px-4 pb-4 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteJob('${this.id}')"><big>Delete</big></button>
                <button type="button" class="btn btn-info" onclick="app.carsController.apply('${this.id}')"><big>Apply</big></button>
            </div>
        </div>
    </div>
    `
    }
}