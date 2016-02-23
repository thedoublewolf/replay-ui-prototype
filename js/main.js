import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


// Asset Constructor
function Asset(id, location, make) {
  this.id = id;
  this.location = location;
  this.make = make;
  this.time = time + ' hrs';
}

// Interval Constructor
function Interval(start, finish, randomAsset) {
  this.start = start;
  this.finish = finish;
  this.randomAsset = randomAsset;
}

var assets = [];

var intervals = [];

// Create 20 random Assets
for (var i = 1; i < 21; i++) {
  var id = i;
  var locations = ["Atlanta", "Decatur", "Macon", "Chicago", "New York", "Seatle"];
  var location = locations[Math.floor(Math.random() * locations.length)];
  var makes = ["Honda", "Chevy", "Ford", "BMW", "Mercedes", "Porsche"];
  var make = makes[Math.floor(Math.random() * makes.length)];
  var time = Math.floor(Math.random() * 5 + 1);
  var asset = new Asset(id, location, make);

  assets.push(asset);
}

$.each(assets, function(key, val) {
  var $li = $("<li>"+val.id+val.make+"</li>");
  $('#asset-list').append($li);
});

// for (var i = 0; i < 1; i++) {
//   var intervalOne = new Interval(start, finish, randomAsset);
//   var start = "12:00am";
//   var finish = "5:59am";
//   var randomAsset = assets[Math.floor(Math.random()*assets.length)];
//   intervals.push(intervalOne);
// }

// for (var i = 0; i < 1; i++) {
//   var intervalTwo = new Interval(start, finish, randomAsset);
//   var start = "6:00am";
//   var finish = "11:59pm";
//   var randomAsset = assets[Math.floor(Math.random()*assets.length)];
//   intervals.push(intervalTwo);
// }

// for (var i = 0; i < 1; i++) {
//   var intervalThree = new Interval(start, finish, randomAsset);
//   var start = "12:00pm";
//   var finish = "5:59pm";
//   var randomAsset = assets[Math.floor(Math.random()*assets.length)];
//   intervals.push(intervalThree);
// }

// for (var i = 0; i < 1; i++) {
//   var intervalFour = new Interval(start, finish, randomAsset);
//   var start = "6:00pm";
//   var finish = "11:59pm";
//   var randomAsset = assets[Math.floor(Math.random()*assets.length)];
//   intervals.push(intervalFour);
// }

// console.log(intervals);

