import * as React from 'react';
import * as ReactDom from 'react-dom';
import Wizard from './wizard/view';



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
            <Wizard></Wizard>
        </div>
    }
}

export default home;