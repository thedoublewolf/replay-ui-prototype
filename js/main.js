import $ from 'jquery';
import angular from 'angular';

import './app-core/index';
import './app-content/index';

angular
  .module('app', ['app.core', 'app.content'])
;

var json = require('./data.json');

var counts = [];

var intervals = [];

for (var i = 0; i < json.data.length; i++) {
  var count = json.data[i];
  counts.push(count);
  var interval = json.header.interval_seconds * i;
  intervals.push(interval);
}

var assets = [];

for (var i = 0; i < json.header.assets.length; i++) {
  var asset = json.header.assets[i];
  assets.push(asset);
}

console.log(json.header.interval_seconds);

// Append assets to DOM
$.each(assets, function(key, val) {
  var $li = $("<li>"+val+"</li>");
  $('#asset-list').append($li).addClass('asset');

  var $row = $('<div class="slot-row"></div>');
  $('#time-bar').append($row);
});

for (var s = 0; s < intervals.length; s++) {
  var $slot = $('<div class="slot"></div>');
  $('.slot-row').append($slot);
}

// Append time intervals to DOM
$.each(intervals, function(key, val) {
  var $div = $("<div>"+val+"</div>");
  $('#interval').append($div);
});

// console.log(assets);

// console.log(intervals);

// // Synch scrolling
// $('.interval-bar').on('scroll', function () {
//   $('.replay-bar').scrollLeft($(this).scrollLeft());
// });
// $('.replay-bar').on('scroll', function () {
//   $('.interval-bar').scrollLeft($(this).scrollLeft());
// });




