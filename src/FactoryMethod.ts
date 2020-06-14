/**
 * @description: 工厂方法模式实例
 */

//  抽象类
interface Button {
  style: object
  label: string
  onClick(): void
  render(): void
}

// 抽象类的具体实现
class WindowsButton implements Button {
  window = {
    init: (style: object): void => {
      console.log('window button is init')
    }
  }
  style: object = { style: 'windowBorderStyle' }

  constructor(public label: string) {}

  onClick(): void {
    console.log('windows button is clicked')
  }

  render() {
    this.window.init(this.style)
  }
}

class MacButton implements Button {
  mac = {
    init: (style: object): void => {
      console.log('mac button is init')
    }
  }
  style: object = { style: 'macBorderStyle' }

  constructor(public label: string) {}

  onClick(): void {
    console.log('mac button is clicked')
  }

  render() {
    this.mac.init(this.style)
  }
}

abstract class ButtonCreatorFactory {
  abstract createButton(label: string): Button

  renderButton(label: string) {
    const button = this.createButton(label)
    button.render()
    button.onClick()
  }
}

class WindowsButtonCreatorFactory extends ButtonCreatorFactory {
  createButton(label: string): Button {
    return new WindowsButton(label)
  }
}

class MacButtonCreatorFactory extends ButtonCreatorFactory {
  createButton(label: string): Button {
    return new MacButton(label)
  }
}

// 客户端代码
function client(buttonCreator: ButtonCreatorFactory) {
  buttonCreator.renderButton('按钮')
}

client(new WindowsButtonCreatorFactory())
