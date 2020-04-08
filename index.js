

function initMap() {
  var kualaLumpur = {
      lat: 3.1412000, 
      lng: 101.6865300
    };
  map = new google.maps.Map(document.getElementById('map'), {
    center: kualaLumpur,
    zoom: 11,
    mapTypeId: 'roadmap',
  });
  var marker = new google.maps.Marker({
    position: kualaLumpur,
    map: map,
    title : 'Kuala Lumpur'
  })
}
 
