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

  export const handleChangeLessThanHour = () => {
    if(checkListArray.includes("hour")){
      checkListArray = checkListArray.filter(item => item !== "hour")
      console.log(checkListArray)
      }else {checkListArray.push("hour");
      console.log(checkListArray)}
  };
  export const handleChangeOneToThreeHours = () => {
    if(checkListArray.includes("oneToThreeHours")){
      checkListArray = checkListArray.filter(item => item !== "oneToThreeHours")
      console.log(checkListArray)
      }else {checkListArray.push("oneToThreeHours");
      console.log(checkListArray)}
  };

  export const handleChangeLowImportance = () => {
    if(checkListArray.includes("lowImportance")){
      checkListArray = checkListArray.filter(item => item !== "lowImportance")
      console.log(checkListArray)
      }else {checkListArray.push("lowImportance");
      console.log(checkListArray)}
  };
  export const handleChangeHighImportance = () => {
    if(checkListArray.includes("highImportance")){
      checkListArray = checkListArray.filter(item => item !== "highImportance")
      console.log(checkListArray)
      }else {checkListArray.push("highImportance");
      console.log(checkListArray)}
  };

 