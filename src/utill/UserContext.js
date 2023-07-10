import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: 'hemraj shaqawal',
        email: 'hemrajshaqawal007@gmail.com'
    }
});

UserContext.displayName = "UserContext"

export default UserContext;