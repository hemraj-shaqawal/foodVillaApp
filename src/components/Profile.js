import { useState, useEffect } from "react"

const Profile = (props) => {
    const [count] = useState(0);
    
    useEffect(() => {
        // Api call
        // unmount func with function based component
        return () => {
            console.log('Profile functional based with unmount method....')
        }
    });

    return (
        <>
            <h1>{props.name} Profile Page...</h1>
            <h1>{count}</h1>
        </>
    )
}

export default Profile