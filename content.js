console.log("chrome extension go")

//function that runs at end of select final hour
function finalHour(maxHour){
    let textHour = (maxHour > 1) ? "hours" : "hour"

    const windw = window.open('','','width=950,height=850')
    
    windw.document.write(
        `<h1>It has been ${maxHour} ${textHour}...</h1>
        <br />
        <img src="https://i.imgflip.com/4vbkl2.jpg" />
        <br />
        <h2>For tips on how to keep your Eyes Healthy Click the link below</h2>
        <h2>
            <a href="https://www.webmd.com/eye-health/good-eyesight#1">https://www.webmd.com/eye-health/good-eyesight#1</a>
        </h2>`)
    
    windw.focus()
}



 //function that runs every select hour interval
 function everyHour(intervalHour){
    let textHour = (intervalHour > 1) ? "hours" : "hour"
    
    const windw = window.open('','','width=650,height=950')
    
    windw.document.write(
        `<h1>It has been ${intervalHour} ${textHour}. Please take a Short break!</h1>
        <br />
        <img src="https://media.makeameme.org/created/break-time-wheres.jpg" />`)

    windw.focus()

    setTimeout(
        function(){
            windw.close()
        }, 5000)
 
}


 function startTimers(intervalHour, maxHour){

    //changing hour to miliseconds
    let maxMs = maxHour * 10000
    let intervalMs = intervalHour * 10000

    //setting timer for Long Break
    setTimeout(finalHour, maxMs, maxHour)

    //setting timer for Short Break
    let intervalStartBreak = setInterval(everyHour, intervalMs, intervalHour)

    //setting timer to stop Short breaks timer - same values as Long break
    setTimeout(clearInterval, maxMs-1, intervalStartBreak)
 }


chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse){

   let intervalTime = message.interval;
   let finalTime = message.final
   
   startTimers(intervalTime, finalTime )
}

