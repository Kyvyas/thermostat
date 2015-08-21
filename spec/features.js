describe('Thermostat Features',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
    $("#increase").click();
    expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $("#decrease").click();
    expect('#temperature').toContainText('19');
  });

  it('temperature can go up and down consistently', function(){
    $("#decrease").click();
    expect('#temperature').toContainText('19');
    $("#increase").click();
    expect('#temperature').toContainText('20');
  });

  describe('Displaying weather and city', function() { 

    it('displays city when city is entered', function(){
      $("input#city").val("London");
      $("input.getWeather").click();
      expect('.city').toContainText("London");
    }); 

    it("should call weather API", function() {
     spyOn($, "getJSON").and.callFake(function(url, callback) {
       callback({"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":20.28,"pressure":1021,"humidity":77,"temp_min":18,"temp_max":22.22},"visibility":10000,"wind":{"speed":3.6,"deg":220},"clouds":{"all":40},"dt":1440145099,"sys":{"type":1,"id":5091,"message":0.0159,"country":"GB","sunrise":1440132926,"sunset":1440184246},"id":2643743,"name":"London","cod":200}
       );
     });
     $("input#city").val("London");
     $(".getWeather").click();
     expect($.getJSON).toHaveBeenCalled();
     expect($(".weather").html()).not.toEqual("");
     // expect(".weather_temp").toBeTruthy();
     // expect(".weather_image").toBeTruthy();
   });

  });
});

