class Clock {
  constructor ({ template }) {
    this.template = template
    const date = new Date()
    this.hours = date.getHours()
    this.mins = date.getMinutes()
    this.secs = date.getSeconds()
  }

  render () {
    if (this.hours < 10) this.hours = '0' + this.hours
    if (this.mins < 10) this.mins = '0' + this.mins
    if (this.secs < 10) this.secs = '0' + this.secs
    const output = this.template
      .replace('h', this.hours)
      .replace('m', this.mins)
      .replace('s', this.secs)

    console.log(output)
  }

  stop () {
    clearInterval(this.timer)
  }

  start () {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}

const clock = new Clock({ template: 'h:m:s' })
clock.start()
