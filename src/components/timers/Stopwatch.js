import {useState, useEffect, useContext} from "react";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import { TimerContext } from "../../context";

const Stopwatch = ({limit = 90, index}) => {
    const context = useContext(TimerContext);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [pause, setPause] = useState(true);

    useEffect(() => {
      if (context.timerRunningState && index === 0){
        setPause(!pause);
      } 
    }, [context]);

    useEffect(() => {
        // keeps incrementing timeElapsed by one if less than the limit and not paused
        if (timeElapsed < limit && !pause){
            const interval = setInterval(() => {
            setTimeElapsed(timeElapsed + 1);
            }, 1000);
            return () => clearInterval(interval);  // cleans up the interval when unmounts
        } else if (timeElapsed >= limit ){
          context.deleteFromQueue(index);
          context.setTimerRunningState(true);
        }
      }, [timeElapsed, pause]);
    
      const reset = () => {
        setTimeElapsed(0);
        setPause(true);
        context.setTimerQueue(context.initialQueue)
      }

      const fastForward = () => {
        setTimeElapsed(limit);
        context.setTimerRunningState(true);
        context.removeCurrentTimer();
        if (context.timerQueue.length <= 1){
          context.setInitialQueue([]);
        } 
      }

    return (
        <div>
            <DisplayTime timeInSeconds={timeElapsed} />
            <Button type = {pause ? "green" : "white"} disabled = {timeElapsed === limit} onClick={ () => setPause(!pause)} label={pause ? "Play" : "Pause"}></Button>
            <Button type = "blue" disabled = {!timeElapsed} onClick={reset} label="Reset"></Button>
            <Button type = "darkblue" disabled = {timeElapsed === limit}  onClick={fastForward} label="Fast Forward"></Button>
        </div>
    );

};
export default Stopwatch;
