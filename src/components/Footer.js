import { useContext } from "react";
import UserContext from "../utill/UserContext";

const Footer = () => {    
    const { user } = useContext(UserContext);
    return <div className="flex justify-center text-lg font-bold p-5">This site developed by { user.email }</div>;
};

export default Footer