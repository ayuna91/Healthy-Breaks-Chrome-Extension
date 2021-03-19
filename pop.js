const shortBreakInput = document.getElementById("shortBreakInput")

const longBreakInput = document.getElementById("longBreakInput")

const startButton = document.getElementById("startButton")



startButton.addEventListener('click', setTimeValues)


function setTimeValues(){
    

    let params = {
        active: true,
        currentWindow: true
    }
    
    chrome.tabs.query(params, gotTabs)
     
    function gotTabs(tabs) {
        //send a message to the content script
        const activeTab = tabs[0]

        
        let message = {
            interval: shortBreakInput.value,
            final: longBreakInput.value
        }

        chrome.tabs.sendMessage(activeTab.id, message)
    }
    
    window.close()
}



