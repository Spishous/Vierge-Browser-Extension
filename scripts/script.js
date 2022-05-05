//Envoie d'information vers le DOM
function setAction(action,data=""||{},callback){
    try{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action:action,data: data}, callback);
        });
    }catch (e) {}
}

document.getElementById("sendBtn").addEventListener("click",sendDom);

function sendDom(){
    setAction("value1","data",()=>{});
}
