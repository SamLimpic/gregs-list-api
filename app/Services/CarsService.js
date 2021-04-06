import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";


class CarsService {

  async getCars() {
    let res = await api.get('cars')
    console.log(res.data)
    ProxyState.cars = res.data.map(c => new Car(c))
  }

  async createCar(newCar) {
    let res = await api.post('cars', newCar)
    console.log(res.data)

    res.data.id = res.data._id
    let car = new Car(res.data)
    ProxyState.cars = [...ProxyState.cars, car]
  }

  async deleteCar(id) {
    await api.delete('cars/' + id)
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }

  async editCar(id, modCar) {
    await api.put('cars/' + id, modCar)
    ProxyState.cars = ProxyState.cars
  }

  async bid(id) {
    let car = ProxyState.cars.find(car => car.id === id)
    car.price += 100
    await api.put('cars/' + id, { price: car.price })
    ProxyState.cars = ProxyState.cars
  }

}

export const carsService = new CarsService();