function removeRequests(requestId, action) {
    const element = document.getElementById(requestId);
    
    // Only remove the request if it exists in the DOM
    if (element) {
        element.remove();
        
        // Update the number of connection requests
        const requestNumberElement = document.getElementById("requestNumber");
        let requestNumber = Number(requestNumberElement.textContent); // Ensure it's a number
        
        // Debugging: Check the current request number
        console.log("Request number before removal:", requestNumber);
        
        if (requestNumber > 0) {
            requestNumber -= 1;  // Decrease the number by 1
            requestNumberElement.textContent = requestNumber;  // Update the DOM with the new number
            
            // Debugging: Check the updated request number
            console.log("Request number after removal:", requestNumber);
        }
    }

    // Update the total number of connections only if the request is accepted
    if (action === 'accept') {
        const connectionNumberElement = document.getElementById("connectNumber");
        let connectionNumber = Number(connectionNumberElement.textContent); // Ensure it's a number
        
        // Increase the number of connections
        connectionNumber += 1;
        connectionNumberElement.textContent = connectionNumber;  // Update the DOM
        
        // Debugging: Check the updated connection number
        console.log("Connection number after accepting:", connectionNumber);
    }
}