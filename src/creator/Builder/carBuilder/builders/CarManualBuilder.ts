/**
 * @description: 汽车说明书生成器类
 */

import CarBuilder from './CarBuilder'
import Manual from '../cars/Manual'

export default class CarManualBuilder extends CarBuilder {
  getResult(): Manual {
    return new Manual(this.type, this.engin, this.gpsNavigator)
  }
}
