/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|


import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname)
	.httpServer()
	.start()
*/

import 'reflect-metadata';
import sourceMapSupport from 'source-map-support';
import { Ignitor } from '@adonisjs/core/build/standalone';
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { join } from 'path'

sourceMapSupport.install({ handleUncaughtExceptions: false })

const privateKey = readFileSync(join(__dirname + '../../sslCert/privadakey35477.key'), 'utf8');
const certificate = readFileSync(join(__dirname + '../../sslCert/certificado35477.crt'), 'utf8');
const ca = readFileSync(join(__dirname + '../../sslCert/root_ca35477.crt'), 'utf8');

new Ignitor(__dirname).httpServer().start((handle) => {
	return createServer(
		{
			key: privateKey,
			cert: certificate,
			ca: ca
		},
		handle
	);
}).catch(console.error);

/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

