var spacing_x = 40;
var spacing_y = 100;
// Initialize Flowy
flowy(document.getElementById("canvas"), onGrab, onRelease, onSnap, onRearrange, spacing_x, spacing_y);
function onGrab(block){
	// When the user grabs a block
}
function onRelease(){
	// When the user releases a block
}
function onSnap(block, first, parent){
	// When a block snaps with another one
}
function onRearrange(block, parent){
	// When a block is rearranged
}

function zoomIt(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.scale(2,2);
}

flowy.output();
// As a JSON string
console.log(JSON.stringify(flowy.output()));
