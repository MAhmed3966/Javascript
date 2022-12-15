//  Set cookie expiration

const COOKIE_EXPIRATION_LIMIT_DAY = 90;

function setCookie(name = "transaction_id") {
  var expires = "";
  if (COOKIE_EXPIRATION_LIMIT_DAY) {
    var date = new Date();
    date.setTime(
      date.getTime() + COOKIE_EXPIRATION_LIMIT_DAY * 24 * 60 * 60 * 1000
    );
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (transaction_id || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}



if (transaction_id.length > 0) {
  setCookie('transaction_id');
}
console.log(`transaction in the cookie is`,getCookie('transaction_id'))

