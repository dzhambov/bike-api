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
        
        $('#showManufacturer').prepend(`<li> ${city} ${bike.manufacturer_name}, Color:  ${bike.frame_colors}, Picture: <img src="${bike.thumb}" </li>`); 

      });

    let manufacturerArr = [];
    response.bikes.forEach(function(bike) {
      manufacturerArr.push(bike.manufacturer_name);
    });
    let maxFreq = 1;
    let counter = 0;
    let manufacturer; 
    for (let i = 0; i<manufacturerArr.length; i++){
      for (let j=i; j<manufacturerArr.length; j++){
        if (manufacturerArr[i] === manufacturerArr[j]){
          counter++
        } 
        if(maxFreq < counter){
          maxFreq = counter;
          manufacturer = manufacturerArr[i]
        }
      }
      counter=0
    }
    $("#common").append(manufacturer)
      console.log(response);
    }
  });
});