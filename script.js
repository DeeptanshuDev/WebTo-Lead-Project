function beforeSubmit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log("inputdate: ,", inputdate.value);
  //inputdate is of string type so we need to formate it from string to date

  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formattedDate;
  console.log("outputdate: ,", outputdate.value);
}
