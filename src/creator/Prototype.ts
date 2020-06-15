enum ShapeKeyMap {
  blueRectangle = 'blueRectangle',
  redCircle = 'redCircle'
}

interface Cloneable<T> {
  clone(): T
}

abstract class Shape implements Cloneable<Shape> {
  x: number
  y: number
  color: string

  abstract clone(): Shape
}

class Circle extends Shape {
  radius: number

  clone(): Shape {
    const clone: this = Object.create(this)
    clone.radius = this.radius

    return clone
  }
}

class Rectangle extends Shape {
  width: number
  height: number

  clone(): Shape {
    const clone: this = Object.create(this)
    clone.width = this.width
    clone.height = this.height

    return clone
  }
}

class BundleShapeCache {
  private shapeCaches: Map<string, Shape> = new Map()

  constructor() {
    const circle = new Circle()
    circle.x = 5
    circle.y = 7
    circle.radius = 45
    circle.color = 'red'

    const rectangle = new Rectangle()
    rectangle.x = 6
    rectangle.y = 9
    rectangle.width = 8
    rectangle.height = 10
    rectangle.color = 'blue'

    this.put(ShapeKeyMap.redCircle, circle)
    this.put(ShapeKeyMap.blueRectangle, rectangle)
  }

  put(key: ShapeKeyMap, shape: Shape) {
    this.shapeCaches.set(key, shape)
  }

  get(key: ShapeKeyMap): Shape {
    return this.shapeCaches.get(key).clone()
  }
}

function prototypeTest() {
  const bundleShapeCache = new BundleShapeCache()
  const shape1: Shape = bundleShapeCache.get(ShapeKeyMap.redCircle)
  const shape2: Shape = bundleShapeCache.get(ShapeKeyMap.blueRectangle)

  console.log(shape1)
  console.log(shape2)
  console.log(shape1 === shape2)
}

prototypeTest()
