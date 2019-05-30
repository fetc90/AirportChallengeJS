// // As an air traffic controller
// // To get passengers to a destination
// // I want to instruct a plane to land at
// // an airport and confirm that it has landed
// //
//
// 'use strict';
//
// describe('Feature Test:',function() {
//   var plane;
//   var airport;
//   var weather;
//
//   beforeEach(function() {
//     airport = new Airport();
//     plane = new Plane();
//     weather = new Weather();
//   });
//
//   it('planes can be instructed to land at an airport',function() {
//     plane.land(airport);
//     expect(airport.planes()).toContain(plane);
//   });
//
//   // As an air traffic controller
//   // To get passengers to a destination
//   // I want to instruct a plane to take off from
//   // an airport and confirm that it is no longer in the airport
//
//   it('planes can be instructed to take off from an airport',function() {
//     plane.land(airport);
//     plane.takeOff();
//     expect(airport.planes()).not.toContain(plane);
//   });
//
//   it('blocks takeoff when the weather is stormy',function() {
//     plane.land(airport)
//     spyOn(airport, 'isStormy').and.returnValue(true);
//     expect(function(){(plane.takeOff();}.toThrowError('Cannot take off during storm.');
//     expect(airport.planes()).toContain(plane);
//   });
//
//
// });
