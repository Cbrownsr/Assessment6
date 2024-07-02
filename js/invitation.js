// Function created to replace the content dynamically based on form inputs
function replaceContent() {
    // Declare variables for both recipient and host names
    var myRecipientName = document.getElementById("recipientNameInput").value;
    var myHostName = document.getElementById("hostNameInput").value;

    // Debugging logs to console (can be removed in production)
    console.log('Recipient Name: ' + myRecipientName);
    console.log('Host Name: ' + myHostName);

    // Set the HTML content in the respective span ids with the variable values
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}
