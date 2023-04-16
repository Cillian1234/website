$(document).ready(function() {
    $("#shipDetails").click(function () {
        $("#ShippingForm").slideToggle(300);
    })

    $("#emailError").hide();
    $("#addressError").hide();
    $("#cityError").hide();
    $("#countryError").hide();

    let emailError = false,
        addressError = false,
        cityError = false,
        countryError = false,
        termsError = false;
        CardNumberError = false,
        ExpirationDateError = false,
        CVVError = false,
        cardholderNameError = false;

    $("#Email").focusout(function (){validateEmail();});
    $("#Address").focusout(function (){validateAddress();});
    $("#City").focusout(function (){validateCity();});
    $("#Country").focusout(function (){validateCountry();});
    $("#CardNumber").focusout(function (){validateCardNum();});
    $("#ExpirationDate").focusout(function (){validateExpirDate();});
    $("#CVV").focusout(function (){validateCVV();});
    $("#cardholderName").focusout(function (){validateCardName();});

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
    function validateCardNum() {
        let pattern =  /^[\s0-9]*$/,
            CardNum = $("#CardNumber").val();
        if (pattern.test(CardNum) && CardNum !== '') {
            $("#CardNumberError").hide();
            CardNumberError = false;
        } else {
            $("#CardNumberError").html("This field is required, 0-9 only");
            $("#CardNumberError").show();
            CardNumberError = true;
        }
    }
    function validateExpirDate() {
        let pattern =  /^\d\/\d*$/,
            ExpirDate = $("#ExpirationDate").val();
        if (pattern.test(ExpirDate) && ExpirDate !== '') {
            $("#ExpirationDateError").hide();
            ExpirationDateError = false;
        } else {
            $("#ExpirationDateError").html("This field is required, Format: xx/xx");
            $("#ExpirationDateError").show();
            ExpirationDateError = true;
        }
    }
    function validateCVV() {
        let pattern =  /^[0-9]*$/,
            CVV = $("#CVV").val();
        if (pattern.test(CVV) && CVV !== '') {
            $("#CVVError").hide();
            CVVError = false;
        } else {
            $("#CVVError").html("This field is required");
            $("#CVVError").show();
            CVVError = true;
        }
    }
    function validateCardName() {
        let pattern =  /^[\sa-zA-Z]*$/,
            CardName = $("#cardholderName").val();
        if (pattern.test(CardName) && CardName !== '') {
            $("#cardholderNameError").hide();
            cardholderNameError = false;
        } else {
            $("#cardholderNameError").html("This field is required, letters a-z only");
            $("#cardholderNameError").show();
            cardholderNameError = true;
        }
    }

    $("#ShippingForm").submit(function () {
        validateEmail();
        validateAddress();
        validateCity();
        validateCountry();

        if (emailError === false && addressError === false && cityError === false && countryError === false && termsError === false) {
            $("#PaymentForm").slideDown(300);
        } else {
            alert("Try again");
        }
    });
    
    $("#PaymentForm").submit(function () {
        validateCardNum();
        validateExpirDate();
        validateCVV();
        validateCardName();

        if (CardNumberError === false && ExpirationDateError === false && CVVError === false && cardholderNameError === false) {
            alert("Success");
        } else {
            alert("Try again");
        }
    });
});
