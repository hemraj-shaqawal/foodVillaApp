import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    
    useEffect(() => {
        const handelOnline = () => {
            setIsOnline(true);
          }
        const handelOffline = () => {
            setIsOnline(false);
          }
         
        window.addEventListener("online", handelOnline);
        window.addEventListener("offline", handelOffline);
        // Unmount method for func based component
        return () => {
            window.removeEventListener("offline", handelOffline);
            window.removeEventListener("online", handelOnline);
        }

    }, []);

    return isOnline;
}

export default useOnline;