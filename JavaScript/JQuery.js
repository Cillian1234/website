$(document).ready(function(){
    $("#shipDetails").click(function (){
        $("#menu").slideToggle(300);
    });

    $("#emailError").hide();
    $("#addressError").hide();
    $("#cityError").hide();
    $("#countryError").hide();
    $("#shippingError").hide();
    $("#termsError").hide();

    let emailError = false,
        addressError = false,
        cityError = false,
        countryError = false,
        shippingError = false,
        termsError = false;

    $("#Email").focusout(function (){validateEmail();});
    $("#Address").focusout(function (){validateAddress();});
    $("#City").focusout(function (){validateCity();});
    $("#Country").focusout(function (){validateCountry();});
    $("#Shipping").focusout(function (){validateShipping();});
    $("#Terms").focusout(function (){validateTerms();});

    function validateEmail() {
        let pattern = /^[a-zA-Z]@[a-zA-Z].[a-zA-Z]*$/,
            email = $("#Email").val();
        if (pattern.test(email) && email !== "") {
            $("#emailError").hide();
        } else {
            $("#emailError").html("Email should be in format ('Email@example.com')");
            $("#emailError").show();
            emailError = true;
        }
    }

});