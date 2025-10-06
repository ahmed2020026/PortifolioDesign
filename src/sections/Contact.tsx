import { Mail, Phone, Linkedin, Facebook, Github } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { getThemes } from "@/context/Mode";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
    const { order } = getThemes()!;

    return (
        <section id="contact" className={`py-20 px-6 ${order ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
            <div className="container ">
                <div className="container mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">Contact Me</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Feel free to reach out anytime — I’d love to hear from you!
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* ===== Left Info Section ===== */}
                    <div className="flex flex-col gap-4">
                        {/* Gmail */}
                        <div
                            className={`flex items-center gap-3 px-3 py-2 rounded-xl shadow border ${order
                                ? "bg-gray-800 border-gray-700 text-gray-200"
                                : "bg-gray-100 border-gray-200 text-gray-800"
                                }`}
                        >
                            <Avatar aria-hidden='true' className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                <Mail className="text-blue-500" size={22} aria-hidden="true" />
                            </Avatar>
                            <div className="flex flex-col leading-tight">
                                <h3 className="text-sm font-semibold">Gmail</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    ahmedsamirhad17@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div
                            className={`flex items-center gap-3 px-3 py-2 rounded-xl shadow border ${order
                                ? "bg-gray-800 border-gray-700 text-gray-200"
                                : "bg-gray-100 border-gray-200 text-gray-800"
                                }`}
                        >
                            <Avatar aria-hidden='true' className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                <Phone className="text-blue-500" size={22} aria-hidden="true" />
                            </Avatar>
                            <div className="flex flex-col leading-tight">
                                <h3 className="text-sm font-semibold">Phone</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +20 106 348 3113
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center lg:justify-start gap-2">
                            <a href="https://github.com/ahmed2020026" rel="noopener noreferrer" aria-label="Github" target="_blank">
                                <Avatar className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                    <Github className="text-blue-500" size={22} />
                                </Avatar>
                            </a>
                            <a href="https://www.linkedin.com/in/ahmed-samir-513237251" rel="noopener noreferrer" aria-label="LinkedIn" target="_blank">
                                <Avatar className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                    <Linkedin className="text-blue-500" size={22} />
                                </Avatar>
                            </a>
                            <a href="https://www.facebook.com/share/16AS9EoBzS/" rel="noopener noreferrer" aria-label="facebook" target="_blank">
                                <Avatar className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                                    <Facebook className="text-blue-500" size={22} />
                                </Avatar>
                            </a>
                        </div>
                    </div>

                    {/* ===== Form Section ===== */}
                    <div
                        className={`lg:col-span-2 p-6 rounded-xl shadow border ${order
                            ? "bg-gray-800 border-gray-700"
                            : "bg-white border-gray-200"
                            }`}
                    >
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col gap-4"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <Input type="text"
                                    name="user_name"
                                    aria-label="Your Name"
                                    placeholder="Your Name"
                                    style={{ transition: 'all 150ms' }}
                                    className={`w-full px-4 py-2 rounded-lg outline-none resize-none ${order
                                        ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                                        }`} />
                                <Input type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    aria-label="Your Email"
                                    style={{ transition: 'all 150ms' }}
                                    className={`w-full px-4 py-2 rounded-lg border outline-none resize-none ${order
                                        ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                                        }`} />
                            </div>

                            <Textarea
                                rows={5}
                                name="message"
                                aria-label="message"
                                placeholder="Your Message..."
                                style={{ transition: 'all 150ms' }}
                                className={`w-full px-4 py-2 rounded-lg outline-none resize-none ${order
                                    ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                                    }`}
                            ></Textarea>
                            <Button size="lg" type="submit" className="bg-blue-500 text-white cursor-pointer hover:bg-blue-700">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
