/*!
 * A client for a Web Request Mediator.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import xxx from 'xxx';

//export ...

/*
Note: There are reusable parts here that would apply to all JavaScript Web Mediator polyfills so we might need another category for this:
“web-mediator-client” module
Loading the Specific Web Mediator via an iframe
Sending messages from a specific consumer polyfill library to the Web Mediator
Receiving messages from the Web Mediator and surfacing them as events that a specific polyfill consumer polyfill library can listen to and convert to whatever the API calls for (e.g. `.on(‘message’, m => emit(‘paymentrequest’))`).
*/
