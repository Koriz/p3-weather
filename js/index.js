// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

var newCity = prompt('Type in city you want the weather for');

$.simpleWeather({
  location: newCity,
  woeid: '',
  unit: 'f',
  success: function(weather) {

    // Display weather data
    $('.temp').text(weather.temp);
    $('.city').text(weather.city);
    $('.img').attr('src', weather.image);

    // Entire weather object
    console.log(weather);
  },
  error: function(error) {
    // Show if weather cannot be retreived
  }

});

$('#sky').jQlouds({
  minClouds: 3, // minimum amount of clouds
  maxClouds: 4, // maximum amount of clouds
});



$('#sky').jQlouds({
  wind: true,
  skyHeight: null
});