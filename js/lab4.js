$(document).ready(function()
{
    console.log("hello!");
    console.log($("#surname").val());

    $("#chat_header").click(function()
    {
        var chat = $("#chat");
        console.log(chat.width());
        if (chat.width() === 300)
        {
            chat.animate({
                    height: "40px"
                },
                1000,
                function()
                {
                    chat.animate({
                        width: "40px"
                    })
                })
        }
        else
        {
            chat.animate({
                    width: "300px"
                },
                1000,
                function()
                {
                    chat.animate({
                        height: "300px"
                    })
                })
        }
    });

    $("#chat_animation").hide();

    $("#chat form").submit(function()
    {
        $("#chat_animation").show().delay(3000).hide(function()
        {
            var user = $("#username").val();
            var pass = $("#password").val();

            if (user === "admin" && pass === "admin1234")
            {
                $("#chat form p").html("Authentication successful!");
            }
            else
            {
                $("#chat form p").html("Invalid username or password!");
            }
        });
        return false;
    })

});
