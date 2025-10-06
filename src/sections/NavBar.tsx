import { NavLinks } from "@/assets/system";
import { Button } from "@/components/ui/button";
import { getThemes } from "@/context/Mode";
import { GetHeight } from "@/hooks/GetHeight";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useRef, useState } from "react";

export const Navbar = () => {
    const { order, setOrder } = getThemes()!
    const Ref = useRef<HTMLDivElement>(null);

    /* getHeigh From Custom Hook */
    const h: number = GetHeight(Ref as React.RefObject<HTMLElement>)

    /* States */
    const [open, setOpen] = useState<boolean>(false)
    //const [themes, setThemes] = useState<boolean>(false)

    /* Change Status Menu */
    const toggle = () => {
        setOpen(!open)
    }

    /* Change Themes */
    const Themes = () => {
        setOrder(!order)
    }

    /* scroll to bookmark */
    const scrollToBookMark = (e: string) => {
        document.getElementById(e)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={`container rounded-lg shadow ${order ? 'bg-gray-950' : 'bg-white'}  relative`}>
            <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                    <h2 className={`font-bold text-2xl ${order ? 'text-gray-50' : 'text-gray-950'}`}>A.<span className="text-blue-600">SAMIR</span></h2>
                    {/* menu in large Screen */}
                    <nav className="hidden md:block" >
                        {
                            NavLinks.map((item: Record<string, string>, index: number) => (
                                <Button key={index} variant="ghost" className={`cursor-pointer bg-transparent  ${order ? 'text-stone-400 hover:text-blue-600 hover:bg-gray-900' : 'text-stone-600 hover:text-blue-600'}`} onClick={() => scrollToBookMark(item.rots)}>
                                    {item.link}
                                </Button>
                            ))
                        }
                    </nav>
                    {/* menu in small Screen */}
                    <nav className={`md:hidden absolute top-[103%] w-full p-2 left-0  shadow rounded-md ${order ? 'bg-gray-950' : 'bg-white'}`} ref={Ref} style={{
                        height: ` ${open ? h : 0}px`,
                        opacity: `${open ? 1 : 0}`,
                        overflow: "hidden",
                        transition: "height 0.25s ease, opacity 0.33s ease, background-color 150ms ease",
                    }}>
                        {
                            NavLinks.map((item: Record<string, string>, index: number) => (
                                <Button key={index} variant="ghost" className={`cursor-pointer text-left block w-full bg-transparent  ${order ? 'text-stone-400 hover:text-blue-600 hover:bg-gray-900' : 'text-stone-600 hover:text-blue-600'}`}>
                                    {item.link}
                                </Button>
                            ))
                        }
                    </nav>
                </div>
                <div className="icons">
                    <Button variant="ghost" className={`cursor-pointer md:hidden bg-transparent  ${order ? 'text-stone-200 hover:text-stone-200 hover:bg-gray-900' : 'text-stone-600 hover:text-blue-600'}`} aria-label="btn_menu" onClick={toggle}>
                        <Menu className={open ? 'hidden' : ''} />
                        <X className={!open ? 'hidden' : ''} />
                    </Button>
                    <Button variant="ghost" className={`cursor-pointer bg-transparent  ${order ? 'text-stone-200 hover:text-blue-500 hover:bg-gray-900' : 'text-stone-800 hover:text-blue-600'}`} aria-label="Themes" onClick={Themes}>
                        <Moon className={order ? 'hidden' : ''} />
                        <Sun className={!order ? 'hidden' : ''} />
                    </Button>
                </div>
            </div>
        </div>
    );
};