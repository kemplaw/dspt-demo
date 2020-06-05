interface Product {
  operation(): string
}

class Product1 implements Product {
  operation(): string {
    return 'product 1'
  }
}

class Product2 implements Product {
  operation(): string {
    return 'product 2'
  }
}

abstract class Creator {
  abstract factoryMethod(): Product

  someOperation(): string {
    const product = this.factoryMethod()

    return `create the new product ${product.operation()}`
  }
}

class ProductCreator1 extends Creator {
  factoryMethod(): Product {
    return new Product1()
  }
}

class ProductCreator2 extends Creator {
  factoryMethod(): Product {
    return new Product2()
  }
}

function clientCode(creator: Creator) {
  console.log(`prodcut operation in client ${creator.someOperation()}`)
}

clientCode(new ProductCreator1())
clientCode(new ProductCreator2())
