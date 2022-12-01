  const DisplayTime= ({timeInSeconds}) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0'); 
    return <p>{minutes} : {seconds}</p>;
  };

  export default DisplayTime;