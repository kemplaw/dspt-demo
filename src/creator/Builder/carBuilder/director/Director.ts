/**
 * @description: 主管类
 */

import Builder from '../builders/Builder'
import CarType from '../cars/CarType'
import Engine from '../components/Engine'
import GPSNavigator from '../components/GPSNavigator'

export default class Director {
  // 构建运动汽车
  constructSportsCar(builder: Builder) {
    builder.setType(CarType.SportsCar)
    builder.setEngine(new Engine(true, 0))
    builder.setGPSNavigator(new GPSNavigator())
  }

  // 构建城市汽车
  constructCityCar(builder: Builder) {
    builder.setType(CarType.CityCar)
    builder.setEngine(new Engine(true, 0))
    builder.setGPSNavigator(new GPSNavigator())
  }
}
