import {useEffect, useRef} from 'react'

const useInterval = (callback,delay) => {
    const saveCallback = useRef(() =>{});

    useEffect(()=>{
        saveCallback.current = callback;
    },[callback]);

    useEffect(()=>{
        const tick =()=>{
            saveCallback.current();
        }
        if (delay !== null){
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        } 
    },[delay]);
}

export default useInterval;
