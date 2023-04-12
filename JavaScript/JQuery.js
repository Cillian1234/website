$(document).ready(function() {
    $("#shipDetails").click(function () {
        $("#ShippingForm").slideToggle(300);
    })

    $("#emailError").hide();
    $("#addressError").hide();
    $("#cityError").hide();
    $("#countryError").hide();
    $("#termsError").hide();

    let emailError = false,
        addressError = false,
        cityError = false,
        countryError = false,
        termsError = false;

    $("#Email").focusout(function (){validateEmail();});
    $("#Address").focusout(function (){validateAddress();});
    $("#City").focusout(function (){validateCity();});
    $("#Country").focusout(function (){validateCountry();});
    $("#Terms").focusout(function (){validateTerms();});

    function validateEmail() {
        let pattern = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            email = $("#Email").val();
        if (pattern.test(email) && email !== '') {
            $("#emailError").hide();
            emailError = false;
        } else {
            $("#emailError").html("Email should be in format ('Email@example.com')");
            $("#emailError").show();
            emailError = true;
        }
    }
    function validateAddress() {
        let pattern =  /^[\s0-9a-zA-Z]*$/,
            address = $("#Address").val();
        if (pattern.test(address) && address !== '') {
            $("#addressError").hide();
            addressError = false;
        } else {
            $("#addressError").html("This field is required");
            $("#addressError").show();
            addressError = true;
        }
    }
    function validateCity() {
        let pattern =  /^[a-zA-Z]*$/,
            City = $("#City").val();
        if (pattern.test(City) && City !== '') {
            $("#cityError").hide();
            cityError = false;
        } else {
            $("#cityError").html("This field is required");
            $("#cityError").show();
            cityError = true;
        }
    }
    function validateCountry() {
        let pattern =  /^[a-zA-Z]*$/,
            Country = $("#Country").val();
        if (pattern.test(Country) && Country !== '') {
            $("#countryError").hide();
            countryError = false;
        } else {
            $("#countryError").html("This field is required");
            $("#countryError").show();
            countryError = true;
        }
    }
    function validateTerms() {
        let terms = $("#Terms").val();
        if (terms) {
            $("#termsError").hide();
            termsError = false;
        } else {
            $("#termsError").html("This field is required");
            $("#termsError").show();
            termsError = true;
        }
    }

    $("#ShippingForm").submit(function () {
        validateEmail();
        validateAddress();
        validateCity();
        validateCountry();
        validateTerms();

        if (emailError === false && addressError === false && cityError === false && countryError === false && termsError === false) {
            alert("Success");
            return true;
        } else {
            alert("Try again");
            return false;
        }
    });
});
