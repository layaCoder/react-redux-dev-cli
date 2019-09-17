import * as React from 'react';
import * as ReactDom from 'react-dom';



interface stateCheck {
    content: string;
}

class home extends React.Component<{}, stateCheck>{

    constructor(props: any) {
        super(props);
        this.state = {
            content: 'home'
        }
    }

    componentDidMount() {
        console.log('home props...>', this.props);
    }

    render() {

        return <div>
            <strong>{this.state.content}</strong>
        </div>
    }
}

export default home;