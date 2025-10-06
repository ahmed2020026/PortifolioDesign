import { getThemes } from "@/context/Mode";


export const Footer = () => {
    const {order} = getThemes()!
    return (
        <footer className={`${order ? 'bg-gray-900 text-gray-200' :'bg-gray-100 text-gray-800'} py-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Ahmed Samir. All rights reserved.</p>
            </div>
        </footer>
    );
};
