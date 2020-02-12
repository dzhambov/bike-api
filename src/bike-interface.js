import { BikeService } from './../src/bike-service.js';


$(document).ready(function() {
  $('#bikeLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    

    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.getBikeByCity(city)
      getElements(response);
    })();

    function getElements(response) {
      $('#showManufacturer').text('The brand of bikes stolen in ${city} are the following:${response.bike.manufacturer_name}');
      $('#showColor').text('The color of bikes stolen in ${city} are the following:${response.bike.frame_colors}');
    }
  });
});