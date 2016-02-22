import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

function Asset(id, location, make) {
  this.id = id;
  this.location = location;
  this.make = make;
}

var intervals = [];

for (var i = 0; i < 100; i++) {

  var id = i;

  var locations = ["Atlanta", "Decatur", "Macon", "Chicago", "New York", "Seatle"];

  var location = locations[Math.floor(Math.random() * locations.length)];

  var makes = ["Honda", "Chevy", "Ford", "BMW", "Mercedes", "Porsche"];

  var make = makes[Math.floor(Math.random() * makes.length)];

  var asset = new Asset(id, location, make);
  intervals.push(asset);
}

console.log(intervals);

