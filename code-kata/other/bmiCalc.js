// bmiCalculator

function bmiCalculator (weight, height) {
  let n = weight / Math.pow(height, 2)
  n = n.toFixed(1)
  if (n < 18.5) {
    return ('Your BMI is ' + Math.floor(n) + ', so you are underweight.')
  } else if (n >= 18.5 && n <= 24.9) {
    return ('Your BMI is ' + Math.floor(n) + ', so you have a normal weight.')
  } else if (n > 24.9) {
    return ('Your BMI is ' + Math.floor(n) + ', so you are overweight.')
  }
}
bmiCalculator(55, 1.67)
