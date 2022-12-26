const COOKIE_EXPIRATION_LIMIT_DAY = 90;
const params = new URLSearchParams(location.search);
let transaction_id = params.get("transaction_id");
// This will set the cookie with the expiration date

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return atob(str);
}
function setCookie(name = "transaction_id") {
  let encoded_transaction_id = utf8_to_b64(transaction_id)
  var expires = "";
  if (COOKIE_EXPIRATION_LIMIT_DAY) {
    var date = new Date();
    date.setTime(
      date.getTime() + COOKIE_EXPIRATION_LIMIT_DAY * 24 * 60 * 60 * 1000
    );
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (encoded_transaction_id || "") + expires + "; path=/";
}
// this will get the cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
let cookieVal = b64_to_utf8(getCookie("transaction_id"));

// to set the transactionIDField
function setTransactionIdField(transId) {
  let trans_ele =
    //checkout_offer_extra_contact_inf//ormation_custom_11
    document.getElementsByName("form_submission[custom_11]");

  console.log("my element is", typeof trans_ele);
  if (typeof trans_ele != "undefined" && trans_ele != null) {
    trans_ele.forEach((tId) => {
      console.log(`transaction id is ${transId}`);
      tId.value = transId;
    });
  }
}

// /x

// url populating
function urlPopulation() {
  const search = window.location.search;
  let atag = document.querySelectorAll("a");

  atag.forEach((el) => {
    if ("href" in el.attributes) {
      let hrefVal = el.attributes.href.value;
      console.log("a tag is" + el);
      console.log("hrefVal is" + hrefVal);
      if (hrefVal && hrefVal.indexOf("#") !== 0) {
        if (hrefVal.indexOf("/#/") < 0) {
          console.log("href is" + hrefVal);
          var url = new URL(hrefVal, el);
          var thisURLParams = new URLSearchParams(url.search);
          console.log("url is" + url);
          var params = new URLSearchParams(search);
        }
        for (const [key, value] of params.entries()) {
          console.log(thisURLParams.has(key));
          if (!thisURLParams.has(key) && key != "page") {
            url.searchParams.set(key, value);
            console.log("key added:" + key);
          }
        }

        // el.prop("href", url.href);
        console.log(url.href, "url href is");
        el.attributes.href.value = url.href;
      } else {
        // Handles checkout links that already have '/#/' in them.
        hrefVal =
          hrefVal + (hrefVal.indexOf("?") > 0 ? "&" : "?") + search.substr(1);
        // el.prop("href", hrefVal);
        console.log({ hrefVal });
        el.attributes.href += hrefVal;
      }
    }
  });
}
// check if transaction is null
if (transaction_id == "" || transaction_id == null) {
  // check if cookie has transaction_id
  if (cookieVal != null) {
    // set the hidden field with transaction_id in cookie
    setTransactionIdField(cookieVal);
  }
} else {
  // set the hidden field with transaction_id in url
  setTransactionIdField(transaction_id);
  urlPopulation();
  // if new transaction_id comes in the url cookie is empty
  cookieVal == null || cookieVal !== transaction_id
    ? setCookie("transaction_id")
    : console.log("Nothing happens");
  // if (cookieVal != null || cookieVal.length > 0) {
  //   if (cookieVal !== transaction_id) {
  //     setCookie(transaction_id);
  //   }
  // } else {
  //   setCookie(transaction_id);
  // }
}

//------------------- Old website page Code Dont lose vimpp -------------------//
{
  const params = new URLSearchParams(location.search);
  console.log("url param is" + params);
  console.log("param is " + params.get("transaction_id"));
  //form_submission_custom_11
  let transaction_id = params.get("transaction_id");
  if (transaction_id == "" || transaction_id == null) {
    // transaction_id = prevTransID;
  }
  console.log("transaction_id is" + transaction_id);
  let trans_ele =
    //checkout_offer_extra_contact_inf//ormation_custom_11
    document.getElementsByName("form_submission[custom_11]");

  console.log("my element is", typeof trans_ele);
  if (typeof trans_ele != "undefined" && trans_ele != null) {
    trans_ele.forEach((tId) => {
      tId.value = transaction_id;
    });
  }

  //My Code
  const urlVal = window.location.href.split("?")[0];
  // const thankYouUrl = "?transaction_id=";
  const urlValMatched = "https://ble-prototype.mykajabi.com/aff-test-opt-in";
  // const FormActionUrl = 'https://ble-prototype.mykajabi.com/forms/2147934153/form_submissions';
  const checkFormExistence = document.querySelector(
    "form[action='https://ble-prototype.mykajabi.com/forms/2147934153/form_submissions']"
  );
  console.log({ checkFormExistence });
  if (urlVal === urlValMatched && checkFormExistence) {
    //   form_submission_custom_19
    document.getElementById("form-button").onclick = function (e) {
      e.preventDefault();
      console.log("hello");
      let name = encodeURIComponent(
        document.getElementById("form_submission_name").value
      );
      let email = encodeURIComponent(
        document.getElementById("form_submission_email").value
      );
      // if (checkFormExistence.action.includes("?") && transaction_id) {
      //   // document.getElementsByName.value +=
      //   checkFormExistence.action += "&transaction_id=" + transaction_id;
      // } else {
      //   checkFormExistence.action += "?transaction_id=" + transaction_id;
      // }
      if (document.getElementsByName("thank_you_url") && transaction_id) {
        document.getElementsByName("thank_you_url").forEach((thank_url) => {
          console.log("thank you url is", thank_url.value);
          thank_url.value +=
            "?name=" +
            name +
            "&email=" +
            email +
            "&transaction_id=" +
            transaction_id;
        });
        // document.getElementsByName('thank_you_url').value = "https://ble-prototype.mykajabi.com&transaction_id=" + transaction_id;
      }
      console.log(document.getElementsByName("thank_you_url"));
      checkFormExistence.submit();
    };
  }

  // url populating
  const search = window.location.search;
  let atag = document.querySelectorAll("a");

  atag.forEach((el) => {
    if ("href" in el.attributes) {
      let hrefVal = el.attributes.href.value;
      console.log("a tag is" + el);
      console.log("hrefVal is" + hrefVal);
      if (hrefVal && hrefVal.indexOf("#") !== 0) {
        if (hrefVal.indexOf("/#/") < 0) {
          console.log("href is" + hrefVal);
          var url = new URL(hrefVal, el);
          var thisURLParams = new URLSearchParams(url.search);
          console.log("url is" + url);
          var params = new URLSearchParams(search);
        }
        for (const [key, value] of params.entries()) {
          console.log(thisURLParams.has(key));
          if (!thisURLParams.has(key) && key != "page") {
            url.searchParams.set(key, value);
            console.log("key added:" + key);
          }
        }

        // el.prop("href", url.href);
        console.log(url.href, "url href is");
        el.attributes.href.value = url.href;
      } else {
        // Handles checkout links that already have '/#/' in them.
        hrefVal =
          hrefVal + (hrefVal.indexOf("?") > 0 ? "&" : "?") + search.substr(1);
        // el.prop("href", hrefVal);
        console.log({ hrefVal });
        el.attributes.href += hrefVal;
      }
    }
  });

  // set Transaction_id in localstorage
  localStorage.setItem("transaction_id", transaction_id);

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
    document.cookie =
      name + "=" + (transaction_id || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  if (transaction_id.length > 0) {
    setCookie("transaction_id");
  }
  console.log(`transaction in the cookie is`, getCookie("transaction_id"));
}
