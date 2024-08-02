import React,{useState} from "react";
import Square from "./Square";

const Board = () => {
    const [State,setState] = useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn] = useState(true);

    const CheckWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2.5,8],
            [0,4,8],
            [2,4,6],
        ]

        for(let logic of winnerLogic) {
            const [a,b,c] =logic;
            if(State[a] !== null && State[a] === State[b] && State[a] === State[c]){
                return(State[a]);
            }
        }
        return(false);
    };
  
     
    const isWinner = CheckWinner();

    const handClick = (index) => {
        if(State[index] !==null){
            return;
        }
        // console.log("Clicked on index",index);
        const copyState = [...State];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }
    
    return(
        <div className="board-container">
          {isWinner ? (
          <> {isWinner} Won the Game.....! <button onClick={handleReset}>Play Again</button> </> 
        ): (
        <>
        <h4>Player {isXTurn ? "X" : "O"} please move...</h4>
          <div className="board-row">
            <Square onClick={() => handClick(0)} Value={State[0]}/>
            <Square onClick={() => handClick(1)} Value={State[1]}/>
            <Square onClick={() => handClick(2)} Value={State[2]}/>
           </div>
           <div className="board-row">
            <Square onClick={() => handClick(3)} Value={State[3]}/>
            <Square onClick={() => handClick(4)} Value={State[4]}/>
            <Square onClick={() => handClick(5)} Value={State[5]}/>
           </div>
           <div className="board-row">
            <Square onClick={() => handClick(6)} Value={State[6]}/>
            <Square onClick={() => handClick(7)} Value={State[7]}/>
            <Square onClick={() => handClick(8)} Value={State[8]}/>
           </div>
           </>
           )}
        </div>
    );
};

export default Board;