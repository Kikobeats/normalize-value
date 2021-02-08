'use strict'

const findLastIndex = (arr, func) => {
  const reverseIdx = [...arr].reverse().findIndex(func)
  return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx + 1)
}

module.exports = (value, steps) => {
  const index = findLastIndex(steps, step => step.value <= value)

  // Out of bounds?
  if (index === -1) return steps[0].norm
  if (index >= steps.length - 1) return steps[steps.length - 1].norm

  const stepLow = steps[index]
  const stepHigh = steps[index + 1]

  const normalizedValue =
    stepLow.norm +
    ((stepHigh.norm - stepLow.norm) * (value - stepLow.value)) / (stepHigh.value - stepLow.value)

  // Invalid calculation?
  if (Number.isNaN(normalizedValue) || Math.abs(normalizedValue) === Number.POSITIVE_INFINITY) {
    throw new Error('Invalid value or steps')
  }

  return normalizedValue
}
