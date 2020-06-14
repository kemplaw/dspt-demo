import Director from './director/Director'
import CarBuilder from './builders/CarBuilder'
import CarManualBuilder from './builders/CarManualBuilder'
import Car from './cars/Car'
import Manual from './cars/Manual'

class CarBuilderDemo {
  constructor() {
    const director = new Director()
    const carBuilder = new CarBuilder()
    const carManualBuilder = new CarManualBuilder()

    // 制造运动汽车
    director.constructSportsCar(carBuilder)
    director.constructSportsCar(carManualBuilder)
    const sportsCar: Car = carBuilder.getResult()
    const sportsCarManual: Manual = carManualBuilder.getResult()
    console.log(`sports car's type is ${sportsCar.getType}`)
    console.log(`sports car's manual is ${sportsCarManual.print()}`)

    // 制造城市汽车
    director.constructCityCar(carBuilder)
    director.constructCityCar(carManualBuilder)
    const cityCar: Car = carBuilder.getResult()
    const cityCarManual: Manual = carManualBuilder.getResult()
    console.log(`city car's type is ${cityCar.getType}`)
    console.log(`city car's manual is ${cityCarManual.print()}`)
  }
}

new CarBuilderDemo()
