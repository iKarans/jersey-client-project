  export let checkListArray = [];

  export const handleChangeDevice = () => {
    if(checkListArray.includes("Device")){
      checkListArray = checkListArray.filter(item => item !== "Device")
      console.log(checkListArray)
      }else {checkListArray.push("Device");
      console.log(checkListArray)}
    
  };
  export const handleChangeOutage = () => {
    if(checkListArray.includes("Outage")){
      checkListArray = checkListArray.filter(item => item !== "Outage")
      console.log(checkListArray)
      }else {checkListArray.push("Outage");
      console.log(checkListArray)}
  };
  export const handleChangeHighRisk = () => {
    if(checkListArray.includes("Risk")){
      checkListArray = checkListArray.filter(item => item !== "Risk")
      console.log(checkListArray)
      }else {checkListArray.push("Risk");
      console.log(checkListArray)}
  };
  export const handleChangeLoggedOn = () => {
    if(checkListArray.includes("LoggedOn")){
      checkListArray = checkListArray.filter(item => item !== "LoggedOn")
      console.log(checkListArray)
      }else {checkListArray.push("LoggedOn");
      console.log(checkListArray)}
  };