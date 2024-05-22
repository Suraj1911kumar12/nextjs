import nodemailer from 'nodemailer'
import { Users } from './models/users';
import bycryptjs from 'bcryptjs'


export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await bycryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await Users.findByIdAndUpdate(userId,
                {
                    $set: {
                        verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000
                    }
                }
            )
        }
        else if (emailType === 'RESET') {
            await Users.findByIdAndUpdate(userId,
                {
                    $set: {
                        forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000
                    }
                }
            )
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5e30824a538594",
                pass: "51ccad360862ff"
            }
        });

        const mailOption = {
            from: 'suraj1234@gmail.com', // sender address
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify Your Email' : "Reset Your Password",
            html: `<p>Click <a href='' >here</a> to reset your password ${token} </p>`,
        }


        const mailResponse = await transporter.sendMail(mailOption);
        return mailResponse
    } catch (error) {
        throw new Error(error.message)
    }
}