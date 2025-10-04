import { RefObject, useEffect, useState } from "react";

export const GetHeight = (ref: RefObject<HTMLElement>) => {
    const [height, setHeight] = useState<number>(0)
    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.scrollHeight);
        }
    }, [])
    return height;
}