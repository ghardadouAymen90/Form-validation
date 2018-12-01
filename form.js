
//START OF ADDING STYLE FOR LABEL
$('.form-group').find('input').on('keyup blur focus', function (e) {

    // Cache our selectors
    var $this = $(this),
        $parent = $this.parent();

    // Add or remove classes
    if (e.type == 'keyup') {
        if ($this.val() == '')
            $parent.addClass('js-hide-label');
        else
            $parent.removeClass('js-hide-label');

    }
    else if (e.type == 'blur') {
        if ($this.val() == '')
            $parent.addClass('js-hide-label');

        else
            $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');

    }
    else if (e.type == 'focus') {
        $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
    }
}) //END OF ADDING STYLE FOR LABEL





//some query selectors
let city = document.querySelector("#inputCity").value
let state = document.querySelector("#inputState").value



//Start of controlling password Input
function checkPassword() {
    let password = document.querySelector("#inputPassword").value
    let secondPassword = document.querySelector("#retypePassword").value
    let arrPass = password.split('')
    if ((password == secondPassword) && (password.length <= 40) && (password.length > 7) && (/[A-Z]/.test(password)) && (extractNumber(password).length > 0) && checkSpecialCaracter())
        return true
    else return false
}//End of controlling password Input



//Start of controlling zip Input
function checkZip() {
    var zip = document.querySelector("#inputZip").value
    if ((zip.length == 4) && (extractNumber(zip).length == 4)) return true
    else return false
}//End of controlling zip Input




//function search special character
function checkSpecialCaracter() {
    let password = document.querySelector("#inputPassword").value
    if (/[!@#$%^&*(),.?":{}|<>]/g.test(password) == true)
        return true;
    else return false;
}//End function special characters




//function to extract numbers from a string
function extractNumber(str) {
    let arr = str.split('').filter(a => a * 0 == 0)
    return arr.join('')
}//End function numbers from string




//function check mail
function checkEmail() {
    let email = document.querySelector("#inputEmail").value
    let copie=email;
    let secondEmail = document.querySelector("#RetypeEmail").value
    if (email.split('').includes("@")) {
        email = email.split('@')
        if ((email.length > 2) || email.length == 1) return false //only one @ present
        else if (email[1].split('').includes(".")) {
            var part2 = email[1].split('.')
            if ((part2.length > 2) || part2.length == 1) return false;
            else if (((part2[1] == "com") || (part2[1] == "fr")) && secondEmail==copie && (/[!@#$%^&*(),.?":{}|<>]/g.test(email[0]) == false) && (/[!@#$%^&*-_(),.?":{}|<>]/g.test(part2[0]) == false)  ) return true;
        }
    }
    return false
}




//Event listener to the click event
document.addEventListener("click", function (event) {
    if (event.target.className == 'btn verification text-white') {
        let adress1 = document.querySelector("#inputAddress").value
        let adress2 = document.querySelector("#inputAddress2").value
        let country = document.querySelector("#inputCountry").value
        let city = document.querySelector("#inputCity").value
        let state = document.querySelector("#inputState").value
        

        if (checkEmail() == false) {
            return alert('Please check your Email adress an retyped email')
        }

        if (checkPassword() == false) {
            return alert('Please check if password and retyped password are correct!')
        }
        if (adress1=="") {
            return alert('Your must enter your adress')
        }
        if ((adress1.length >= 30) || (adress2.length >= 30)) {
            return alert('Your adress is too long')
        }
        
        if (city=="") {
            return alert('Your must enter your city')
        }

        if (state=="") {
            return alert('Your must enter your state')
        }

        if (country=="") {
            return alert('Your must enter your country')
        }

        if (checkZip() == false) {
            return alert('Your Zip code is invalid')
        }

        else alert('your inputs are valid, we are proceding in creating your account')
    }
})
