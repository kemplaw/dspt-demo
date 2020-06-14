/**
 * @description: 引擎类
 */
export default class Engine {
  constructor(private started: boolean, private mileage: number) {}

  public on(): void {
    this.started = true
  }

  public off() {
    this.started = false
  }

  public get isStarted(): Boolean {
    return this.started
  }

  public get getMileage(): number {
    return this.mileage
  }

  public go(mileage: number) {
    if (this.started) {
      return (this.mileage += mileage)
    }

    console.log('cannot go, you must start engine first')
  }
}
