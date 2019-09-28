//hides the form
document.getElementById("add-form").style.display = 'none';


function myFunction() {
    var x = document.getElementById("add-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}



function myInput(){

    var artistName = document.getElementById("username");
    var artistAbout = document.getElementById("about");
    var artistURL = document.getElementById("url");


    if(artistName.value == "" || artistAbout.value == "" || artistURL.value == ""){
        alert("All fields must be filled.");
    } else {

    var input = document.querySelector("#add-form");  //this accesses my #add-form in my html
    var allArtists = document.querySelector('#all-artists');          //this is a way to access my div in my html
    var containerDiv = document.createElement('div');
    var image = document.createElement('img');
    var infoDiv = document.createElement('div');
    var p1 = document.createElement('p');
    var header = document.createElement('h2');
    var name = document.createTextNode(input.elements[0].value);
    var description = document.createTextNode(input.elements[1].value);
    var p2 = document.createElement('p');


    infoDiv.classList.add('info');  // way of adding a class to my infoDiv
    containerDiv.classList.add('container');


    allArtists.appendChild(containerDiv);  //appending my new div to my div in my html
    image.setAttribute('src', input.elements[2].value);
    containerDiv.appendChild(image);
    containerDiv.appendChild(infoDiv);
    infoDiv.appendChild(p1);
    p1.appendChild(header);
    header.appendChild(name);
    infoDiv.appendChild(p2);
    p2.appendChild(description); 


    var button = document.createElement('BUTTON');   //creating (delete) button element
    button.classList.add('delete-button');
    var text = document.createTextNode("Delete");    //creating text node to be displayed on button
    button.appendChild(text);                        //appending text to button
    containerDiv.appendChild(button);                //appending button to div
    button.onclick = removeArtist;                   //removes artist


    input.reset();  //clears form 
    document.getElementById("add-form").style.display = 'none'; //hides form after submitting
    }
}


function removeArtist() {
    var art = this.parentNode;
    art.parentNode.removeChild(art);
}





