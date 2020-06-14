/**
 * @description: 汽车生成器类
 */

import Builder from './Builder'
import GPSNavigator from '../components/GPSNavigator'
import Engine from '../components/Engine'
import CarType from '../cars/CarType'
import Car from '../cars/Car'

export default class CarBuilder implements Builder {
  protected type: CarType
  protected engin: Engine
  protected gpsNavigator: GPSNavigator

  setType(type: CarType): void {
    this.type = type
  }
  setEngine(engin: Engine): void {
    this.engin = engin
  }
  setGPSNavigator(GPSNavigator: GPSNavigator): void {
    this.gpsNavigator = GPSNavigator
  }
  getResult(): Car {
    return new Car(this.type, this.engin, this.gpsNavigator)
  }
}
