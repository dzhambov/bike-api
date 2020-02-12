import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BikeService } from './../src/bike-service.js';


$(document).ready(function() {
  $('#bikeLocation').submit(function() {
    event.preventDefault();
    const city = $('#location').val();
    $('#location').val("");
    
    

    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.getBikeByCity(city)
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      $('#showManufacturer').text(`The brand of bikes stolen in ${city} are the following:${response.bikes[0].manufacturer_name}`);
      $('#showColor').text(`The color of bikes stolen in ${city} are the following:${response.bike.frame_colors}`);
    }
  });
});