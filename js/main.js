import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


// Asset Constructor
function Asset(id, location, make, totalTime) {
  this.id = id;
  this.location = location;
  this.make = make + ' ' + id;
  this.time = time + ' hrs';
  this.totalTime = totalTime;
}

// Interval Constructor
function Interval(time) {
  this.time = time;
}

var assets = [];

var intervals = [];

// Create time slots for all intervals
for (var i = 0; i < 26; i++) {
  var time = i;

  var interval = new Interval(time);

  intervals.push(interval);
}

// Create 20 random Assets
for (var i = 0; i < 5; i++) {
  var id = Math.floor(Math.random() * 100);
  var locations = ["Atlanta", "Decatur", "Macon", "Chicago", "New York", "Seatle"];
  var location = locations[Math.floor(Math.random() * locations.length)];
  var makes = ["Honda", "Chevy", "Ford", "BMW", "Mercedes", "Porsche"];
  var make = makes[Math.floor(Math.random() * makes.length)];
  var time = Math.floor(Math.random() * 5 + 1);

  // Total Time determined by length of interval
  var totalTime = intervals.length;

  var asset = new Asset(id, location, make, totalTime);

  assets.push(asset);
}

console.log(assets);

// Append assets to DOM

$.each(assets, function(key, val) {
  var $li = $("<li>"+val.make+"</li>");
  $('#asset-list').append($li).addClass('asset');

  // var $slotVert = $('<div class="slot-vert"></div>');
  // $('#time-bar').append($slotVert);
});

for (var i = 0; i < intervals.length; i++) {
  var $slotHorz = $('<div class="slot-horz"></div>');
  $('#time-bar').append($slotHorz);
}

// Append time intervals to DOM
$.each(intervals, function(key, val) {
  var $div = $("<div>"+val.time+"</div>");
  $('#interval').append($div);
});

// Synch scrolling
$('.interval-bar').on('scroll', function () {
  $('.replay-bar').scrollLeft($(this).scrollLeft());
});
$('.replay-bar').on('scroll', function () {
  $('.interval-bar').scrollLeft($(this).scrollLeft());
});