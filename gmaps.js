$(document).ready(function () {
  console.log('suh dude');
  initMap();

  // find my location geolocation
  var findMeButton = $('.find-me');
    findMeButton.on('click', function(event) {
      event.preventDefault();
      console.log('finding location');
      if (!navigator.geolocation) {
        findMeButton.addClass("disabled");
        $('.no-browser-support').addClass("visible");
      }
      else {
        navigator.geolocation.getCurrentPosition(function(position) {
          // Get the coordinates of the current position.
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;

          $('.latitude').text(lat.toFixed(3));
          $('.longitude').text(lng.toFixed(3));
          $('.coordinates').addClass('visible');
          });
        }
    });

})

//load google maps api
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
