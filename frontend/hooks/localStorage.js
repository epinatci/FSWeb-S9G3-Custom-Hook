import { useState } from "react";

export const useLocalStorage = (key) => {
    const lclVal = localStorage.getItem(key);
    const [val, setVal] = useState(JSON.parse(lclVal) ? JSON.parse(lclVal) : false);
    const valueHandler = (key, val) => {
        localStorage.setItem(key, val);
        setVal(val);
    }; 

    return [val, valueHandler];
};