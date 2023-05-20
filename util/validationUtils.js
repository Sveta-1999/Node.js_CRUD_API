function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
  
function isValidPhoneNumber(phoneNumber) {
    return /^\+374\d{8}$/.test(phoneNumber);
}
  
function isValidGender(gender) {
    const validGenders = ['male', 'female'];
    return validGenders.includes(gender.toLowerCase());
}
  
function isValidAge(age) {
    return Number.isInteger(age) && age > 0;
}
  
module.exports = {
    isValidEmail,
    isValidPhoneNumber,
    isValidGender,
    isValidAge
};
  