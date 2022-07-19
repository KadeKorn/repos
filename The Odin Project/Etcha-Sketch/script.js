const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    //this creates the pixelated effect & has to be within the same scope as cell otherwise it won't be able to find that particular variable
    cell.addEventListener('mouseover', 
    e => e.target.classList.add('my-colour-class')
    );  
  };
};

// add a background image of something so that it looks better
// make a function that // x = prompted number and y = prompted number something like that and then do makeRows(x,y); instead so that it passes through
//incorporate this into the onclick button

// this selects the button then adds a event listener when clicked
const button = document.querySelector('button');
button.addEventListener('click', configure);

// this function is called when clicked. Asks for 2 numbers {NEED TO LIMIT IT TO 100} then passes them through as parameters 
function configure () {
  console.log("test");
  let x = prompt('enter a number please (limit 100 else beware)');
  let y = prompt('enter a number please (limit 100 else beware)');
  makeRows(x,y);
}

