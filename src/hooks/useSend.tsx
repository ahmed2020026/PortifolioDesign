import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export interface Data {
    user_name: string;
    user_email: string;
    message: string;
}

export const useSend = async ({ user_name, user_email, message }: Data): Promise<boolean> => {
    if (!user_name || !user_email || !message) return false;

    const emailData = {
        user_name,
        user_email,
        message,
        time: new Date().toLocaleString()
    };

    try {
        await emailjs.send(
            'service_6g24gt3',
            'template_imn9jer',
            emailData,
            'WNVR_tWPumhREht6F'
        );

        toast.success("Message sent successfully!");
        return true; // ← هنا return النهائي
    } catch (error) {
        toast.error("Failed to send message");
        return false; // ← هنا return النهائي لو حصل خطأ
    }
};
