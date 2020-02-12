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
      let bikeArr = [];
      response.bikes.forEach(function(bike) {
        bikeArr.push(response);
        $('#showManufacturer').append(`The brand of bikes stolen in ${city} are the following:${bike.manufacturer_name}`); 
        $('#showColor').append(`The color of bikes stolen in ${city} are the following:${bike.frame_colors}`);
      });

      console.log(response);


      // $('#showManufacturer').text(`The brand of bikes stolen in ${city} are the following:${response.bikes.manufacturer_name}`); 

    }
  });
});