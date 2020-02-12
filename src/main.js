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
        $('#showManufacturer').prepend(`<li> ${city} ${bike.manufacturer_name} </li>`); 
        $('#showColor').prepend(`<li> ${city} ${bike.frame_colors} </li>`);
        $('#result').show();
      });

      console.log(response);
    }
  });
});