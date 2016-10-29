// $(document).ready(function () {
//
//   if(document.location.search) {
//     var queryString = document.location.search.replace('?', '');
//     var pairs = queryString.split('&').map(function (pair) {
//       return pair.split('=');
//     });
//
//     $('.query-params').show();
//     var $tbody = $('.query-params tbody');
//
//     pairs.forEach(function (pair) {
//       var $tr = $('<tr>');
//       $tr.append($('<td>').html(pair[0]));
//       $tr.append($('<td>').html(pair[1]));
//       $tbody.append($tr);
//     });
//   }
//
// });


$(document).ready(function() {
var findMeButton = $('.find-me');
// from using geolocation APIs mdnhttps://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation#Prompting_for_permission
// Check if the browser has support for the Geolocation API
if (!navigator.geolocation) {

  findMeButton.addClass("disabled");
  $('.no-browser-support').addClass("visible");

} else {

  findMeButton.on('click', function(event) {

    event.preventDefault();
    console.log('finding location');
    navigator.geolocation.getCurrentPosition(function(position) {
      // Get the coordinates of the current position.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      $('.latitude').text(lat.toFixed(3));
      $('.longitude').text(lng.toFixed(3));
      $('.coordinates').addClass('visible');
    });
  });
}
})
