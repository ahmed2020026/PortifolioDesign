import { NavLinks } from "@/assets/system";
import { Button } from "@/components/ui/button";
import { ScrollTo } from "@/hooks/useScroll";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useRef, useState } from "react";

export const Navbar = ({ setThemes }: { setThemes: () => void }) => {
    const Ref = useRef<HTMLDivElement>(null);

    /* getHeigh From Custom Hook */

    /* States */
    const [open, setOpen] = useState<boolean>(false)

    /* Change Status Menu */
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className={`container rounded-lg shadow dark:bg-gray-950 bg-white relative`}>
            <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                    <h1 className={`font-bold text-2xl dark:text-gray-50 text-gray-950`}>A.<span className="text-blue-600">SAMIR</span></h1>
                    {/* menu in large Screen */}
                    <nav className="hidden md:block" >
                        {
                            NavLinks.map((item: Record<string, string>, index: number) => (
                                <Button key={index} style={{ transition: 'all 150ms' }} variant="ghost" className={`cursor-pointer bg-transparent dark:text-stone-400 dark:hover:text-blue-600 dark:hover:bg-gray-900 text-stone-600 hover:text-blue-600`} onClick={() => ScrollTo(item.rots)}>
                                    {item.link}
                                </Button>
                            ))
                        }
                    </nav>
                    {/* menu in small Screen */}
                    <nav
    className={`
        md:hidden
        z-50
        absolute
        top-[105%]
        left-0
        w-full
        p-2
        shadow
        rounded-md
        bg-white
        dark:bg-gray-950
        transition-transform
        duration-400
        ${
            open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
        }
    `}
>
    {NavLinks.map((item: Record<string, string>, index: number) => (
        <Button
            key={index}
            variant="ghost"
            className="cursor-pointer text-left block w-full bg-transparent dark:text-stone-400 dark:hover:text-blue-600 dark:hover:bg-gray-900 text-stone-600 hover:text-blue-600"
            onClick={() => {
                ScrollTo(item.rots);
                setOpen(false);
            }}
        >
            {item.link}
        </Button>
    ))}
</nav>
                </div>
                <div className="icons">
                    <Button variant="ghost" style={{ transition: 'all 150ms' }} className={`cursor-pointer md:hidden bg-transparent dark:text-stone-200 dark:hover:text-stone-200 dark:hover:bg-gray-900 text-stone-600 hover:text-blue-600`} aria-label="btn_menu" onClick={toggle}>
                        <Menu className={open ? 'hidden' : ''} />
                        <X className={!open ? 'hidden' : ''} />
                    </Button>
                    <Button variant="ghost" style={{ transition: 'all 150ms' }} className={`cursor-pointer bg-transparent dark:text-stone-200 dark:hover:text-blue-500 dark:hover:bg-gray-900 text-stone-800 hover:text-blue-600`} aria-label="Themes" onClick={setThemes}>
                        <Moon className='dark:hidden' />
                        <Sun className='hidden dark:block' />
                    </Button>
                </div>
            </div>
        </div>
    );
};