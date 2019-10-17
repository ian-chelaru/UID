window.onload = function()
{
    // var ref = document.getElementById("surname");
    // console.log(ref.value);

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
    // console.log(inputs);

    var title = getLabel("surname");

    var list = document.getElementById("messages");
    list.innerHTML = "<li>" + title + "</li>";

    console.log(title);
};

function focusLost()
{
    var functionName = "validate_" + this.getAttribute("id");
    if (window[functionName](this.value))
    {
        this.className = "correct_field";
    }
    else
    {
        this.className = "incorrect_field";
    }

    // if (this.value !== "")
    // {
    //     alert(this.value);
    //     alert(this.getAttribute("id"));
    //     alert(this.id);
    // }
    // else
    // {
    //     this.className = "incorrect_field";
    //     alert("test");
    // }
}

function validate_surname(value)
{
    console.log(value);
    return value.length >= 3;
}

function validate_first_name(value)
{
    console.log(value);
    return value.length >= 3;
}

function validate_address(value)
{
    console.log(value);
    if (value.length < 3)
    {
        return false;
    }
    if (!/\d/.test(value))
    {
        return false;
    }
    return !/[@#$%^&*]/.test(value);

}

function validate_birth_date(value)
{
    console.log(value);
    return true;
}

function validate_phone_number(value)
{
    console.log(value);
    return true;
}

function validate_email(value)
{
    console.log(value);
    return true;
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
