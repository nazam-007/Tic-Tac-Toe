import {React,useState} from "react";
import Squre from "./squre";

const Board=()=>{

const [state,setState]=useState(Array(9).fill(null));

const [isXTurn,setisXTurn]=useState(true);

const winnerCheck=()=>{

    const winnerLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let logic of winnerLogic) {
        const [a,b,c]=logic;
        if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
            return state[a];
        
    }
    return false

}

const isWinner=winnerCheck();

const handleClick=(index)=>{

    if(state[index]!=null)
    {
        return;
    }
    const copyState=[...state]
    copyState[index]=isXTurn?"X":"0";
    setState(copyState)
    setisXTurn(!isXTurn)

}

const handleRest=()=>{
    setState(Array(9).fill(null))
}

    return (
        <div>
        
        <div className="Board-container">
            
            {
                isWinner?(<>Congratulation {isWinner} won the game <button style={{"backgroundColor":"black","color":"white"}} onClick={handleRest}>play again ?</button></> ):(<>
                {/* <h3 className="heading">Please {isXTurn?"X":"0"}, This isyour turn </h3> */}
                <div className="Board-row">
                <Squre onClick={()=>handleClick(0)} value={state[0]}/>
                <Squre onClick={()=>handleClick(1)} value={state[1]}/>
                <Squre onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="Board-row">
                <Squre onClick={()=>handleClick(3)} value={state[3]}/>
                <Squre onClick={()=>handleClick(4)} value={state[4]}/>
                <Squre onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="Board-row">
                <Squre onClick={()=>handleClick(6)} value={state[6]}/>
                <Squre onClick={()=>handleClick(7)} value={state[7]}/>
                <Squre onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
                
                
                </>)
            }



        </div>
        
        </div>
        
    )
}

export default Board