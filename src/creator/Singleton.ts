class Singleton {
  private static instance: Singleton

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}

function singletonTest() {
  const singletonIns = Singleton.getInstance()
  const singletonInsB = Singleton.getInstance()

  console.log('是否为同一个单例', singletonIns === singletonInsB)
}

singletonTest()
