const merge = require('utils/merge')

describe('Merge', () => {
  it('isPlainObject', () => {
    expect(merge.isPlainObject(1)).toBe(false)
    expect(merge.isPlainObject({})).toBe(true)
    expect(merge.isPlainObject([])).toBe(false)
    expect(merge.isPlainObject(new Date())).toBe(false)
  })

  it('simply merge', () => {
    const o1 = { foo: 1 }
    const o2 = { bar: 1 }

    expect(merge(o1, o2)).toEqual({
      foo: 1,
      bar: 1,
    })
  })

  it('complicatedly merge', () => {
    const o1 = { foo: 1 }
    const o2 = {
      bar: {
        foo: 2,
      },
      foo2: [1, 2],
      foo3: 3,
    }
    const o3 = {
      foo2: [3, 4],
    }

    expect(merge(o1, o2, o3)).toEqual({
      foo: 1,
      bar: {
        foo: 2,
      },
      foo2: [1, 2, 3, 4],
      foo3: 3,
    })
  })

  it('reference check', () => {
    const o1 = {
      foo: {
        bar: 2,
        arr: [1, 2],
      },
    }

    const mergedObj = merge(o1)

    mergedObj.foo.bar = 3
    mergedObj.foo.arr.push(1)

    expect(o1.foo.bar).toBe(2)
    expect(o1.foo.arr.length).toBe(2)
  })
})
