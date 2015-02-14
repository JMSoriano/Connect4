//Players turn (either player 1 or 2)
var playerTurn = 1;
//Each [] is a column; this is the logical equivalent of the HTML grid
var grid = [[],[],[],[],[],[],[]];
var MAX_HEIGHT = 6; //Max number of chips (pieces whatevers) that can be stacked in a column

/* HTML Functions */

//Handler of event listener which listens for clicks on the gameBoards
function identifyGrid(e){
	if(e.target !== e.currentTarget){
		var clickedItem = e.target.id;
		playTurn(document.getElementById(clickedItem).className);
	}
	e.stopPropagation();
}

/* Game Logic Functions */
function swapTurn(){
	if(playerTurn == 1){
		playerTurn = 2;
	}else{
		playerTurn = 1;
	}
}

function playTurn(col){
	switch(col){
		case "col1":
			placeChip(0);
			break;
		case "col2":
			placeChip(1);
			break;
		case "col3":
			placeChip(2);
			break;
		case "col4":
			placeChip(3);
			break;
		case "col5":
			placeChip(4);
			break;
		case "col6":
			placeChip(5);
			break;
		case "col7":
			placeChip(6);
			break;
	}
}

//Places chip onto the column, if chip placed successfully, also swaps the players turn
function placeChip(col){
	//Check if the column is full first
	if(grid[col].length < MAX_HEIGHT){
		grid[col].push(playerTurn);
		console.log(grid[col]);
		updateGrid(col);
		//TODO check winning conditions (put it in a function) (for diagonals)
		if(checkWin(col)){
			alert("Player " + playerTurn + " wins!");
			//reset game
			refresh();
		}
		swapTurn();
	}
}

function checkWin(col){
	var score = 1; //the origin point
	var x = col;
	var y = grid[col].length - 1;
	console.log("initial: " + x + ", " + y);

	//check left
	while(true){
		x--;
		if(x < 0 || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}
		if (score == 4){
			console.log("WIN");
			return true;
		}
		
	x = col;
	//check right
	while(true){
		x++;
		if(x > MAX_HEIGHT || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}

	if (score == 4){
			console.log("WINR");
			return true;
		}
		
	//reset the score counter since were checknig a diff straight line
	score = 1;
	
	/*--------------------------*/
	x = col;
	//check down
	while(true){
		y--;
		if(y < 0 || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}

	if (score == 4){
			console.log("WINR");
			return true;
		}
	
	x = col;
	y = grid[col].length - 1;
	score = 1;
	//Diagonals
	
	//Diagonal up left
	while(true){
		x--;
		y++;
		if(y > MAX_HEIGHT || x < 0 || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}

	if (score == 4){
			console.log("WINR");
			return true;
		}
		
	x = col;
	y = grid[col].length - 1;
	
	//Diagonal down right
	while(true){
		x++;
		y--;
		if(y < 0 || x > 6 || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}

	if (score == 4){
			console.log("WINR");
			return true;
		}
		
	x = col;
	y = grid[col].length - 1;
	score = 1;
	
	//Diagonal up right
	while(true){
		x++;
		y++;
		if(y > MAX_HEIGHT || x > 6 || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}

	if (score == 4){
			console.log("WINR");
			return true;
		}
	
	x = col;
	y = grid[col].length - 1;
	
	//Diagonal down right
	while(true){
		x--;
		y--;
		if(y < 0 || x < 0 || grid[x][y] == 'undefined' || grid[x][y] == null){
			break;
		}
		
		console.log("grid: " + grid[x][y]);
		if(grid[x][y] == playerTurn){
			score++;
		}else{
			break;
		}
	}

	if (score == 4){
			console.log("WINR");
			return true;
		}
		
return false;
}

//Updates the grid
function updateGrid(col){
var letter;
	switch(col){
		case 0:
			letter = 'a';
			break;
		case 1:
			letter = 'b';
			break;
		case 2:
			letter = 'c';
			break;
		case 3:
			letter = 'd';
			break;
		case 4:
			letter = 'e';
			break;
		case 5:
			letter = 'f';
			break;
		case 6:
			letter = 'g';
			break;
	}
	console.log(letter + (grid[col].length));
	document.getElementById(letter + (MAX_HEIGHT + 1 - grid[col].length)).innerHTML = playerTurn;
}

//actually reset game but uhh yeah...
function refresh(e){
	grid = [[],[],[],[],[],[],[]];
	playerTurn = 1;
	document.getElementById("a1").innerHTML = "-";
	document.getElementById("a2").innerHTML = "-";
	document.getElementById("a3").innerHTML = "-";
	document.getElementById("a4").innerHTML = "-";
	document.getElementById("a5").innerHTML = "-";
	document.getElementById("a6").innerHTML = "-";

	document.getElementById("b1").innerHTML = "-";
	document.getElementById("b2").innerHTML = "-";
	document.getElementById("b3").innerHTML = "-";
	document.getElementById("b4").innerHTML = "-";
	document.getElementById("b5").innerHTML = "-";
	document.getElementById("b6").innerHTML = "-";

	document.getElementById("c1").innerHTML = "-";
	document.getElementById("c2").innerHTML = "-";
	document.getElementById("c3").innerHTML = "-";
	document.getElementById("c4").innerHTML = "-";
	document.getElementById("c5").innerHTML = "-";
	document.getElementById("c6").innerHTML = "-";

	document.getElementById("d1").innerHTML = "-";
	document.getElementById("d2").innerHTML = "-";
	document.getElementById("d3").innerHTML = "-";
	document.getElementById("d4").innerHTML = "-";
	document.getElementById("d5").innerHTML = "-";
	document.getElementById("d6").innerHTML = "-";

	document.getElementById("e1").innerHTML = "-";
	document.getElementById("e2").innerHTML = "-";
	document.getElementById("e3").innerHTML = "-";
	document.getElementById("e4").innerHTML = "-";
	document.getElementById("e5").innerHTML = "-";
	document.getElementById("e6").innerHTML = "-";

	document.getElementById("f1").innerHTML = "-";
	document.getElementById("f2").innerHTML = "-";
	document.getElementById("f3").innerHTML = "-";
	document.getElementById("f4").innerHTML = "-";
	document.getElementById("f5").innerHTML = "-";
	document.getElementById("f6").innerHTML = "-";

	document.getElementById("g1").innerHTML = "-";
	document.getElementById("g2").innerHTML = "-";
	document.getElementById("g3").innerHTML = "-";
	document.getElementById("g4").innerHTML = "-";
	document.getElementById("g5").innerHTML = "-";
	document.getElementById("g6").innerHTML = "-";

	//window.location.reload();
}

document.addEventListener("DOMContentLoaded", function(event){
//Event listener for clicking onto the grid
document.querySelector("#gameTable").addEventListener("click", identifyGrid, false);
document.querySelector("#refresh").addEventListener("click", refresh, false);
});
