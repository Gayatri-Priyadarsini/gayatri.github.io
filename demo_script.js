//document.write("A third-party script is also being used. This script can be changed to act maliciously, intentioanlly or untentionally");

document.write("Hello..");
// document.write("<br> I increase the clickcount!");
//  if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("demo").innerHTML = localStorage.clickcount;


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

