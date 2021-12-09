#!/usr/bin/env ts-node
import Commander = require( 'commander' );
import fs = require( 'fs' );
import path = require( 'path' );

const program: Commander.Command = new Commander.Command( 'format-txt-file.js' );

program
	.command( 'format <path>' )
	.description( 'format select path' )
	.action( function ( p: string ) {
		const fullpath: string = path.join(  __dirname, p );

		fs.readFile( fullpath, function ( err: NodeJS.ErrnoException, data: Buffer ) {
			if ( err ) {
				console.error( err );
				return;
			}
			fs.writeFile( fullpath, data.toString( 'utf-8' ).split( ',' ).map( function ( s: string ): string {
				return s.trim();
			} ).filter( function ( s: string ): string {
				return s;
			} ).sort().join( ',\n' ) + ',\n', function ( err2: NodeJS.ErrnoException ) {
				if ( err2 ) {
					console.error( err2 );
					return;
				}
				console.log( `Success format file "${ fullpath }"` );
			} );
		} )
	} );

program.parse( process.argv );
