describe('Weather',function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('can be stormy', function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect(weather.isStormy()).toEqual(true);
  });

  it('is not stormy', function() {
    spyOn(Math, "random").and.returnValue(0.2);
    expect(weather.isStormy()).toEqual(false);
  });

});
