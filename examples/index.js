'use strict';

var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( './../lib' );

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
