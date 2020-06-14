import CarType from './CarType'
import Engine from '../components/Engine'
import GPSNavigator from '../components/GPSNavigator'

/**
 * @description: 汽车类
 */
export default class Car {
  constructor(private type: CarType, private engine: Engine, private GPSNavigator: GPSNavigator) {}

  public get getType(): CarType {
    return this.type
  }

  public get getEngine(): Engine {
    return this.engine
  }

  public get getGPSNavigator(): GPSNavigator {
    return this.GPSNavigator
  }
}
