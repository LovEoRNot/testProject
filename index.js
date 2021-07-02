import { SyncBailHook } from 'tapable'
import { assign, meNew } from './src/add'
import paint from './src/paint'
import './src/style.scss'

const hook = new SyncBailHook(['a'])

hook.tap('1', (a) => {
  console.log('1', a)
})

hook.tap('1', (a) => {
  console.log('2', a)
})

hook.tap('1', (a) => {
  console.log('3', a)
  return true
})

hook.tap('1', (a) => {
  console.log('4', a)
})

hook.call('test')

var x = assign({}, {a: 1}, {b: 2, [Symbol('a')]: 'symbol'})
console.log(x)

if (module.hot) {
  module.hot.accept()
}

function Test(name) {
  this.name = name
}

const test = meNew(Test, 'nook')
console.log(test)

paint()