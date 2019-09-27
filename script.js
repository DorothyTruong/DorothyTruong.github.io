function myFunction() {
    var x = document.getElementById("add-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function myInput(){
    var input = document.querySelector("#add-form");  //this accesses my #add-form in my html
    var allArtists = document.querySelector('#all-artists');          //this is a way to access my div in my html
    var containerDiv = document.createElement('div');
    var image = document.createElement('img');
    var infoDiv = document.createElement('div');
    infoDiv.classList.add('info');  // way of adding a class to my infoDiv
    var p1 = document.createElement('p');
    var header = document.createElement('h2');
    var name = document.createTextNode(input.elements[0].value);
    var description = document.createTextNode(input.elements[1].value);
    var p2 = document.createElement('p');
    allArtists.appendChild(containerDiv);                //appending my new div to my div in my html
    containerDiv.classList.add('container');
    image.setAttribute('src', input.elements[2].value);
    containerDiv.appendChild(image);
    containerDiv.appendChild(infoDiv);
    infoDiv.appendChild(p1);
    p1.appendChild(header);
    header.appendChild(name);
    infoDiv.appendChild(p2);
    p2.appendChild(description); 
}
