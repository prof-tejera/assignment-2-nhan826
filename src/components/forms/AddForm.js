import React, {useContext} from "react";
import styled from "styled-components";
import {useState} from "react";
import { TimerContext } from "../../context";

const InputDiv = styled.div`
display: flex;
flex-direction:column;
align-items: center;
font-size: 100%;
`
const FormInput = styled.input`
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 40px;
margin-right: 40px;
font-family: 'Poppins', sans-serif;
border: none;
border-radius: 20px;
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
width: 200px;
font-size: 100%;
`
const SubmitButton = styled.button`
background-color: #2D7967;
color: white;
margin-top: 20px;
margin-bottom: 30px;
padding-top: 5px;
padding-bottom: 5px;
width: 200px;
border: none;
border-radius: 20px;
font-size: 100%;
transition: all .1s ease-out;
&:hover {
opacity: 90%;
}
&:active {
  background-color: #575757;
  opacity: 100%;
}
`

const AddForm = (props) => { 

    const context = useContext(TimerContext);
    const defaultFormState = props.inputs;
    const [formState, setFormState] = useState(defaultFormState);  // defines state for the form

    const handleInputChange = (event) => {   // event listener for when input changes
        setFormState({    // creates new version of form state
          ...formState,   // copies current form state
          [event.target.name]: event.target.value   // updates the key to the name of the input and sets value to new input value
        })
    }
    const renderTimerOptions = () => {
        if (props.timerSelect === "Stopwatch") {
          return (
            <InputDiv>
              <label>Total Time (seconds)</label>
              <FormInput type="number" name="limit" min="0" value={formState.limit} onChange={handleInputChange}/>
            </InputDiv>
          )
        }
        if (props.timerSelect === "Countdown"){
          return (
            <InputDiv>
              <label>Countdown Time (seconds)</label>
              <FormInput type="number" name="startTime" min="0" value={formState.startTime} onChange={handleInputChange}/>
            </InputDiv>
          )
        }
        if (props.timerSelect === "XY"){
          return (
            <InputDiv>
              <label>Total Time (seconds)</label>
              <FormInput type="number" name="timeLimit" min="0" value={formState.timeLimit} onChange={handleInputChange}/>
              <label>Number of Rounds</label>
              <FormInput type="number" name="totalRounds" min="0" value={formState.totalRounds} onChange={handleInputChange}/>
            </InputDiv>
          )
        }
        if (props.timerSelect === "Tabata"){
          return (
            <InputDiv>
              <label>Rest Time (seconds)</label>
              <FormInput type="number" name="restLimit" min="0" value={formState.restLimit} onChange={handleInputChange}/>
              <label>Work Time (seconds)</label>
              <FormInput type="number" name="workLimit" min="0" value={formState.workLimit} onChange={handleInputChange}/>
              <label>Number of Rounds</label>
              <FormInput type="number" name="totalFullRounds" min="0" value={formState.totalFullRounds} onChange={handleInputChange}/>
            </InputDiv>
          )
        }
      }
      const handleFormSubmit = (event) => {
        context.addToQueue({...formState, timer_type : props.timerSelect, id:Date.now()}); // adds new timer to queue with unique id
        console.log(formState);
      }
      return (
        <>
        {renderTimerOptions()}
        <div>
            <SubmitButton onClick = {handleFormSubmit} type="submit">Add</SubmitButton>
        </div>
        </>
      )
}
export default AddForm;