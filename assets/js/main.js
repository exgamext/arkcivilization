// Disable right click
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
// Disable drag images
$('img').on('dragstart', function(event) { event.preventDefault(); });

// Game information
let game_information = {
  name: 'ARK CIVILIZATION',
  version: '0.1.0',
  build: 'Alpha Build',
  creation_date: '22/12/2022',
  modification_date: '23/12/2022'
}

