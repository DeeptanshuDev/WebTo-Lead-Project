function beforeSubmit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log("inputdate: ,", inputdate.value);
  //inputdate is of string type so we need to formate it from string to date

  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formattedDate;
  console.log("outputdate: ,", outputdate.value);
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
