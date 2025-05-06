var cells = document.getElementsByClassName('cell');

var resText = document.getElementById('resText');
resText.textContent="Result here";
var cellIndexValue;
var win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

var gameList=["","","","","","","","",""];

var currentPlayerN=0;

var currentPlayer='';

function play(clickedElement) {
  currentPlayerN+=1;

  if (currentPlayerN%2==1){
    currentPlayer='O';
    clickedElement.textContent='O'
    resText.textContent="X's Turn";
  }

  else{
    currentPlayer='X';
    clickedElement.textContent='X'
    resText.textContent="O's Turn";
  }

  if (clickedElement.textContent==currentPlayer){
    clickedElement.style.pointerEvents = 'none';
  }

  cellIndexValue = clickedElement.getAttribute('cellIndex');
  gameList[cellIndexValue]=currentPlayer;
  console.log(gameList);

 checkWin();

  
}


function checkWin(){
  var roundWon = false;

  let i = 0;

  for (i;i<win.length;i++){
    let condition = win[i];
    let cellA = gameList[condition[0]];
    let cellB = gameList[condition[1]];
    let cellC = gameList[condition[2]];

    if (cellA == "" || cellB == "" || cellC == ""){
      continue;
    }

    if (cellA==cellB && cellB==cellC){
      roundWon = true;
      break;
    }
  }

  if (roundWon){
    console.log(currentPlayer+' is winner');
    resText.textContent=currentPlayer+' is Winner!';
    endGame();
    Array.from(cells).forEach(function(cell) {
      cell.style.pointerEvents = 'none';
    });
  }
  else if (!gameList.includes("")){
    console.log('Draw!');
    resText.textContent="Draw!";
    endGame();
  }
}

function endGame(){
  setTimeout(reStart, 2000);
}

function reStart(){
  gameList=["","","","","","","","",""];
  Array.from(cells).forEach(function(cell) {
    cell.textContent = '';
    cell.style.pointerEvents = 'auto';
  });
  currentPlayerN=0;
  resText.textContent="O's Turn"

}
