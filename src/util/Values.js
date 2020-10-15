const Strings = {
    registration_error_title: "Registration failed.",
    first_name_blank_error: "First name can't be blank.",
    first_name_invalid_error: "First name can't contain number or special characters.",
    last_name_blank_error: "Last name can't be blank.",
    last_name_invalid_error: "Last name can't contain number or special characters.",
    email_blank_error: "Email can't be blank.",
    email_invalid_error: "Enter a valid email id.",
    phone_no_blank_error: "Phone can't be blank.",
    phone_number_invalid_error: "Phone should have 10 or more digits.",
    password_blank_error: "Password can't be blank.",
    password_invalid_error: "Password Must be " +
            "1. At least 8 characters " +
            "2. At least 1 number, 1 lowercase, 1 uppercase letter " +
            "3. At least 1 special character from !\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`",
    confirm_password_blank_error: "Confirm password can't be blank.",
    password_and_confirm_password_not_match_error: "Password and Confirm password doesn't match.",
}

const Attributes = {
    name_pattern: /^[a-zA-Z. ]*$/,
    passwordd_pattern: /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`]).*$/,
    email_pattern: /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i,
}

const Colors = {
    icon_color_code: '#b4bcc0',
    icon_text_color_code: '#71777a', 
    name_color_code: '#34474f', 
    revenue_text_color_code: '#aeb7bb',
}

export { Strings, Attributes, Colors };