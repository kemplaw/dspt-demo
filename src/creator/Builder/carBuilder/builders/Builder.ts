/**
 * @description: 生成器基类
 */

import CarType from '../cars/CarType'
import Engine from '../components/Engine'
import GPSNavigator from '../components/GPSNavigator'

export default interface Builder {
  setType(type: CarType): void
  setEngine(engin: Engine): void
  setGPSNavigator(GPSNavigator: GPSNavigator): void
}
