// Custom Hooks
import { useState, useEffect } from "react";
import Constant from "./Constant";

function useResturant(id) {
    const [restroDetails, setRestroDetails] = useState(null);

    useEffect(() => {
        getRestroDetails();
    }, []);

    async function getRestroDetails() {
        const result  = await fetch(Constant.URLList?.getRestroDetails.replace(/<id>/gi, id));
        const response = await result.json();
        setRestroDetails(response?.data);
    }

    return restroDetails;
}

export default useResturant