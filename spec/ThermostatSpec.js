describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("When thermostat is created", function() {
    it("should be instantiated at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("should be have minimum temperature of 10", function() {
      expect(thermostat.minimumTemp).toEqual(10);
    });

  });

  describe("When increasing temperature", function() {
    it("should go up by 1 degree when asked", function() {
      expect(thermostat.increaseTemp(1)).toEqual(21)
    });
  });

  describe("When decreasing temperature", function() {
    it("should go down by 1 degree when asked", function() {
      expect(thermostat.decreaseTemp(1)).toEqual(19)
    });
  });

  describe("When resetting temperature", function() {
    it("should reset to 20 degrees", function() {
      thermostat.decreaseTemp(3)
      expect(thermostat.resetTemp()).toEqual(20)
    });
  });


  describe("when power saving mode", function() {
    it("is off, maximum temperature is 32 degrees", function() {
      thermostat.powerSaveOff()
      expect(thermostat.maximumTemp).toEqual(32);
    });

    it("is on, max temperature is 25 degrees", function() {
      thermostat.powerSaveOn()
      expect(thermostat.maximumTemp).toEqual(25);
    });
  });

  describe("temperature regulation", function() {
    it("cannot go above maximum temperature", function() {
      expect( function(){ thermostat.increaseTemp(6) }).toThrowError("Temperature cannot go above 25.");
    });

    it("cannot go below temperature", function() {
      expect( function(){ thermostat.decreaseTemp(12) }).toThrowError("Temperature cannot go below 10.");
    });
   
  });


});
