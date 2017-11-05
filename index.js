'use strict'

const findLastIndex = require('lodash.findlastindex')
const { POSITIVE_INFINITY, isNaN } = Number
const { abs } = Math

module.exports = (value, steps) => {
  const index = findLastIndex(steps, step => step.value <= value)

  // Out of bounds?
  if (index === -1) return steps[0].norm
  if (index >= steps.length - 1) return steps[steps.length - 1].norm

  const stepLow = steps[index]
  const stepHigh = steps[index + 1]

  const normalizedValue =
    stepLow.norm +
    (stepHigh.norm - stepLow.norm) *
      (value - stepLow.value) /
      (stepHigh.value - stepLow.value)

  // Invalid calculation?
  if (isNaN(normalizedValue) || abs(normalizedValue) === POSITIVE_INFINITY) {
    throw new Error('Invalid value or steps')
  }

  return normalizedValue
}
