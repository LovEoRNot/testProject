export default function add() {
  const a = '{a}'
  let b = 2
  return a + b
}

export function assign(target, ...source) {
  const descriptors = source.reduce((descriptors, object) => {
    Object.keys(object).forEach(key => {
      const descriptor = Object.getOwnPropertyDescriptor(object, key)
      descriptors[key] = descriptor
    })
    Object.getOwnPropertySymbols(object).forEach(sym => {
      const descriptor = Object.getOwnPropertyDescriptor(object, sym)
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor
      }
    })
    return descriptors
  }, {})

  Object.defineProperties(target, descriptors)

  return target
}

export function meNew(F, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, F.prototype)
  const res = F.apply(obj, args)

  if (res === null) return obj

  return typeof res == "object" ? res : obj
}

console.log(this === global)