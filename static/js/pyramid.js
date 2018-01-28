
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the height of the pyramid and draws the pyramid
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // Get the height from the dom input slider element    
    var heightStr = document.getElementById("height").innerHTML;


    // here we convert the string to an int
    var heightVal = parseInt(heightStr);

    // Get the brick type from the dom select element
    var brick = document.getElementById("BrickType").value;

    // Validate the brick. If empty set to the defautt "#"
    if ((brick == "") || (brick == null) || (brick == undefined)) {
        brick = "#";
    }

    // draw the pyramid with the given height
    drawPyramid(heightVal, brick);
} 

/**
 * drawPyramid
 *
 * Renders, in the HTML document, the pyramid of the specified height
 */
 function drawPyramid(height, brickType ) {

    // before drawing, clear the old content
     clearPyramid();

    // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";

         rowSpaces = ""; 
         for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";                        // &nbsp HTML encoding for a space " "
            rowStr += spaceChar;
         }


         for (var i = 0; i < numBricks; i++) {

            rowStr += brickType;                

        }


        // insert the paragraph as a child of the container <div>
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
        
        }

    }

    // Clear the html element containing the old pyramid
    function clearPyramid(){

        // Clear the pyramid element by clearing the innerHTML property
        document.getElementById("pyramid").innerHTML = "";
            
    }    


// Set the pyramid height    
function setHeight(){
    // Get the information form the slider input object
    var pyramid_height = document.getElementById("row_height");

    // Get the span object
    var rowVal = document.getElementById("height");

    // Set the height value of the pyramid to display in
    // the spn object
    rowVal.innerHTML = pyramid_height.value;

    // Call the funtion to draw the pyramid
    determineHeightAndThenDrawPyramid();
}
    

// Handle the events from the select element
function handleSelected(){

    // Call the draw pyramid function whenever the select
    // option is changed.
    determineHeightAndThenDrawPyramid();

}
