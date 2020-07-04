window.prompt('What is your name?')
window.prompt('What is the name of your crush?')
let loveScore = Math.random()
loveScore = Math.floor(loveScore * 100) + 1
if (loveScore > 70) {
  window.alert('Your love score is ' + loveScore + ' % and you love each other as flower and bee.')
} else if (loveScore >= 30 && loveScore <= 70) {
  window.alert('Your love score is ' + loveScore + ' % but you are not head over heels for each other.')
} else {
  window.alert('Your love score is ' + loveScore + ' % and you match like oil and water.')
}
