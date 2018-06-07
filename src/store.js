import {action, observable, decorate} from 'mobx'

class Store {
  constructor () {
    this.value = 0
  }

  addValue = (n) => {
    this.value += n
  }
}

const StoreClass = decorate(
  Store, {
    value: observable,
    addValue: action
  }
)
export default StoreClass
