//document.write("A third-party script is also being used. This script can be changed to act maliciously, intentioanlly or untentionally");
document.write(2);
 if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;

// setCookie("cookie2","value2", 365);
// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   let expires = "expires="+ d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// fetch('http://gayatripriyadarsini.pythonanywhere.com/', {
//   method: 'GET',
//   credentials: 'include',
// });

