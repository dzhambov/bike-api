$(document).ready(function() {
  $('#bikeLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let response = await fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen');
      let jsonifiedResponse = await response.json();
      this.getElements(jsonifiedResponse);
    })();

    const getElements = function(response) {
      $('#showManufacturer').text('The brand of bikes stolen in ${city} are the following:${response.bike.manufacturer_name}');
    }
  });
});