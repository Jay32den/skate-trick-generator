var trick = document.getElementById('flatGround');
var ledge = document.getElementById('ledgeTrick');
var rail = document.getElementById('railTrick');
var outTrick = document.getElementById('trickOut');



function gentext() {
    var flattrick = ['kickflip', 'heelflip', 'treflip', 'ollie'];
    showText(trick, flattrick);
}

function genledge() {
    var ledgetrick = ['50-50', '5.0', 'Smith', 'Back-Smith', 'Front-Tail', 'Back-Tail'];
    showText(ledge, ledgetrick);
}

function genrail() {
    var railTrick = ['50-50', '5.0', 'Smith', 'Back-Smith', 'Front-Tail', 'Back-Tail', 'Front-Feeble'];
    showText(rail, railTrick);
}

function genTrickOut() {
    var trickOut = ['kickflip-fakie', 'kickflip-regular', 'hardflip', 'heelflip-fakie', 'heelflip-regular', 'treflip', 'ollie'];
    showText(outTrick, trickOut);
}

function showText(element, tricks) {
    // Create a div for the centered text
    var centeredText = document.createElement('div');
    centeredText.id = 'centeredText';
    centeredText.textContent = tricks[Math.floor(Math.random() * tricks.length)];

    // Append the div to the body
    document.body.appendChild(centeredText);

    // Remove the div after 3 seconds (adjust as needed)
    setTimeout(function () {
        centeredText.remove();
    }, 3000);
}