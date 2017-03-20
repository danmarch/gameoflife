var $container = $("<div></div>").css("float", "left");
var boxids = [];
var grid = [];

function addcontainer(n, m) {
	grid[-1] = [];
	grid[n] = [];
	for (var i = 0; i < n; i++) {
		grid[i] = [];
		grid[i][-1] = 0;
		grid[i][m] = 0
	  for (var j = 0; j < m; j++) {
			grid[i][j] = 0;
			grid[-1][j] = 0;
			grid[n][j] = 0;
			var boxij = $("<div></div>");
			var boxid = i+","+j;
			boxids.push(boxid);
			$(boxij).attr('id', boxid);
	    boxij.addClass("box").appendTo($container);
	  }
	  $("<div></div>").css("clear", "both").appendTo($container);
	}
	grid[n][m] = 0;
	grid[-1][m] = 0;
	grid[n][-1] = 0;
	grid[-1][-1] = 0;

	$container.appendTo($(".container"));

}

function flipcell(id) {
	var [i, j] = id.split(",").map(Number);
	grid[i][j] = 1 - grid[i][j];
	if (grid[i][j] == 1) {
		document.getElementById(id).style.backgroundColor = "blue";
	} else {
		document.getElementById(id).style.backgroundColor = "white";
	}
}

function step(n, m) {
	var toflip = [];
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			var neighbors = grid[i-1][j-1] + grid[ i ][j-1] + grid[i+1][j-1] +
											grid[i-1][ j ] +       0        + grid[i+1][ j ] +
											grid[i-1][j+1] + grid[ i ][j+1] + grid[i+1][j+1];
			if (grid[i][j] == 1 && (neighbors < 2 || neighbors > 3)) {
				toflip.push(i+","+j);
			}
			if (grid[i][j] == 0 && (neighbors == 3)) {
				toflip.push(i+","+j);
			}
		}
	}
	toflip.forEach(flipcell);
}

$(function() {
	addcontainer(20, 20);
	boxids.forEach( function(id) {
		document.getElementById(id).onclick = function() {
			flipcell(id);
		}
	})
});
