import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


//Private
function _draw() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

//Public
export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw);

    this.getJobs()
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }

  async createJob() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newJob = {
        // @ts-ignore
        make: form.make.value,
        // @ts-ignore
        model: form.model.value,
        // @ts-ignore
        year: form.year.value,
        // @ts-ignore
        price: Number(form.price.value),
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value
      }
      await jobsService.createJob(newJob)

      // @ts-ignore
      form.reset()

      $('#new-job-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  deleteJob(id) {
    try {
      jobsService.deleteJob(id)
    } catch (error) {
      console.error(error)
    }
  }

  edit(id) {
    document.getElementById(`${id + "-card"}`).classList.add("d-none")
    document.getElementById(id).classList.remove("d-none")
  }

  close(id) {
    document.getElementById(`${id + "-card"}`).classList.remove("d-none")
    document.getElementById(id).classList.add("d-none")
  }

  async editJob(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let modJob = {
        // @ts-ignore
        company: form.company.value,
        // @ts-ignore
        title: form.title.value,
        // @ts-ignore
        hours: form.hours.value,
        // @ts-ignore
        rate: form.rate.value,
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value
      }
      await jobsService.editJob(id, modJob)

    } catch (error) {
      console.error(error)
    }
    document.getElementById(`${id + "-card"}`).classList.remove("d-none")
    document.getElementById(id).classList.add("d-none")
  }


  apply(id) {
    jobsService.apply(id)
  }

}