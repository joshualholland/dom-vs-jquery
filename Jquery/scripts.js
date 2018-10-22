// JQuery
// Create Button
$('body').prepend('<button id=msg>Click Me!</button>');
$('#msg').click(function () {
    alert('Jquery is da bomb!')
});
// display text box in an alert upon submitting
$('#submit').click(function () {
    alert($('input[type=text]').val())
});
// div background color on mouse hover
$('#square').css({ 'height': '50px', 'width': '50px' });
$('#square').mouseover(function () {
    $('#square').css({ 'background-color': 'blue' })
});
$('#square').mouseleave(function () {
    $('#square').css({ 'background-color': '' })
});
// random color for paragraph text when clicked
$('p').click(function () {
    $('p').css({ 'color': 'rgb(' + Math.floor((Math.random() * 256)) + ',' + Math.floor((Math.random() * 256)) + ',' + Math.floor((Math.random() * 256)) + ')' })
});
// add span with name to div when button is clicked
$('#josh').click(function () {
    $('#name').append('<span>Josh</span>')
});
// add friends as li to ul
let text = ['Kelsy', 'Joel', 'Kenny', 'Daniel', 'Jenna', 'Nitish', 'James', 'Maria', 'Jeff', 'Jordan'];
$('#peeps').click(function () {
    for (i = 0; i < text.length; i++) {
        $('#friends').append(`<li>${text[i]}</li>`)
    }
});