// function myFunction() {
//     var body = document.getElementsByTagName('body')[0]; 
//     var btn = document.createElement("BUTTON");
//     body.appendChild(btn);
// }

function myFunction() {
    var x = document.getElementById("add-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
