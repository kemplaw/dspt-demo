/**
 * @description: 说明书类
 */
import Car from './Car'

export default class Manual extends Car {
  print(): string {
    let info: string = ''
    info = `
    
      Type of car: ${this.getType} \n
      Engine: mileage - ${this.getEngine.getMileage} \n
      NavigatorRoute: ${this.getGPSNavigator.getRoute}
    `

    return info
  }
}
