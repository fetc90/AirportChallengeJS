'use strict';

function Airport(weather){
  this._hanger = [];
  this._weather = weather;
};

Airport.prototype.planes = function() {
  return this._hanger;
};

Airport.prototype.clearForLanding = function(plane) {
  // if (this.isStormy) {
  //   throw new Error('Cannot land plane in stormy weather');
  // }
  this._hanger.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  this._hanger = [];
};

Airport.prototype.isStormy = function() {
    return false;
  };
