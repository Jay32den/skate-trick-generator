function gentext() {
    var flattrick= ['kickflip','heelflip','treflip','ollie',];
    var trick = document.getElementById('flatGround');
    trick.innerHTML = flattrick[Math.floor(Math.random() * flattrick.length)];
}
function genledge() {
    var ledgetrick = ['50-50','5.0', 'Smith', 'Back-Smith', 'Front-Tail','Back-Tail',];
    var ledge =document.getElementById ('ledgeTrick');
    ledge.innerHTML = ledgetrick [Math.floor(Math.random() * ledgetrick.length)];
}