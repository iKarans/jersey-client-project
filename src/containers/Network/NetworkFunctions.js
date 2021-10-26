  export let checkListArray = [];
  export let isDeviceChecked = false;
  export let isOutageChecked = false;
  export let isHighRiskChecked = false;
  export let isLoggedOnChecked = false;
  export let isLessThanHourChecked = false;
  export let isOneToThreeHoursChecked = false;
  export let isLowImportanceChecked = false;
  export let isHighImportanceChecked = false;



  export const handleChangeDevice = () => {

    if (checkListArray.includes("New Device")) {
      checkListArray = checkListArray.filter(item => item !== "New Device")
      let isDeviceChecked = false;
      console.log(checkListArray)
      console.log(isDeviceChecked)
    } else {
      checkListArray.push("New Device");
      let isDeviceChecked = true;
      console.log(checkListArray)
      console.log(isDeviceChecked)
    }

  };
  export const handleChangeOutage = () => {
    if (checkListArray.includes("Outage")) {
      checkListArray = checkListArray.filter(item => item !== "Outage")
      let isOutageChecked = false;
      console.log(checkListArray)
    } else {
      checkListArray.push("Outage");
      let isOutageChecked = true;
      console.log(checkListArray)
    }
  };
  export const handleChangeHighRisk = () => {
    if (checkListArray.includes("High Risk")) {
      let isHighRiskChecked = false;
      checkListArray = checkListArray.filter(item => item !== "High Risk")
      console.log(checkListArray)
    } else {
      checkListArray.push("High Risk");
      let isHighRiskChecked = true;
      console.log(checkListArray)
    }
  };
  export const handleChangeLoggedOn = () => {
    if (checkListArray.includes("Logged On")) {
      let isLoggedOnChecked = false;
      checkListArray = checkListArray.filter(item => item !== "Logged On")
      console.log(checkListArray)
    } else {
      checkListArray.push("Logged On");
      let isLoggedOnChecked = true;
      console.log(checkListArray)
    }
  };

  // export const handleChangeLessThanHour = () => {
  //   if (checkListArray.includes("hour")) {
  //     let isLessThanHourChecked = false;
  //     checkListArray = checkListArray.filter(item => item !== "hour")
  //     console.log(checkListArray)
  //   } else {
  //     checkListArray.push("hour");
  //     let isLessThanHourChecked = true;
  //     console.log(checkListArray)
  //   }
  // };
  // export const handleChangeOneToThreeHours = () => {
  //   if (checkListArray.includes("oneToThreeHours")) {
  //     let isOneToThreeHoursChecked = false;
  //     checkListArray = checkListArray.filter(item => item !== "oneToThreeHours")
  //     console.log(checkListArray)
  //   } else {
  //     checkListArray.push("oneToThreeHours");
  //     let isOneToThreeHoursChecked = true;
  //     console.log(checkListArray)
  //   }
  // };

  // export const handleChangeLowImportance = () => {
  //   if (checkListArray.includes("lowImportance")) {
  //     let isLowImportanceChecked = false;
  //     checkListArray = checkListArray.filter(item => item !== "lowImportance")
  //     console.log(checkListArray)
  //   } else {
  //     checkListArray.push("lowImportance");
  //     let isLowImportanceChecked = true;
  //     console.log(checkListArray)
  //   }
  // };
  // export const handleChangeHighImportance = () => {
  //   if (checkListArray.includes("highImportance")) {
  //     let isHighImportanceChecked = false;
  //     checkListArray = checkListArray.filter(item => item !== "highImportance")
  //     console.log(checkListArray)
  //   } else {
  //     checkListArray.push("highImportance");
  //     let isHighImportanceChecked = true;
  //     console.log(checkListArray)
  //   }
  // };