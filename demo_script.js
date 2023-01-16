document.write(25);

// setCookie("cookie2","value2", 365);
// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   let expires = "expires="+ d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

fetch('http://gayatripriyadarsini.pythonanywhere.com/', {
  method: 'GET',
  credentials: 'include',
});
