import { Mail, Phone, Linkedin, Facebook, Github } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { getThemes } from "@/context/Mode";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { Data, useSend } from "@/hooks/useSend";
import { Title } from "@/components/ui/Title";
import { Spinner } from "@/components/ui/Spinner";

export const ContactSection = () => {
    const { order } = getThemes()!;
    const [loading, setLoading] = useState(false);
    const Data = useRef<HTMLFormElement>(null);

    const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = Data.current;
        if (!form) return;

        const nameInput = form.querySelector<HTMLInputElement>('input[name="user_name"]');
        const emailInput = form.querySelector<HTMLInputElement>('input[name="user_email"]');
        const messageInput = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

        // ❌ validation
        if (!nameInput?.value.trim()) { nameInput?.focus(); return; }
        if (!emailInput?.value.trim()) { emailInput?.focus(); return; }
        if (!messageInput?.value.trim()) { messageInput?.focus(); return; }

        try {
            setLoading(true);

            const formData = new FormData(form);

            const PersonalData: Data = {
                user_name: formData.get("user_name") as string,
                user_email: formData.get("user_email") as string,
                message: formData.get("message") as string,
            };

            const res = await useSend(PersonalData);

            if (res) {
                Data.current?.reset();
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className={`py-20 px-6 flex justify-center items-center ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
            <div className="container">

                {/* Header */}
                <Title title="Contact Me" subTitle="Feel free to reach out anytime — I’d love to hear from you!" />

                <div className="grid lg:grid-cols-3 gap-8 items-start mt-10">

                    {/* Left Info */}
                    <div className="flex flex-col gap-4">

                        {/* Gmail */}
                        <div data-aos="fade-right">
                            <div className={`flex items-center gap-3 px-3 py-2 rounded-xl shadow border ${order ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-gray-100 border-gray-200 text-gray-800"}`}>
                                <Avatar className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                    <Mail className="text-blue-500" size={22} />
                                </Avatar>
                                <div>
                                    <h3 className="text-sm font-semibold">Gmail</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        ahmedsamirhad17@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div data-aos="fade-right" data-aos-delay="100">
                            <div className={`flex items-center gap-3 px-3 py-2 rounded-xl shadow border ${order ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-gray-100 border-gray-200 text-gray-800"}`}>
                                <Avatar className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                    <Phone className="text-blue-500" size={22} />
                                </Avatar>
                                <div>
                                    <h3 className="text-sm font-semibold">Phone</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        +20 106 348 3113
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div data-aos="fade-right" data-aos-delay="200">
                            <div className="flex gap-2">
                                <a href="https://github.com/ahmed2020026" target="_blank">
                                    <Avatar className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10">
                                        <Github className="text-blue-500" size={22} />
                                    </Avatar>
                                </a>
                                <a href="https://www.linkedin.com/in/a7med-samir" target="_blank">
                                    <Avatar className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10">
                                        <Linkedin className="text-blue-500" size={22} />
                                    </Avatar>
                                </a>
                                <a href="https://www.facebook.com/share/16AS9EoBzS/" target="_blank">
                                    <Avatar className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10">
                                        <Facebook className="text-blue-500" size={22} />
                                    </Avatar>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div data-aos="fade-left" className="lg:col-span-2">
                        <div className={`p-6 rounded-xl shadow border ${order ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>

                            <form ref={Data} onSubmit={Submit} className="flex flex-col gap-4">

                                <div className="flex flex-col md:flex-row gap-4">
                                    <Input
                                        name="user_name"
                                        placeholder="Your Name"
                                        className="w-full"
                                    />
                                    <Input
                                        name="user_email"
                                        placeholder="Your Email"
                                        className="w-full"
                                    />
                                </div>

                                <Textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message..."
                                />

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-blue-500 text-white hover:bg-blue-700"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <Spinner /> Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};