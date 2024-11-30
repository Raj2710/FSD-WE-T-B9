## Dice Game


## Sample code for Generating Game board for 2x2
function randomizeArray(cards){
    let array = []
    
    for(let i = 0;i<cards.length;i++)
    {   
        
        let index = Math.floor(Math.random()*10) % cards.length
        
        while(true)
        {
            if(array[index]===null || array[index]===undefined)
            {
                array[index] = cards[i]
                break;
            }
            else
                index = (index+1)%cards.length
        }
        
    }
    
    return array
    
}

let cards = ["html","css"]

let row = 2;
let col = 2;

let gameboard = [];

for(let i = 0;i<row;i++)
{
    gameboard[i]=[];
    let cardValue = randomizeArray(cards)
    for(let j=0;j<col;j++)
    {
        gameboard[i][j] = cardValue[j]
    }
}

for(let i = 0;i<row;i++)
{
    
    console.log(gameboard[i])
}