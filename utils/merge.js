function isArray(target) {
  return Array.isArray(target)
}

function isPlainObject(target) {
  return (
    target.toString() === '[object Object]' && target.constructor === Object
  )
}

function isMergeable(target) {
  return isArray(target) || isPlainObject(target)
}

function containsKey(target, key) {
  return key in target
}

function merge(...targets) {
  const result = {}

  targets.reduce((res, target) => {
    if (isMergeable(target)) {
      Object.keys(target).forEach((key) => {
        if (isMergeable(target[key])) {
          const isResArray = isArray(res[key])
          const isTargetArray = isArray(target[key])
          const bothAreArray = isResArray && isTargetArray
          const resHasKey = containsKey(res, key)

          res[key] = bothAreArray
            ? res[key].concat(target[key])
            : isTargetArray
            ? [...target[key]]
            : resHasKey
            ? merge(res[key], target[key])
            : merge(target[key])
        } else {
          res[key] = target[key]
        }
      })
    }

    return res
  }, result)

  return result
}

merge.isArray = isArray
merge.isPlainObject = isPlainObject
merge.isMergeable = isMergeable

Object.freeze(merge)

module.exports = merge
