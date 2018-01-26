
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    //heightStr = "5";
    var heightStr = document.getElementById("height").value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // TODO 2
    // draw the pyramid with the given height
    drawPyramid(height);
}


// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
// Done


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
     clearPyramid();

    // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;
         var rowSpaces = "";

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
//           rowSpaces = rowSpaces + " ";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

//       rowStr = rowSpaces + rowStr;

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }

    // Clear the html element containing the old pyramid
    function clearPyramid(){

        // Clear the pyramid element by clearing the innerHTML property
        document.getElementById("pyramid").innerHTML = "";
        
    }

}

function setHeight(){
    //alert("setHeight triggered")
    var pyramid_height = document.getElementById("row_height");
    var row_info = document.getElementById("height");

    row_info.value = pyramid_height.value;

    determineHeightAndThenDrawPyramid();

    /*
    pyramid_height.oninput = function(){
        alert(this.value);
        row_info.innerHTML = this.value;
    }
    */

}
    

function handleSelect(){
    alert("Select option done");
}

/*
  var select = document.querySelector("select");
  var output = document.querySelector("#output");
  select.addEventListener("change", function() {
    var number = 0;
    for (var i = 0; i < select.options.length; i++) {
      var option = select.options[i];
      if (option.selected)
        number += Number(option.value);
    }
    output.textContent = number;
  }

*/