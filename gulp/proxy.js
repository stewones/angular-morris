 /**
  * stpa-modal provides a reusable way to do modal in AngularJS
  * check out documentation in http://modal.stpa.co
  *
  * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the “Software”), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  */
 'use strict';

 var httpProxy = require('http-proxy');
 var chalk = require('chalk');

 /*
  * Location of your backend server
  */
 var proxyTarget = 'http://server/context/';

 var proxy = httpProxy.createProxyServer({
     target: proxyTarget
 });

 proxy.on('error', function(error, req, res) {
     res.writeHead(500, {
         'Content-Type': 'text/plain'
     });

     console.error(chalk.red('[Proxy]'), error);
 });

 /*
  * The proxy middleware is an Express middleware added to BrowserSync to
  * handle backend request and proxy them to your backend.
  */
 function proxyMiddleware(req, res, next) {
     /*
      * This test is the switch of each request to determine if the request is
      * for a static file to be handled by BrowserSync or a backend request to proxy.
      *
      * The existing test is a standard check on the files extensions but it may fail
      * for your needs. If you can, you could also check on a context in the url which
      * may be more reliable but can't be generic.
      */
     if (/\.(html|css|js|png|jpg|jpeg|gif|ico|xml|rss|txt|eot|svg|ttf|woff|cur)(\?((r|v|rel|rev)=[\-\.\w]*)?)?$/.test(req.url)) {
         next();
     } else {
         proxy.web(req, res);
     }
 }

 /*
  * This is where you activate or not your proxy.
  *
  * The first line activate if and the second one ignored it
  */

 //module.exports = [proxyMiddleware];
 module.exports = [];