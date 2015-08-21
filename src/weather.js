var weather;

$(document).ready(function(){

  $(".getWeather").click(function(){
    showCity();
    weatherInfo();
  });

  function showCity(){
    var city = $("#city").val();
    $(".city").text(city);
  };

  function showWeather(info) {
      $(".weather").text(info.weather[0].description)
  };

  function showTemp(info) {
    $(".cityTemp").html(Math.round(info.main.temp) + '&#8451');
  };

  function weatherInfo() {
    var city = $("#city").val();
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&mode=json&units=metric", function(result){
            weather = result;
            showWeather(result);
            showTemp(result);
            });
        };
});
