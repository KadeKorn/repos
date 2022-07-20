const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (''); // add c + 1 if you want squares to be numbered 
    container.appendChild(cell).className = "grid-item";
    //this creates the pixelated effect & has to be within the same scope as cell otherwise it won't be able to find that particular variable
    cell.addEventListener('mouseover', 
    e => e.target.classList.add('my-colour-class')
    );  
  };
};


// this selects the button then adds a event listener when clicked
const button = document.querySelector('button');
button.addEventListener('click', configure);

//update it to have 3 buttons that each have there own 'color pen' and background

function configure () {
  let x = prompt('enter a number please (limit 100 else beware)');
  let y = prompt('enter a number please (limit 100 else beware)');
  makeRows(x,y);
}



//extra credit
// Instead of just changing the color of a square from black to white (for example),
// have each pass through with the mouse change it to a completely random RGB value. 
//Then try having each pass just add another 10% of black to it so that only 
//after 10 passes is the square completely black.
