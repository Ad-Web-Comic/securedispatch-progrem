// SecureDispatch.js

const nodemailer = require('nodemailer');

// Generate a one-time 4-digit number
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Function to send the one-time code via email
async function sendOTP(email, senderEmail, senderPassword) {
    // Create a SMTP transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: senderEmail,
            pass: senderPassword
        }
    });

    // Generate the one-time code
    const otp = generateOTP();

    // Email content
    let mailOptions = {
        from: senderEmail,
        to: email,
        subject: 'Your One-Time Code',
        text: `Your one-time code is: ${otp}`
    };

    try {
        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log("One-time code sent: %s", info.messageId);
        return otp;
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send OTP");
    }
}

// Export the function for use in other modules
module.exports = sendOTP;
