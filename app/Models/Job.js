export default class Job {
    constructor({ company, jobTitle, hours, rate, description, imgUrl = "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg", id, applied = false }) {
        this.company = company
        this.title = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
        this.imgUrl = imgUrl
        this.id = id
        this.applied = applied
    }

    get Template() {
        let apply = "Apply"
        let appColor = "info"
        if (this.applied == true) {
            apply = "Applied"
            appColor = "primary"
        }
        return `
    <div class="col-md-4 mb-3">
        <div id="${this.id + '-card'}" class="card shadow">
            <img class="card-img-top p-4" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title"><u>${this.company} | ${this.title}</u></h4>
                <h5 class="card-title">${this.hours} Hours / Week</h5>
                <p class="card-text">${this.description}</p>
                <h5 class="text-right">$${this.rate.toFixed(2)} / Hour</h5>
            </div>
            <div class="px-4 pb-4 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')"><big>Delete</big></button>
                <button type="button" class="btn btn-success" onclick="app.jobsController.edit('${this.id}')"><big>Edit</big></button>
                <button type="button" class="btn btn-${appColor}" onclick="app.jobsController.apply('${this.id}')"><big>${apply}</big></button>
            </div>
        </div>
        
        <form id="${this.id}" onsubmit="app.jobsController.editJob('${this.id}')" class="d-none card shadow">
            <button class="btn btn-danger d-flex align-self-start mt-3 ml-3" onclick="app.carsController.close('${this.id}')"><i class="fas fa-times"></i> </button>
            <div class="modal-body p-4">
                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" class="form-control" id="company" value="${this.company}" placeholder="Company..." minlength="3" required>
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" value="${this.title}" placeholder="Title..." minlength="3" required>
                </div>

                <div class = "row justify-content-between">
                    <div class="form-group col-6">
                        <label for="hours">Hours</label>
                        <input type="number" class="form-control" id="hours" value="${this.hours}" placeholder="Hours..." min="1"
                            max="80" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="rate">Rate</label>
                        <input type="number" class="form-control" id="rate" value="${this.rate}" placeholder="Rate..." min="15" required>
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