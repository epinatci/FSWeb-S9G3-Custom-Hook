import { useState } from "react";
import { useLocalStorage } from "./localStorage";

export const useGeceModu = () => {
    const [lcl, setLcl] = useLocalStorage("geceModu");
    const [geceModu, setGeceModu] = useState(lcl);
    const valueHandler = (val) => {
        setGeceModu(val);
        setLcl("geceModu", val);
    };

    return [geceModu, valueHandler];
};