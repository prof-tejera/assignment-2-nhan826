import {useState, useEffect} from "react";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import DisplayRound from "../generic/DisplayRound";


const Tabata = ({workLimit = 10, restLimit=5, totalFullRounds=4}) => {

    const [timeElapsed, setTimeElapsed] = useState(0);
    const [halfRound, setHalfRound] = useState(0);
    const [pause, setPause] = useState(true);
    const [limit, setLimit] = useState(workLimit); 


    useEffect(() => {
        // keeps incrementing timeElapsed by one if less than the limit and not paused and rounds are incomplete
        if (timeElapsed <= limit && !pause && halfRound < totalFullRounds * 2){
            const interval = setInterval(() => {
            setTimeElapsed(timeElapsed + 1);
            }, 1000);
            return () => clearInterval(interval); // cleans up the interval when unmounts
        }else if( timeElapsed > limit){
            // switches limit, resets timeElapsed, and increments halfRound
            if (halfRound % 2 === 0){
                setLimit(restLimit);
            }else{
                setLimit(workLimit);
            }
            setTimeElapsed(0);
            setHalfRound(halfRound + 1);
        }else if(halfRound === totalFullRounds * 2 ){
            fastForward(); 
        }
    }, [timeElapsed, pause]);

    const reset = () => {
        setTimeElapsed(0);
        setLimit(workLimit);
        setHalfRound(0);
        setPause(true);
    }

    const fastForward = () => {
        setTimeElapsed(restLimit);
        setHalfRound(totalFullRounds*2);
        setLimit(restLimit);
        setPause(true);
    }

    return (
        <div>
            <DisplayRound 
            rounds = {halfRound < totalFullRounds * 2 ?  Math.floor((halfRound * 0.5) + 1) : totalFullRounds} 
            period = {totalFullRounds * 2 === halfRound ? "Done" : halfRound % 2 === 0 ? "Work": halfRound % 2 === 1 ? "Rest": null} // uses ternary operators to show period and change color of display
            theme = {totalFullRounds * 2 === halfRound ? "blue" : halfRound % 2 === 0 ? "green" : halfRound % 2 === 1 ? "tan": null}>  
            </DisplayRound>
            <DisplayTime time={limit - timeElapsed}/> 
            <Button theme = {pause ? "green" : "white"} activeState = {totalFullRounds * 2 === halfRound} onClick={ () => setPause(!pause)} label={pause ? "Play" : "Pause"}></Button>
            <Button theme = {"blue"} activeState = {halfRound === 0 && !timeElapsed} onClick={reset} label={"Reset"}></Button>
            <Button theme = {"darkblue"} activeState = {totalFullRounds * 2 === halfRound}  onClick={fastForward} label={"Fast Forward"}></Button>
        </div>
    );

};
export default Tabata;
