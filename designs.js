// Select color input
// Select size input (height x width)
var color;
var height;
var width;

// When size is submitted by user, call makeGrid()
$('#sizePicker').submit(function (event) {
    console.log('inside the .submit event handler function');
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    console.log(`Height: ${height}, Width: ${width}`);
})

function makeGrid() {
    
}