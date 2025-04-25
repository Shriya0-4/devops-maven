function HandleSubmit(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username==='admin' && password==='123'){
  window.location.href="home.html";
  return false;
  }
  else{
  alert("invalid user data!");
  return false;
  }
}