$(document).ready(function(){
    $("#shipDetails").click(function (){
        $("#menu").slideToggle(300);
    });

    $("#form").validate({
        rules: {
            name: {
                required: true,
                // minLength: 5
            },
            address: "required",
            phoneNumber: {
                required: true,
                // pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
            },
            email: {
                required: true,
                email: true
            },
            gender: {
                required: true
            },
            terms: {
                required: true
            }
        },

        messages : {
            name: {
                required: "Required",
                minLength: "Minimum length of 5"
            },
            address: "Please enter your address",
            phoneNumber: {
                required: "Please enter your phone number",
                pattern: "Please match the required pattern"
            },
            email: {
                required: "You must enter an email address",
                email: "The email should be in the format: abc@domain.tld"
            },
            gender: {
                required: "Required"
            },
            terms: {
                required: "Required"
            }
        }
    });
});