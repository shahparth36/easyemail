const nodemailer = require("nodemailer");

class EmailService {
    constructor(authenticationEmail, authenticationPassword, authenticationAccountName) {
        this.authenticationEmail = authenticationEmail;
        this.authenticationPassword = authenticationPassword;
        this.authenticationAccountName = authenticationAccountName;
    }

    sendEmail(emailIDToBeSentTo,subjectOfEmail, textToBeSentInEmail) {
        var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: "Gmail",
        auth: {
            user: this.authenticationEmail,
            pass: this.authenticationPassword,
        },
    });

    transporter.sendMail({
        from: `${this.authenticationAccountName} <${this.authenticationEmail}>`,
        to: emailIDToBeSentTo,
        subject: subjectOfEmail,
        text: textToBeSentInEmail
    }, (err, result) => {
        if (err)
            console.log(err);
        else
            console.log(result);
        transporter.close();
    });
    }
}

module.exports = EmailService;