import emailjs from '@emailjs/browser';
import { toast } from "sonner"

export interface Data {
    name: string,
    gmail: string,
    message: string
}

export const useSend = ({ name, gmail, message }: Data) => {
    try {
        if (name === '' || gmail === '' || message === '') {
            throw new Error('Please fill all fields');
        }

        emailjs.send(
            'service_6g24gt3',
            'template_imn9jer',
            {
                name,
                gmail,
                message,
            },
            'WNVR_tWPumhREht6F'
        ).then(() => {
            toast.success("Message sent successfully!")
        })
    } catch (error) {
        toast.error("Failed to send message")
    }
}

