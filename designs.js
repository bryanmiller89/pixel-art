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

function makeGrid(x, y) {
    // Remove previous grid if one exists
    $('tr').remove();
    // For loop to create table rows
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        // Nested for loop to create table columns
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
}