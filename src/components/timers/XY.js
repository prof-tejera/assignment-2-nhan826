import {useState, useEffect} from "react";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import DisplayRound from "../generic/DisplayRound";

 
const XY = ({timeLimit = 10, totalRounds=2}) => {

        const [timeElapsed, setTimeElapsed] = useState(0);
        const [pause, setPause] = useState(true);
        const [round, setRound] = useState(1);
    
        useEffect(() => {
            if (timeElapsed <= timeLimit && !pause && round <= totalRounds){
                const interval = setInterval(() => {
                setTimeElapsed(timeElapsed + 1);
                }, 1000);
                return () => clearInterval(interval); // cleans up the interval when unmounts
            }else if( timeElapsed > timeLimit){
                // resets timeElapsed and increments round
                setTimeElapsed(0);
                setRound(round + 1);
            }else if (round > totalRounds && timeElapsed < timeLimit){
                fastForward();  // pauses in end state when complete
            }
        }, [timeElapsed, pause]);
    
        const reset = () => {
            setTimeElapsed(0);
            setRound(1);
            setPause(true);
        }
    
        const fastForward = () => {
            setTimeElapsed(timeLimit);
            setRound(totalRounds);
            setPause(true);
        }
    
        return (
            <div>
                <DisplayRound rounds = {round} ></DisplayRound>
                <DisplayTime time={timeLimit - timeElapsed} />
                <Button theme = {pause ? "green" : "white"} activeState = {totalRounds === round && timeElapsed === timeLimit} onClick={ () => setPause(!pause)} label={pause ? "Play" : "Pause"}></Button>
                <Button theme = {"blue"} activeState = {round === 0 && !timeElapsed} onClick={reset} label={"Reset"}></Button>
                <Button theme = {"darkblue"} activeState = {totalRounds === round && timeElapsed === timeLimit}  onClick={fastForward} label={"Fast Forward"}></Button>
            </div>
        );
    };
export default XY;
