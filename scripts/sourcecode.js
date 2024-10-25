console.log('Hello World!');
const sketchBoard = document.querySelector('#sketchBoard');

const redColor = document.querySelector('#redButton');
const blueColor = document.querySelector('#blueButton');
const blackColor = document.querySelector('#blackButton');
var tileColor = 'black';
redColor.addEventListener('click',()=> tileColor = 'red');
blueColor.addEventListener('click',()=> tileColor = 'blue');
blackColor.addEventListener('click',()=> tileColor = 'black');

const gridWidth = document.querySelector('#gridWidth');
const gridHeight = document.querySelector('#gridHeight');
const resizeGrid = document.querySelector('#resizeGrid');
resizeGrid.addEventListener('click',setGridSize);

setGridSize();
function setGridSize()
{
    while(sketchBoard.lastElementChild)
    {
        sketchBoard.removeChild(sketchBoard.lastElementChild);
    }

    widthTileNum = parseInt(gridWidth.value);
    heightTileNum = parseInt(gridHeight.value);

    if (!Number.isInteger(widthTileNum))
        {
            widthTileNum= 4;
            console.log('Default Width');
        }
    if(!Number.isInteger(heightTileNum))
        {
            heightTileNum = 4;
            console.log('Default Height');
        }
    sketchBoard.setAttribute('style','width: 800px;'+'height: 800px;');
        
    for(i=0;i<(heightTileNum*widthTileNum);i++)   
        {       
            const tile = document.createElement('div');
            tile.setAttribute('style','width:'+800/widthTileNum+'px;'+'height:'+800/heightTileNum+'px;')
            tile.setAttribute('class','sketchTile');
            sketchBoard.appendChild(tile);

            tile.addEventListener('mouseenter',etchTile);
        }

}

const sketchTile = document.querySelector('.sketchTile');

function etchTile(event)
{
    const tileEntered = event.target;
    tileEntered.setAttribute('style','background-color:'+tileColor+';'+'width:'+800/widthTileNum+'px;'+'height:'+800/heightTileNum+'px;');
    console.log('Tile Entered');
}
