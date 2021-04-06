import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";


//Private
function _draw() {
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

//Public
export default class CarsController {
  constructor() {
    ProxyState.on('cars', _draw);

    this.getCars()
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      console.error(error)
    }
  }

  async createCar() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newCar = {
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
      await carsService.createCar(newCar)

      // @ts-ignore
      form.reset()

      $('#new-car-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  deleteCar(id) {
    try {
      carsService.deleteCar(id)
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

  async editCar(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let modCar = {
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
      await carsService.editCar(id, modCar)

    } catch (error) {
      console.error(error)
    }
    document.getElementById(`${id + "-card"}`).classList.remove("d-none")
    document.getElementById(id).classList.add("d-none")
  }


  bid(id) {
    carsService.bid(id)
  }

}