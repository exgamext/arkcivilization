// Disable right click
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
// Disable drag images
$('img').on('dragstart', function(event) { event.preventDefault(); });