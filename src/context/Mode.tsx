import { createContext, ReactNode, useContext, useState } from "react";


interface ModeContextType {
    order: boolean;
    setOrder: React.Dispatch<React.SetStateAction<boolean>>;
}

const Mode = createContext<ModeContextType | null>(null);

type childType = {
    children: ReactNode
}
export const Themes = ({ children }: childType) => {
    const [order, setOrder] = useState<boolean>(false)
    return <Mode.Provider value={{ order, setOrder }}>
        {children}
    </Mode.Provider>
}

export const getThemes = () => useContext(Mode)