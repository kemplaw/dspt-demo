/**
 * @description: 抽象工厂模式实例
 */

// 声明产品接口
interface Cell {
  label: string
  shape: string
  color: string
  backgroundColor: string
  borderStyle: object
  onClick(): void
  render(): void
}

interface Checkbox {
  label: string
  shape: string
  checked: boolean
  onCheck(): void
  render(): void
}

// 抽象 UILirary 工厂
abstract class AbstractUILibrary {
  abstract createCell(): Cell
  abstract createCheckbox(): Checkbox

  // 返回 UILirary
  exportUILibrary(): { cell: Cell; checkbox: Checkbox } {
    const cell = this.createCell()
    const checkbox = this.createCheckbox()

    return {
      cell,
      checkbox
    }
  }
}

// windows 下的 cell 类
class WindowsCell implements Cell {
  color: string = 'defaultWindowsCell'
  style: object = { default: 'defaultWindowsCellStyle' }
  backgroundColor: string = 'defaultWindowsBackgroundColor'
  shape: string = 'windowsCellShape'
  borderStyle: object = {
    border: 'windowsBorder',
    borderColor: 'windowsBorderColor',
    borderType: 'windowsBorderType'
  }

  constructor(public label: string) {}

  onClick() {
    console.log('windows cell is clicked')
  }
  render() {
    console.log(`在windows下这个cell是 ${this.color} 色，样子是${this.style}，内容是${this.label}`)
  }
}

// mac 下的 cell 类
class MacCell implements Cell {
  color: string = 'defaultMacCell'
  style: object = { default: 'defaultMacCellStyle' }
  backgroundColor: string = 'defaultMacBackgroundColor'
  shape: string = 'macCellShape'
  borderStyle: object = {
    border: 'macBorder',
    borderColor: 'macBorderColor',
    borderType: 'macBorderType'
  }

  constructor(public label: string) {}

  onClick() {
    console.log('mac cell is clicked')
  }
  render() {
    console.log(`在mac下这个cell是 ${this.color} 色，样子是${this.style}，内容是${this.label}`)
  }
}

// windows 下 checkbox 类的具体实现
class WindowsCheckbox implements Checkbox {
  shape: string = 'windows checkbox shape'
  checked: boolean = false

  constructor(public label: string) {}

  onCheck(): void {
    console.log('windows checkbox checked')
  }
  render(): void {
    console.log(
      `在 windows 下 checkbox的样式为：shape => ${this.shape}, checked => ${this.checked}`
    )
  }
}

// mac 下 checkbox 类的具体实现
class MacCheckbox implements Checkbox {
  shape: string = 'mac checkbox shape'
  checked: boolean = false

  constructor(public label: string) {}

  onCheck(): void {
    console.log('mac checkbox checked')
  }
  render(): void {
    console.log(`在 mac 下 checkbox的样式为：shape => ${this.shape}, checked => ${this.checked}`)
  }
}

// windows UILibrary 工厂
class WindowsUILiraryFactory extends AbstractUILibrary {
  createCheckbox(): Checkbox {
    return new WindowsCheckbox('windows checkbox')
  }
  createCell(): Cell {
    return new WindowsCell('windows cell')
  }
}

// Mac UILibrary 工厂
class MacUILibraryFactory extends AbstractUILibrary {
  createCell(): Cell {
    return new MacCell('mac cell')
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox('mac checkbox')
  }
}

// 客户端
function uiLibraryClient(UILibrary: AbstractUILibrary) {
  console.log(UILibrary.exportUILibrary())
}

uiLibraryClient(new MacUILibraryFactory())
