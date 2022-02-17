const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const eraseButton = document.querySelector("#erase");
const randomColor = document.querySelector("#color");
let rows = document.getElementsByClassName("grid-row");
let columns = document.getElementsByClassName(".grid-column");
defaultGrid();


//grid maker
function defaultGrid() 
{   let grid;
    let q;

    do 
    {
        grid = prompt("GRID SIZE Max 28 ");
        if (grid <= 0 || grid > 28)
        {
            isNaN(grid) == true;
        }
        else
        {
            q = isNaN(grid);
        }
    }while(q == true);
    if (grid > 0 && grid < 29)
    {
        makeRows(grid);
        makeColumns(grid);
    }
    else
    {
        alert("PRESS THE RESET BUTTON");
    }
}

//make rows
function makeRows(num)
{
    for (r = 0; r < num; r++)
    {
        let row = document.createElement("div");
        container.appendChild(row).className = "grid-row";
    }
}

function makeColumns(n)
{
    for (i = 0; i < rows.length; i++)
    {
        for (j = 0; j < n; j++)
        {
            let cclumn = document.createElement("div");
            //change grid colors
            cclumn.addEventListener("mouseover", changeGridColor);
            rows[j].appendChild(cclumn).className = "grid-column";
        };
    };

};

function changeGridColor(e)
{
    let red = 'rgb(47,79,79)';
    let color = `rgb(${[0, 0, 0].map(channel => {
        return Math.floor(Math.random() * 256);
    }).join(',')})`
    Object.assign(e.target.style, {
        backgroundColor: color,
        opacity : 3
    });
}

function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

resetButton.addEventListener("click", () =>{
    resetGrid();
    defaultGrid();
});


