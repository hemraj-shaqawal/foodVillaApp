import {Component} from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { render } from "react-dom";
import UserContext from "../utill/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log('Parent componenet')       
    }

    async componentDidMount() {
        // APi call
        // console.log('Parent componentDidMount')        
    }

    render() {
        // console.log('Parent render')
        return (
            <>
                <div>
                    <h1>About Page</h1>
                </div>
    
                <div>
                    <Outlet />
                </div>
    
                <Profile name={'Hemraj'}/>
                {/* <ProfileClass name={'jack'}/> */}

                <UserContext.Consumer>
                    {({user}) => <h4>{ user.name }</h4>}
                </UserContext.Consumer>
            </>
        )
    }
}

export default About;


// React Class based component
// - Parent constructor
// - Parent render
//     - 1st child constructor
//     - 1st child render
//     - 2st child constructor
//     - 2st child render
// DOM is updating
//     - 1st child componentDidMount
//     - 2st child componentDidMount
// - Parent componentDidMount