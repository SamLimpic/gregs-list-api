import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";


class JobsService {

  async getJobs() {
    let res = await api.get('jobs')
    console.log(res.data)
    ProxyState.jobs = res.data.map(c => new Job(c))
  }

  async createJob(newJob) {
    let res = await api.post('jobs', newJob)
    console.log(res.data)

    res.data.id = res.data._id
    let job = new Job(res.data)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }

  async deleteJob(id) {
    await api.delete('jobs/' + id)
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }

  async editJob(id, modJob) {
    await api.put('jobs/' + id, modJob)
    ProxyState.jobs = ProxyState.jobs
  }

  async apply(id) {
    let job = ProxyState.jobs.find(job => job.id === id)
    job.applied = true
    ProxyState.jobs = ProxyState.jobs
  }

}

export const jobsService = new JobsService();