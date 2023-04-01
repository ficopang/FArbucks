const FORM = document.getElementById('member_form');
FORM.addEventListener('submit', validate_form);

function validate_form(e) {
  e.preventDefault();

  const invalid = document.querySelectorAll('.invalid');
  for (var i = 0; i < invalid.length; i++) {
    invalid[i].classList.remove('invalid');
  }
  const error = document.querySelectorAll('.error');
  for (var i = 0; i < error.length; i++) {
    error[i].innerText = '';
  }

  if (validate_name() == false) {
    return;
  } else if (validate_email() == false) {
    return;
  } else if (validate_password() == false) {
    return;
  } else if (validate_gender() == false) {
    return;
  } else if (validate_country() == false) {
    return;
  } else if (validate_date() == false) {
    return;
  } else if (validate_tos() == false) {
    return;
  }

  alert(
    'Your account has been created successfully' +
      '\nName            : ' +
      document.getElementById('input_name').value +
      '\nEmail             : ' +
      document.getElementById('input_email').value +
      '\nGender          : ' +
      validate_gender() +
      '\nCountry         : ' +
      document.getElementById('input_country').value +
      '\nDate of birth : ' +
      document.getElementById('input_date').value +
      '\n\n' +
      promoswitch()
  );

  FORM.reset();
  return;
}

function validate_name() {
  var name = document.getElementById('input_name');
  var nameError = document.getElementById('input_name_error');

  if (name.value.trim() == '') {
    createError(name, nameError, 'Please fill your full name');
    return false;
  }
  return true;
}

function validate_email() {
  var email = document.getElementById('input_email');
  var emailError = document.getElementById('input_email_error');

  if (email.value == '') {
    createError(email, emailError, 'Please fill your email');
    return false;
  }
  if (email.value.includes(' ')) {
    createError(email, emailError, 'Please fill your email without spaces');
    return false;
  }
  if (email.value.includes('@') == false) {
    createError(email, emailError, 'Please fill your email with @');
    return false;
  }
  if (email.value.endsWith('.com') == false) {
    createError(email, emailError, 'Please fill your email with .com');
    return false;
  }
  return true;
}

function validate_password() {
  var password = document.getElementById('input_password');
  var passwordError = document.getElementById('input_password_error');

  if (password.value == '') {
    createError(password, passwordError, 'Please fill your password');
    return false;
  } else if (password.value.length < 8) {
    createError(
      password,
      passwordError,
      'Password must be at least 8 characters'
    );
    return false;
  } else if (password.value.length > 20) {
    createError(
      password,
      passwordError,
      'Password must be less than 20 characters'
    );
    return false;
  } else if (isAlphaNumeric(password.value)) {
    createError(password, passwordError, 'Password must be alphanumeric');
    return false;
  }
  return true;
}

function validate_gender() {
  var gender = '';
  if (document.getElementById('input_male').checked == true) {
    var gender = 'Male';
  } else if (document.getElementById('input_female').checked == true) {
    var gender = 'Female';
  } else if (document.getElementById('input_unknown').checked == true) {
    var gender = 'Rather not say';
  }

  if (gender == '') {
    alert('Please choose your gender');
    return false;
  }
  return gender;
}

function validate_country() {
  var country = document.getElementById('input_country');
  var countryError = document.getElementById('input_country_error');
  if (country.value == '' || country.value == 'Select country') {
    createError(country, countryError, 'Please choose your country');
    return false;
  }
  return true;
}

function validate_date() {
  var date = document.getElementById('input_date');
  var dateError = document.getElementById('input_date_error');
  var isValidDate = Date.parse(date.value);
  if (isNaN(isValidDate)) {
    createError(date, dateError, 'Please fill your date of birth');
    return false;
  }
  return true;
}

function validate_tos() {
  var tos = document.getElementById('tos_checkbox').checked;
  var tosError = document.getElementById('input_tos_error');

  if (tos == false) {
    createError(tos, tosError, 'Please agree to the terms of service');
    return false;
  }
  return true;
}

function promoswitch() {
  if (document.getElementById('promo_switch').checked) {
    var promo = 'You will receive news about promos and events on your email';
    return promo;
  } else {
    var promo =
      'You will not receive news about promos and events on your email';
    return promo;
  }
}

function createError(elInput, elError, errorMessage) {
  elError.innerText = errorMessage;

  elInput.scrollIntoView();
  elInput.focus();
  elInput.classList.add('invalid');
}

function isAlphaNumeric(value) {
  value = value.toLowerCase();
  for (let i = 0; i < value.length; i++) {
    if (
      (value.charCodeAt(i) < 48 || value.charCodeAt(i) > 57) &&
      (value.charCodeAt(i) < 97 || value.charCodeAt(i) > 122)
    ) {
      return true;
    }
  }
  return false;
}
