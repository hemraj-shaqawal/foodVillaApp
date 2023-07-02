import React from "react";

class ProfileClass extends React.Component {
    constructor(props) { //1 
        super(props);
        // This is best place to create state.
        // this.state will be track by react
        this.state = {
            count: 54556456465, 
            login: '',
            id: '',
            profile: '',
        }
        console.log('class based component lifeCycle methods')
        console.log('call constructer', this.props.name);        
    }
    render() { // 2
        console.log('called render')     
        return (<>
            <h1>This is my class based component...</h1>
            <h2>{this.props.name}</h2>
            <h2>{this.state.count}</h2>
            <img src={this.state.profile}></img>
            <h2>{this.state.id}</h2>
            <h2>{this.state.login}</h2>
            <button onClick={() => {this.setState({
                count: this.state.count + 1,
            })}}>Click</button>
        </>)
    }

    // called After first render
    async componentDidMount() { // 3
        console.log('componentDidMount', this.props.name);    
        // it will called 
        // Api call we can do hear.
        const res = await fetch('https://api.github.com/users/hemraj-shaqawal');
        const data = await res.json();
        console.log(data);

        this.setState({
            login: data.login,
            id: data.id,
            profile: data.avatar_url,
        })

    }

    // Called after each render function
    componentDidUpdate() {
        console.log('Called Component Did Update');
    }

    componentWillUnmount() {
        console.log('Called Component Will Unmount or leaving a component...');
    }

}

export default ProfileClass;