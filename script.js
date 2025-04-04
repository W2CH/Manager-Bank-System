document.addEventListener("DOMContentLoaded",function(){

})

document.getElementById("SubmitNewCust").addEventListener("click",validateAddCust);

function validateAddCust(){
    const id = document.getElementById("ID").value;
    const ssn = document.getElementById("SSN").value;
    const fName = document.getElementById("FName").value;
    const lName = document.getElementById("LName").value;
    const sex = document.getElementById("Sex").value;
    const dob = document.getElementById("DOB").value;
    const addy = document.getElementById("Addy").value;
    const phoneNum = document.getElementById("PhoneNum").value;

    let valid = true;
    let errMsg = "Error Missing/Invalid Fields: <br><br>";

    document.getElementById("notice").innerHTML = "";

    if (id ===''){
        valid = false;
        errMsg += "ID required.<br>";
    }

    if (fName === '' || lName === '') {
        valid = false;
        errMsg += "First and Last Name are required.<br>";
    }

    if (sex ===''){
        valid = false;
        errMsg += "Sex required.<br>";
    }

    if(addy ===''){
        valid = false;
        errMsg +="Address required.<br>";
    }

    if(dob === ''){
        valid = false;
        errMsg += "Date of Birth required.<br>";
    }

    const ssnRegex = /^\d{9}$/;
    if (ssn === '' && !ssnRegex.test(ssn)) {
        valid = false;
        errMsg += "SSN must be 9 digits.<br>";
    }

    const phoneRegex = /^\d{10}$/;
    if (phoneNum === '' && !phoneRegex.test(phoneNum)) {
        valid = false;
        errMsg += "Phone Number must be 10 digits.<br>";
    }


    if(valid){
        document.getElementById("notice").innerHTML += "<br><br><strong>SUBMITTED!</strong>";
        addNewCustToDB(); // add to DB
    }
    else {
        document.getElementById("notice").innerHTML += "<br><br>" + errMsg;
    }

}

function addNewCustToDB(){
    // TODO
}