import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h2>Error</h2>
            <h1>Something went wrong</h1>
            <h3>{err.status + " : " + err.statusText}</h3>
        </div>
    )
}

export default Error;