var btn = document.getElementById("btn");
var nav = document.getElementById("nav");
nav.style.left = "-250px";
btn.onclick = function() {
  if(nav.style.left == "-250px"){
    nav.style.left = "0";
  }
  else{
    nav.style.left = "-250px";
  }
}
