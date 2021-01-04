import { observable } from 'mobx'
import {requestData} from '../untils/api'

const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      requestData({url:''})
      this.counter++
    }, 1000)
  }
})

export default counterStore