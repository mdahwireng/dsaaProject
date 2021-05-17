// rom validation function
function reqValidate(event) {
    form = document.getElementById("reservation")
    var btn = document.getElementById("req_val");
    event.preventDefault();
    var reqFills = document.getElementsByClassName("fill")

    for (var i = 0; i < reqFills.length; i++) {
        //checks to see if required inputs are filled
        if (reqFills[i].value === "") {
            alert("Please do not leave the name, tel, date and time blank")
            return
        }
    }

    var reqCheckBoxes = document.getElementsByClassName("req");
    //checks to see if a service is selected
    for (var i = 0; i < reqCheckBoxes.length; i++) {
        if (reqCheckBoxes[i].checked) {
            form.submit();
            alert("Data added successfully")
            break;
        }

        if (i === reqCheckBoxes.length - 1) {
            alert("Select A Service");
        }
    }
}

// adds an event listener to the submit button
var validationOnSubmit = document.getElementById("req_val");
validationOnSubmit.addEventListener("click", reqValidate);