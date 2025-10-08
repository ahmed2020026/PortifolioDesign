import { getThemes } from "@/context/Mode"


export const Title = ({ title , subTitle}: { title: string , subTitle?:string }) => {
    const { order } = getThemes()!
    return (

        <div className="container duration-150 mx-auto text-center mb-6" >
            <h2 className={`text-2xl md:text-4xl duration-150 font-semibold ${order ? "text-white" : "text-gray-900"}`}>
                {title}
            </h2>
            <p className={`text-sm ${order ? 'text-white/50' : 'text-black/70'}`}>
                {subTitle}
            </p>
        </div>
    )
}