var rootAPI = "https://cgisdev.utcluj.ro/moodle/chat-piu/";
var counter = 0;

function authenticate()
{
    var params = {
        username: $("#username").val(),
        password: $("#password").val()
    };

    console.log(JSON.stringify(params));

    $.ajax({
        url: rootAPI + "authenticate.php",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(params),
        dataType: "json", // "json", "text"
        beforeSend: null,
        success: function(data_from_server)
        {
            console.log(data_from_server);
        },
        error: function(xhr)
        {
            var message = "Generic error message.";
            if (xhr.responseText)
            {
                message = $.parseJSON(xhr.responseText).message;
            }
            console.log(message);
        },
        complete: function()
        {
            console.log("all done!");
        },
        statusCode: {
            200: function()
            {
                console.log("Authentication successful");
            },
            403: function()
            {
                console.log("Invalid username or password");
            }
        }
    });

    return false;
}

function globalLogout()
{

}

function getMessages()
{
    console.log("getMessages - " + counter++);
    // call the server to read messages

    // put this in the beforeSend
    // keep the token information
    // function ( xhr ) {
    //  xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
    // }


    setTimeout(getMessages, 3000);
}

$(document).ready(function()
{
    // $("#chat form").off("submit", verifyCredentials);
    $("#chat form").submit(authenticate);
    globalLogout();
//    getMessages();
});
