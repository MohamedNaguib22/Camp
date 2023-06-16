function formvalidate() {
  var userName = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var error = document.getElementById("error");
  var text = "";

  if (userName .length < 8) {
    text = "Please Enter Valid Username ";
    error.innerHTML = text;
    return false;
  } else if (password .length < 8) {
    text = "Please Enter Valid Password ";
    error.innerHTML = text;
    return false;
  }
  else {
    alert ("donnne");
  }
}
