/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-michelson-speed-of-light', function tests() {

	it( 'should export an array', function test() {
		expect( data ).to.be.an( 'array' );
		assert.strictEqual( data.length, 5 );
	});

	it( 'should be an array of arrays', function test() {
		var len = data.length,
			i;

		for ( i = 0; i < len; i++ ) {
			assert.isArray( data[ i ], i );
			assert.strictEqual( data[ i ].length, 20 );
		}
	});

	it( 'should have a mean of 299.8524', function test() {
		var mat = toMatrix( data );
		assert.strictEqual( mean( mean( mat ) ), 299.8524 );
	});

});
