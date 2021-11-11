#!/usr/bin node
/**
 * Warning
 * 此檔案為處理tsc無法複製的.txt檔案
 * 如果你無法確定你的更改是否會損壞
 * 也請不要任意變更此檔案
 */
const path = require( 'path' );
const fs = require( 'fs' );

if ( !fs.existsSync( path.join( __dirname, 'build' ) ) && !fs.existsSync( path.join( __dirname, 'build', 'config' ) ) ) {
	console.log( 'Can\'t find built file(s).' );
	// eslint-disable-next-line no-process-exit
	process.exit( 0 );
}

const files = fs.readdirSync( path.join( __dirname, 'config' ) ).filter( function ( file ) {
	return file && file.match( /\.txt$/ );
} );

console.log( `Copy ${ files.length } ${ files.length > 1 ? 'files' : 'file' } from "${ path.join( __dirname, 'config' ) }" to "${ path.join( __dirname, 'build', 'config' ) }"......` );

files.forEach( function ( file ) {
	fs.copyFileSync( path.join( __dirname, 'config', file ), path.join( __dirname, 'build', 'config', file ) );

	console.log( `Copy "${ path.join( __dirname, 'config', file ) }" to "${ path.join( __dirname, 'build', 'config', file ) }" success.` );
} );

console.log( 'done.' );
