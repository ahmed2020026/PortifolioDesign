import { createContext, useContext, useState } from "react";

const Mode = createContext(null);
export const Themes = ({ children }) => {
    const [order, setOrder] = useState<boolean>(false)
    return <Mode.Provider value={{ order, setOrder }}>
        {children}
    </Mode.Provider>
}

export const getThemes = () => useContext(Mode)