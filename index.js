/*!
 * jCanvas in Node demo
 * Copyright (c) 2015 Robert Jones <rjones@opdots.com>
 * MIT Licensed
 */


var jsdom = require('jsdom'),
    JQuery = require( 'jquery' ),
    JCanvas = require( 'jcanvas' ),
    html = '<html><body><canvas id="cx" width="400" height="300"></canvas></body></html>';

jsdom.env( html, function ( errors, window ) {
  if( errors ) console.log( errors );

  var $ = JQuery( window );   
  JCanvas( $, window );  


  var $c  = $( '<canvas>' );

  // hack required by width/height bug in jsdom/node-canvas integration
  $c[0].width = 400;
  $c[0].height = 300;

  // Standard jCanvas
  $c.scaleCanvas({
    scale: 0.25
  })
    .drawArc({
      fillStyle: 'black',
      x: 100, y: 100,
      radius: 50
    })
    .drawArc({
      fillStyle: '#36b',
      x: 300, y: 150,
      radius: 50
    })
    .drawPolygon({
      strokeStyle: 'black',
      strokeWidth: 4,
      x: 200, y: 100,
      radius: 50,
      sides: 3
    })
    .drawPolygon({
      fillStyle: '#c33',
      strokeStyle: '#000',
      x: 340, y: 60,
      radius: 50,
      sides: 5,
      rotate: 25
    }).drawPolygon({
      fillStyle: '#36c',
      x: 160, y: 160,
      radius: 50,
      sides: 5,
      concavity: 0.5
    }).drawPolygon({
      fillStyle: '#3c6',
      strokeStyle: '#083',
      x: 60, y: 240,
      radius: 50,
      sides: 50,
      concavity: 0.1
    });

  console.warn( 'Paste the following as a url in your browser.' );
  console.log(  $c.getCanvasImage( 'png' ) );
  

});


