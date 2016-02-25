import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// var startTS = new Date();
// console.log(startTS);



// Asset Constructor
function Asset(id, location, make, totalTime) {
  this.id = id;
  this.location = location;
  this.make = make + ' ' + id;
  // this.time = time + ' hrs';
  this.totalTime = totalTime;
}

// Interval Constructor
function Interval(time) {
  this.time = time;
}

var assets = [];

// var intervals = [];

// CONTROLS

// Create Assets

var num = 3;

var createAssets = function() {
  for (var i = 0; i < num; i++) {
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
};

// Create time slots for all intervals
// var createIntervals = function() {
//   for (var i = 0; i < 21; i++) {
//     var time = i;

//     var interval = new Interval(time);

//     intervals.push(interval);
//   }
// };

// createIntervals();

createAssets();

// Append assets to DOM
$.each(assets, function(key, val) {
  var $li = $("<li>"+val.make+"</li>");
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
  var $div = $("<div>"+val.time+"</div>");
  $('#interval').append($div);
});

console.log(assets);

console.log(intervals);

// Synch scrolling
$('.interval-bar').on('scroll', function () {
  $('.replay-bar').scrollLeft($(this).scrollLeft());
});
$('.replay-bar').on('scroll', function () {
  $('.interval-bar').scrollLeft($(this).scrollLeft());
});




