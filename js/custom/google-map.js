// Map function
function initMap() {
  // Map options
  var options = {
  center: { lat: 28.820710, lng: -81.337920 },
  zoom: 8,
  }
  
  // New map  
  var map = new 
  google.maps.Map(document.getElementById('map'), options);
  
  var marker = new google.maps.Marker({
    position: {lat: 28.821020, lng: -81.338077},
    map: map
  });
}