/* More generally given parameters:
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Note: Don't forget to convert the percent parameter as a percentage in the body of your function:
if the parameter percent is 2 you have to convert it to 0.02.
*/

function nbYear (p0, percent, aug, p) {
  let years = 0
  while (p0 < p) {
    p0 = p0 + (p0 * percent / 100) + aug
    years++
  }
  return years
}

nbYear(1500, 5, 100, 5000)
