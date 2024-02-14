// Import the sendOTP function from the SecureDispatch.js module
const sendOTP = require('./SecureDispatch');

// Function to send OTP
function sendOTP() {
    // Replace these values with actual email addresses and passwords
    const recipientEmail = 'recipient@example.com';
    const senderEmail = 'sender@gmail.com';
    const senderPassword = 'sender_password';

    // Call the sendOTP function from the SecureDispatch module
    sendOTP(recipientEmail, senderEmail, senderPassword)
        .then(otp => {
            console.log('One-time code sent:', otp);
            // Handle successful OTP sending
        })
        .catch(error => {
            console.error('Error sending OTP:', error);
            // Handle error
        });
}

// Call the sendOTP function
sendOTP();
