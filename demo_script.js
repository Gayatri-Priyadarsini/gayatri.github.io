//document.write("A third-party script is also being used. This script can be changed to act maliciously, intentioanlly or untentionally");

document.write("Hellooo..");
document.write("<br> I am a third-party script which provides a useful functionality!");
//  if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("demo").innerHTML = localStorage.clickcount;

//  <script type="text/javascript" src="http://www.google.com/jsapi"></script>
//     <script type="text/javascript">
//     function initialize() {
//         var loc = {};
//         var geocoder = new google.maps.Geocoder();
//         if(google.loader.ClientLocation) {
//             loc.lat = google.loader.ClientLocation.latitude;
//             loc.lng = google.loader.ClientLocation.longitude;

//             var latlng = new google.maps.LatLng(loc.lat, loc.lng);
//             geocoder.geocode({'latLng': latlng}, function(results, status) {
//                 if(status == google.maps.GeocoderStatus.OK) {
//                     alert(results[0]['formatted_address']);
//                 };
//             });
//         }
//     }

//     google.load("maps", "3.x", {other_params: "sensor=false", callback:initialize});
// </script>

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
name=getCookie('Cookie_consent')

   if(name!=""){
       //document.getElementById('cookie-consent-container').hidden = true;
       if(name=='true'){
           setCookie('Cookie_consent', "true", 30);
       }
   }

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// fetch('http://gayatripriyadarsini.pythonanywhere.com/', {
//   method: 'GET',
//   credentials: 'include',
// });

