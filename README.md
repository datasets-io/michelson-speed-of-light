Speed of Light
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Dataset from [Michelson](https://en.wikipedia.org/wiki/Albert_A._Michelson)'s speed of light measurements in 1879.


## Installation

``` bash
$ npm install datasets-michelson-speed-of-light
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var data = require( 'datasets-michelson-speed-of-light' );
```

#### data

Dataset from [Albert Michelson](https://en.wikipedia.org/wiki/Albert_A._Michelson)'s speed of light [measurements](http://www.itl.nist.gov/div898/strd/univ/data/Michelso.dat) made from June 5 to July 2, 1879. The dataset comprises `5` experiments, each having `20` runs, thus yielding `100` measurements. Measurement values are in units of __millions of meters per second__.

``` javascript
console.log( data );
/*
	[
		[299.85, 299.74, 299.9, ...],
		[299.96, 299.94, 299.96, ...],
		[299.88, 299.88, 299.88, ...],
		[299.89, 299.81, 299.81, ...],
		[299.89, 299.84, 299.78, ...]
	]
*/
```


## Examples

``` javascript
var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	stdev = require( 'compute-stdev' ),
	data = require( 'datasets-michelson-speed-of-light' );

var mat,
	mu,
	s2;

// Convert the data into a matrix:
mat = toMatrix( data );
/*
    [ 299.85  299.74  299.9  ...
        .    .           .
        .       .        .
        .          .     .
      299.89  299.84  299.78 ... ]
*/

// Calculate the sample mean across the rows (experiments):
mu = mean( mat );
/*
    [ mu_1
      mu_2
      mu_3
      mu_4
      mu_5 ]
*/

// Calculate the sample variance across the rows:
s2 = variance( mat );
/*
    [ s2_1
      s2_2
      s2_3
      s2_4
      s2_5 ]
*/

// Calculate the mean across all experiments:
console.log( mean( mu ) );
// returns 299.8524 => true value is 299,792,458 m/s
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

* 	Dorsey, Ernest N. (1944). "The Velocity of Light." *Transactions of the American Philosophical Society*, Volume 34, Part 1, Pages 1-110, Table 22.



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-michelson-speed-of-light.svg
[npm-url]: https://npmjs.org/package/datasets-michelson-speed-of-light

[travis-image]: http://img.shields.io/travis/datasets-io/michelson-speed-of-light/master.svg
[travis-url]: https://travis-ci.org/datasets-io/michelson-speed-of-light

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/michelson-speed-of-light/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/michelson-speed-of-light?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/michelson-speed-of-light.svg
[dependencies-url]: https://david-dm.org/datasets-io/michelson-speed-of-light

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/michelson-speed-of-light.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/michelson-speed-of-light

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/michelson-speed-of-light.svg
[github-issues-url]: https://github.com/datasets-io/michelson-speed-of-light/issues
