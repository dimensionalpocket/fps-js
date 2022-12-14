/* c8 ignore start */
var defaultNow
if (typeof window !== 'undefined' && window.performance) {
  defaultNow = window.performance.now.bind(window.performance)
} else {
  defaultNow = function () { return new Date() }
}
/* c8 ignore stop */

export class Fps {
  constructor (size) {
    this.size = size || 60
    this._samples = new Float64Array(this.size)
    this._position = 0
    this._resets = 0
    this.now = defaultNow
    this.startTime = 0.0
    this.total = 0.0
    this.max = 0.0
  }

  start () {
    this.startTime = this.now()
  }

  end () {
    this.add(this.now() - this.startTime)
  }

  add (time) {
    var s = this._samples
    var p = this._position
    this.total += time - s[p]
    s[p] = time
    this._position++
    if (this._position > this.size - 1) {
      this._position = 0
      this._resets++
    }
    if (time > this.max || this._resets % 10 === 0) {
      this.max = time
    }
  }

  average () {
    var avg = this.averageSample()
    return 1000 / avg
  }

  averageSample () {
    return this.total / this.size
  }
}
