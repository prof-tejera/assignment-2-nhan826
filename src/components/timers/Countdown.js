import {useState, useEffect} from "react";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";

const Countdown = ({startTime = 90}) => {
    const [timeElapsed, setTimeElapsed] = useState(startTime);
    const [pause, setPause] = useState(true);

    useEffect(() => {
      // decrements timeElapsed by one if greater than 0 and not paused
        if (timeElapsed > 0 && !pause){
            const interval = setInterval(() => {
            setTimeElapsed(timeElapsed - 1);
            }, 1000);
            return () => clearInterval(interval); // cleans up the interval when unmounts
        }
      }, [timeElapsed, pause]);
    
      const reset = () => {
        setTimeElapsed(startTime);
        setPause(true);
      }

      const fastForward = () => {
        setTimeElapsed(0);
      }

    return (
        <div>
            <DisplayTime time={timeElapsed} />
            <Button theme = {pause ? "green" : "white"} activeState = {timeElapsed === 0} onClick={ () => setPause(!pause)} label={pause ? "Play" : "Pause"}></Button>
            <Button theme = {"blue"} activeState = {timeElapsed === startTime} onClick={reset} label={"Reset"}></Button>
            <Button theme = {"darkblue"} activeState = {timeElapsed === 0}  onClick={fastForward} label={"Fast Forward"}></Button>

        </div>
    );


};

export default Countdown;
