// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Component, EventEmitter } from '@angular/core';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context( './', true, /\.spec\.ts$/ );
// And load the modules.
context.keys().map( context );

/**
 * Mock Component
 * Examples:
 * MockComponent({ selector: 'cranium' });
 * MockComponent({ selector: 'arm', inputs: ['side'], output: ['position'] });
 */
export function MockComponent( options: Component ): Component {
	const metadata: Component = {
		selector: options.selector,
		template: options.template || '',
		inputs: options.inputs,
		outputs: options.outputs || []
	};

	class Mock {
	}

	metadata.outputs.forEach( method => {
		Mock.prototype[ method ] = new EventEmitter<any>();
	} );

	return Component( metadata )( <any>Mock );
}