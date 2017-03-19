var $container = $("<div></div>").css("float", "left");
var boxids = [];
var grid = [];

function addcontainer(n, m) {
	for (var i = 0; i < n; i++) {
		grid[i] = [];
	  for (var j = 0; j < m; j++) {
			grid[i][j] = 0;
			var boxij = $("<div></div>");
			var boxid = i+","+j;
			boxids.push(boxid);
			$(boxij).attr('id', boxid);
	    boxij.addClass("box").appendTo($container);
	  }
	  $("<div></div>").css("clear", "both").appendTo($container);
	}

	$container.appendTo($(".container"));

}

// Add simple box on setup
$(function() {addcontainer(20, 20)});

$(function() {
	boxids.forEach( function(id) {
		document.getElementById(id).onclick = function() {
			var [i, j] = id.split(",").map(Number);
			var on = ++grid[i][j];
			if (on % 2 == 1) {
				document.getElementById(id).style.backgroundColor = "#222";
			} else {
				document.getElementById(id).style.backgroundColor = "#fff";
			}
		}
	})
});
