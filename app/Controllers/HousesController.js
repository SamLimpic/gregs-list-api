import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw);

    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newHouse = {
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
      await housesService.createHouse(newHouse)

      // @ts-ignore
      form.reset()

      $('#new-house-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  deleteHouse(id) {
    try {
      housesService.deleteHouse(id)
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

  async editHouse(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let modHouse = {
        // @ts-ignore
        bedrooms: form.bedrooms.value,
        // @ts-ignore
        bathrooms: form.bathrooms.value,
        // @ts-ignore
        levels: form.levels.value,
        // @ts-ignore
        year: form.year.value,
        // @ts-ignore
        price: Number(form.price.value),
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value
      }
      await housesService.editHouse(id, modHouse)

    } catch (error) {
      console.error(error)
    }
    document.getElementById(`${id + "-card"}`).classList.remove("d-none")
    document.getElementById(id).classList.add("d-none")
  }


  bid(id) {
    housesService.bid(id)
  }

}