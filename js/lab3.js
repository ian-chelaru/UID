window.onload = function()
{
    var ref = document.getElementById("surname");
    console.log(ref.value);

    // ref.onblur = focusLost;
    // alert(ref.value);

    var inputs = document.getElementsByTagName("input");
    var inputsLen = inputs.length;
    for (var i = 0; i < inputsLen; i++)
    {
        if (inputs[i].getAttribute("type") === "text")
        {
            inputs[i].onblur = focusLost;
        }
    }
    console.log(inputs);

    var title = getLabel("surname");

    var list = document.getElementById("messages");
    list.innerHTML = "<li>" + title + "</li>";

    console.log(title);
};

function focusLost()
{
    if (this.value !== "")
    {
        // alert(this.value);
        // alert(this.getAttribute("id"));
        // alert(this.id);
    }
    else
    {
        this.className = "incorrect_field";
        // alert("test");
    }
}

function getLabel(inputId)
{
    var labels = document.getElementsByTagName("label");
    var labelsLen = labels.length;
    for (var i = 0; i < labelsLen; i++)
    {
        if (labels[i].getAttribute("for") === inputId)
        {
            return labels[i].innerHTML;
        }
    }
}
