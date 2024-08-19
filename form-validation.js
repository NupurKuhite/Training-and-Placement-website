// Get form and input elements
const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const fatherName = document.getElementById('fatherName');
const photo = document.getElementById('photo');
const address = document.getElementById('address');
const city = document.getElementById('city');
const region = document.getElementById('region');
const pin = document.getElementById('pin');
const country = document.getElementById('country');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const gender = document.querySelector('input[name="gender"]:checked');
const matrix = document.getElementById('matrix');
const twelvePercentage = document.getElementById('twelvePercentage');
const course = document.getElementById('course');
const institute = document.getElementById('institute');
const university = document.getElementById('university');
const yearPassing = document.getElementById('yearPassing');
const cgpa = document.getElementById('cgpa');
const cv = document.getElementById('cv');
const portfolio = document.getElementById('portfolio');
const declaration = document.getElementById('declaration');

// Add event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Set error message and styles
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Set success styles
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Validate email format
const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Validate URL format
const isValidURL = url => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};



const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const dobValue = dob.value;
    const fatherNameValue = fatherName.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const regionValue = region.value.trim();
    const pinValue = pin.value.trim();
    const countryValue = country.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const matrixValue = matrix.value.trim();
    const twelvePercentageValue = twelvePercentage.value.trim();
    const courseValue = course.value.trim();
    const instituteValue = institute.value.trim();
    const universityValue = university.value.trim();
    const yearPassingValue = yearPassing.value.trim();
    const cgpaValue = cgpa.value.trim();
    const portfolioValue = portfolio.value.trim();

    let isValid = true;

    // Validation logic...
    // Example:
    if (firstNameValue === '') {
        setError(firstName, 'First Name is required');
        isValid = false;
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Last Name is required');
        isValid = false;
    } else {
        setSuccess(lastName);
    }

    if (dobValue === '') {
        setError(dob, 'Date of Birth is required');
        isValid = false;
    } else {
        setSuccess(dob);
    }

    if (fatherNameValue === '') {
        setError(fatherName, 'Father\'s Name is required');
        isValid = false;
    } else {
        setSuccess(fatherName);
    }

    if (!photo.files.length) {
        setError(photo, 'Photo is required');
        isValid = false;
    } else if (!photo.files[0].type.startsWith('image/')) {
        setError(photo, 'Photo must be an image file');
        isValid = false;
    } else {
        setSuccess(photo);
    }

    if (addressValue === '') {
        setError(address, 'Permanent Address is required');
        isValid = false;
    } else {
        setSuccess(address);
    }

    if (cityValue === '') {
        setError(city, 'City is required');
        isValid = false;
    } else {
        setSuccess(city);
    }

    if (regionValue === '') {
        setError(region, 'Region/District is required');
        isValid = false;
    } else {
        setSuccess(region);
    }

    if (pinValue === '' || !/^\d{6}$/.test(pinValue)) {
        setError(pin, 'Pin Code must be a 6-digit number');
        isValid = false;
    } else {
        setSuccess(pin);
    }

    if (countryValue === '') {
        setError(country, 'Country is required');
        isValid = false;
    } else {
        setSuccess(country);
    }

    if (mobileValue === '' || !/^\d{10}$/.test(mobileValue)) {
        setError(mobile, 'Mobile Number must be a 10-digit number');
        isValid = false;
    } else {
        setSuccess(mobile);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (matrixValue === '' || isNaN(matrixValue) || matrixValue < 0 || matrixValue > 100) {
        setError(matrix, '10th Grade Percentage must be between 0 and 100');
        isValid = false;
    } else {
        setSuccess(matrix);
    }

    if (twelvePercentageValue === '' || isNaN(twelvePercentageValue) || twelvePercentageValue < 0 || twelvePercentageValue > 100) {
        setError(twelvePercentage, '12th Grade Percentage or Diploma Percentage must be between 0 and 100');
        isValid = false;
    } else {
        setSuccess(twelvePercentage);
    }

    if (courseValue === '') {
        setError(course, 'Course is required');
        isValid = false;
    } else {
        setSuccess(course);
    }

    if (instituteValue === '') {
        setError(institute, 'Institute is required');
        isValid = false;
    } else {
        setSuccess(institute);
    }

    if (universityValue === '') {
        setError(university, 'University is required');
        isValid = false;
    } else {
        setSuccess(university);
    }

    if (yearPassingValue === '' || isNaN(yearPassingValue) || yearPassingValue < 1900 || yearPassingValue > new Date().getFullYear()) {
        setError(yearPassing, 'Year of Passing must be a valid year');
        isValid = false;
    } else {
        setSuccess(yearPassing);
    }

    if (cgpaValue === '' || isNaN(cgpaValue) || cgpaValue < 0 || cgpaValue > 10) {
        setError(cgpa, 'CGPA/Percentage must be between 0 and 10');
        isValid = false;
    } else {
        setSuccess(cgpa);
    }

    if (!cv.files.length) {
        setError(cv, 'CV is required');
        isValid = false;
    } else if (!cv.files[0].type.endsWith('pdf')) {
        setError(cv, 'CV must be a PDF file');
        isValid = false;
    } else {
        setSuccess(cv);
    }

    if (portfolioValue === '' || !isValidURL(portfolioValue)) {
        setError(portfolio, 'Provide a valid Portfolio URL');
        isValid = false;
    } else {
        setSuccess(portfolio);
    }

    if (!declaration.checked) {
        setError(declaration, 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        setSuccess(declaration);
    }


    // Additional validation checks...
    
    // If all fields are valid
    if (isValid) {
        alert('Form submitted successfully!');
        
        // Manually submit the form or handle form data as needed
        // If you need to submit the form data via AJAX, do it here
        // For now, we'll just reset the form
        
        document.getElementById('registrationForm').reset(); // Reset the form fields

        // Clear validation states (success/error classes)
        document.querySelectorAll('.success').forEach(element => {
            element.classList.remove('success');
        });
        document.querySelectorAll('.error').forEach(element => {
            element.classList.remove('error');
            const errorDisplay = element.querySelector('.error');
            if (errorDisplay) {
                errorDisplay.innerText = '';
            }
        });

    }
};

