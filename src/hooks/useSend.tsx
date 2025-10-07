import emailjs from '@emailjs/browser';
import { toast } from "sonner"

export interface Data {
    user_name: string,
    user_email: string,
    message: string
}

export const useSend = ({ user_name, user_email, message }: Data) => {
    const emailData = {
        user_name: user_name,   // من الفورم أو state
        user_email: user_email, // من الفورم أو state
        time: new Date().toLocaleString(), // ممكن تعمل current date/time
        message: message        // نص الرسالة
    };
    try {
        emailjs.send(
            'service_6g24gt3',
            'template_imn9jer',
            emailData,
            'WNVR_tWPumhREht6F'
        ).then(() => {
            toast.success("Message sent successfully!")
        })
    } catch (error) {
        toast.error("Failed to send message")
    }
}

