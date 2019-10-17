window.onload = function()
{
    var inputs = document.getElementsByTagName("input");
    var inputsLen = inputs.length;
    for (var i = 0; i < inputsLen; i++)
    {
        if (inputs[i].getAttribute("type") === "text")
        {
            inputs[i].onblur = focusLost;
        }
    }
};

function focusLost()
{
    var id = this.getAttribute("id");
    var functionName = "validate_" + id;
    if (window[functionName](this.value))
    {
        this.className = "correct_field";
    }
    else
    {
        this.className = "incorrect_field";
    }
}

function submitForm()
{
    clearErrorList();
    var inputs = document.getElementsByTagName("input");
    var inputsLen = inputs.length;
    var ok = true;
    for (var i = 0; i < inputsLen; i++)
    {
        if (inputs[i].getAttribute("type") === "text")
        {
            var id = inputs[i].getAttribute("id");
            var functionName = "validate_" + id;
            if (!window[functionName](inputs[i].value))
            {
                ok = false;
                inputs[i].className = "incorrect_field";
                displayErrorField(id);
            }
        }
    }
    if (ok)
    {
        document.getElementById("messages").innerHTML = "<li>" + "Submission Successful" + "</li>";
    }
}

function displayErrorField(id)
{
    var labelTitle = getLabel(id);
    var list = document.getElementById("messages");
    list.innerHTML += "<li>" + "Invalid " + labelTitle + "</li>";
}

function resetForm()
{
    clearFields();
    clearErrorList();
}

function clearFields()
{
    var inputs = document.getElementsByTagName("input");
    var inputsLen = inputs.length;
    for (var i = 0; i < inputsLen; i++)
    {
        if (inputs[i].getAttribute("type") === "text")
        {
            inputs[i].value = "";
        }
    }
}

function clearErrorList()
{
    document.getElementById("messages").innerHTML = "";
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

function validate_surname(value)
{
    console.log(value);
    return value.length >= 3;
}

function validate_first_name(value)
{
    return value.length >= 3;
}

function validate_address(value)
{
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
    return /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value);
}

function validate_phone_number(value)
{
    return /^\d{3}-\d{9}$/.test(value);
}

function validate_email(value)
{
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
}
