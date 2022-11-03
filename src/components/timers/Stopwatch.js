import {useState, useEffect} from "react";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";

const Stopwatch = ({limit = 90}) => {

    const [timeElapsed, setTimeElapsed] = useState(0);
    const [pause, setPause] = useState(true);

    useEffect(() => {
        // keeps incrementing timeElapsed by one if less than the limit and not paused
        if (timeElapsed < limit && !pause){
            const interval = setInterval(() => {
            setTimeElapsed(timeElapsed + 1);
            }, 1000);
            return () => clearInterval(interval);  // cleans up the interval when unmounts
        }
      }, [timeElapsed, pause]);
    
      const reset = () => {
        setTimeElapsed(0);
        setPause(true);
      }

      const fastForward = () => {
        setTimeElapsed(limit);
      }

    return (
        <div>
            <DisplayTime time={timeElapsed} />
            <Button theme = {pause ? "green" : "white"} activeState = {timeElapsed === limit} onClick={ () => setPause(!pause)} label={pause ? "Play" : "Pause"}></Button>
            <Button theme = {"blue"} activeState = {!timeElapsed} onClick={reset} label={"Reset"}></Button>
            <Button theme = {"darkblue"} activeState = {timeElapsed === limit}  onClick={fastForward} label={"Fast Forward"}></Button>

        </div>
    );



};
export default Stopwatch;
