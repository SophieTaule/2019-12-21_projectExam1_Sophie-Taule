
// function to validate strings the user can put in  
    function validate() {

        var firstNameError =/^[a-zA-Z ]+$/;
        var lastNameError = /^[a-zA-Z ]+$/;
        var phoneError = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var emailError = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var firstNamevalid, lastNamevalid, phonevalid, emailvalid;

        if(firstNameError.test(document.getElementById("firstName").value)){
            document.getElementById("firstNameError").style.display = "none"
            firstNamevalid = true;
        }
        else{
            document.getElementById("firstNameError").style.display = "block"
            firstNamevalid = false;
        }

        if(lastNameError.test(document.getElementById("lastName").value)){
            document.getElementById("lastNameError").style.display = "none"
            lastNamevalid = true;
        }
        else{
            document.getElementById("lastNameError").style.display = "block"
            lastNamevalid = false;
        }

        if(phoneError.test(document.getElementById("phone").value)){
            document.getElementById("phoneError").style.display = "none"
            phonevalid = true;
        }
        else{
            document.getElementById("phoneError").style.display = "block"
            phonevalid = false;
        }

        if(emailError.test(document.getElementById("email").value)){
            document.getElementById("emailError").style.display = "none"
            emailvalid = true;
        }
        else{
            document.getElementById("emailError").style.display = "block"
            emailvalid = false;
        }
    
        // alert showing if the user has error in form 
        if(!firstNamevalid || !lastNamevalid || !phonevalid || !emailvalid) {
            alert('Please correct the errors in the form!');
            event.preventDefault()
            return false;
        }
        else {
            return confirm('Send message?');
        }
    }
