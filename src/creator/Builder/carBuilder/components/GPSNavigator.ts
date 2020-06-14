/**
 * @description: GPS导航类
 */

export default class GPSNavigator {
  constructor(private route: string = 'no route') {}

  public get getRoute(): string {
    return this.route
  }

  GPSNavigator(manualRoute: string) {
    this.route = manualRoute
  }
}
