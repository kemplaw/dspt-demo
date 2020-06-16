class Target {
  request(): string {
    return `target: the default target's behavior`
  }
}

// 需要被适配的类
class Adaptee {
  specificRequest(): string {
    return `.eetpadA eht fo roivaheb laicepS`
  }
}

class TargetAdapter extends Target {
  constructor(private adaptee: Adaptee) {
    super()
  }

  request(): string {
    return `Adapted Result: ${this.adaptee
      .specificRequest()
      .split('')
      .reverse()
      .join('')}`
  }
}

function adapterTest() {
  const target = new TargetAdapter(new Adaptee())

  console.log(target.request())
}

adapterTest()
