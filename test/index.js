'use strict'

const should = require('should')
const normalizeValue = require('..')

describe('normalize-value', function () {
  it('normalize correctly', function () {
    const normalizedValue = normalizeValue(500, [
      { value: 0, norm: 1 },
      { value: 1000, norm: 0 }
    ])

    should(normalizedValue).be.equal(0.5)
  })
})
