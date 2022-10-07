# @dimensionalpocket/fps

[![build](https://github.com/dimensionalpocket/fps-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/dimensionalpocket/fps-js/actions/workflows/node.js.yml)

Frames-per-second counter for Javascript.

## Usage

```javascript
import Fps from '@dimensionalpocket/fps'

// Initialize a counter with a given sample size in frames.
// Default sample size is 60 (1 second).
// Larger sizes affect average calculations.
const fps = new Fps(300) // 5 seconds

// Synchronous usage (no await):
fps.start()
// ... your code
fps.stop()

// Synchronous or asynchronous:
var startAt = fps.now()
// ... your code
fps.add(fps.now() - startAt)

// Returns the average FPS
fps.average()

// Usage with reactive libs
fps.total            // returns the sum of all given values
fps.size             // the sample count
fps.total / fps.size // the average value
fps.max              // the largest value (resets every 10 iterations)
```

## License

MIT
