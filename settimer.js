//function that runs at end of select final hour
function finalHour(maxHour){
    console.log(`It has been ${maxHour} hours. Please take a Long break!`)
}
  
  //function that runs every select hour interval
  function everyHour(intervalHour){
     let textHour = (intervalHour > 1) ? "hours" : "hour"
     console.log(`It has been ${intervalHour} ${textHour}. Please take a Short break!`)
  }

//   function endBreak(){
//       console.log("Break Over")
//   }
  
  
function startTimers(intervalHour, maxHour){
    
    //changing hour to milisenconds
    let maxMs = maxHour * 10000
    let intervalMs = intervalHour * 10000

    // let breakTimes = ( maxHour / intervalHour ) - 1
    // breakTimes = Math.ceil(breakTimes)
    // let extraMsBreaks = breakTimes * 1000

    //setting timer for Long break
    setTimeout(finalHour, maxMs, maxHour)
  
    
    //setting timer for short breaks
    let intervalStartBreak = setInterval(everyHour, intervalMs, intervalHour)
    
    //let intervalEndBreak = setInterval(endBreak, intervalMs+"5 minutes")
    

    //setting timer to stop Short breaks timer - same values as Long break
    setTimeout(clearInterval, maxMs, intervalStartBreak)
    
  }
  
  startTimers(1, 4)