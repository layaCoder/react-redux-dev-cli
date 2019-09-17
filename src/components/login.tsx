import * as React from 'react';
import * as ReactDom from 'react-dom';

interface propsCheck {
    value: string,
    history?: any
}

interface stateCheck {
    content: string
}

class login extends React.Component<propsCheck, stateCheck> {

    constructor(props: propsCheck) {
        super(props);
        this.state = {
            content: 'home'
        }

        this.btnLogin = this.btnLogin.bind(this)
    }


    componentDidMount() {
        console.log('home props...>', this.props);
        this.setState({ content: 'Welcome' });
    }

    btnLogin() {
        this.props.history.push('/layout/home')
    }

    render() {
        return <div>
            <strong>{this.state.content}</strong>
            <p></p>
            <button onClick={this.btnLogin}>login</button>
        </div>
    }
}

export default login;