chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    let data="ok";
    switch (request.action) {
        case "value1":
            console.log('request send to DOM');
            console.log(request.data);
            data="value1";
            break;
        case "value2":
            console.log(request.data);
            data="value2";
            break;
    }
    sendResponse({data: data, success: true});
});
console.log("Execution arriere plan");
