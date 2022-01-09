const inputs = document.querySelectorAll("input[type='text'], input[type='password']")
const passwordToggles = document.querySelectorAll(".password-toggle")
const nameField = document.getElementById("name")
const emailField = document.getElementById("email")
const passwordField = document.getElementById("password")
const confirmPasswordField = document.getElementById("confirm-password")
const formToValidate = document.getElementById("formToValidate")

const nameRequiredMessage = "Name is required"
const emailRequiredMessage = "Email is required"
const emailInvalidMessage = "Please enter a valid email"
const passwordRequiredMessage = "Password is required"
const confirmPasswordMismatch = "Password and confirm password must match"

InitilizeInputs()
CheckName()
CheckEmail()
CheckPassword()
nameField.addEventListener("change", CheckName)
emailField.addEventListener("change", CheckEmail)
passwordField.addEventListener("change", CheckPassword)
confirmPasswordField.addEventListener("change", CheckConfirmPassword)

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", MoveLabelTop)
    inputs[i].addEventListener("blur", MoveLabelBot)
}

for (let i = 0; i < passwordToggles.length; i++) {
    passwordToggles[i].addEventListener("click", TogglePasswordVisibility)
}

formToValidate.addEventListener('submit', function (e) {
    ValidateForm(e)
})

function CheckName() {
    var isValid = true
    ClearValidation(nameField)
    if (nameField.value == "") {
        InsertAfter(CreateValidationElement(true, nameRequiredMessage), nameField)
        isValid = false
    } else {
        InsertAfter(CreateValidationElement(), nameField)
    }
    return isValid
}

function CheckEmail() {
    var isValid = true
    ClearValidation(emailField)
    if (emailField.value == "") {
        InsertAfter(CreateValidationElement(true, emailRequiredMessage), emailField)
        isValid = false
    } else {
        if (IsValidEmail(emailField.value) == false) {
            InsertAfter(CreateValidationElement(true, emailInvalidMessage), emailField)
            isValid = false
        } else {
            InsertAfter(CreateValidationElement(), emailField)
        }
    }
    return isValid
}

function IsValidEmail(email) {
    isValid = true
    let match =  String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    if (match == null) {
        isValid = false
    }
    return isValid
}

function CheckPassword() {
    var isValid = true
    ClearValidation(passwordField)
    if (passwordField.value == "") {
        InsertAfter(CreateValidationElement(true, passwordRequiredMessage), passwordField)
        var isValid = false
    } else {
        InsertAfter(CreateValidationElement(), passwordField)
    }
    return isValid
}

function CheckConfirmPassword() {
    var isValid = true
    ClearValidation(confirmPasswordField)
    if (confirmPasswordField.value != passwordField.value) {
        InsertAfter(CreateValidationElement(true, confirmPasswordMismatch), confirmPasswordField)
        var isValid = false
    } else {
        InsertAfter(CreateValidationElement(), confirmPasswordField)
    }
    return isValid
}

function ClearValidation(field) {
    let nextSibling = field.nextElementSibling
    if (nextSibling != null) {
        nextSibling.remove()
    }
}

function InitilizeInputs() {
    for (let i = 0; i < inputs.length; i++) {
        InitilizeLabel(inputs[i])
    }
}

function TogglePasswordVisibility(e) {
    e.target.classList.toggle("password-hide")
    let previousSibling = e.target.previousElementSibling
    if (previousSibling.type == "text") {
        previousSibling.type = "password"
    } else {
        previousSibling.type = "text"
    }
}

function MoveLabelTop(e) {
    const label = document.querySelector(`label[for='${e.target.id}']`)
    label.classList.add("label-top")
}

function InitilizeLabel(element) {
    if (element.value.length > 0) {
        const label = document.querySelector(`label[for='${element.id}']`)
        label.classList.add("label-top")
    }
}

function MoveLabelBot(e) {
    const label = document.querySelector(`label[for='${e.target.id}']`)
    if (e.target.value.length == 0) {
        label.classList.remove("label-top")
    }
}

function ValidateForm(e) {
    // let userName = document.forms["formToValidate"]["name"].value
    
    if (CheckName() == false || CheckEmail() == false || CheckPassword() == false || CheckConfirmPassword() == false) {
        // InsertAfter(CreateValidationElement(true, nameRequiredMessage), nameField)
        e.preventDefault()
    } else {
        // InsertAfter(CreateValidationElement(), nameField)
    }
}

function InsertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function CreateValidationElement(isError = false, message = "") {
    var validationDiv = document.createElement("div")
    validationDiv.classList.add("validation")
    var validationIcon = document.createElement("div")
    validationIcon.classList.add("validation-icon")
    if (isError == false) {
        validationIcon.classList.add("success")
    }
    var validationText = document.createElement("div")
    validationText.classList.add("validation-text")
    if (message != "") {
        validationText.innerText = message
    }
    validationDiv.appendChild(validationIcon)
    validationDiv.appendChild(validationText)

    return validationDiv
}