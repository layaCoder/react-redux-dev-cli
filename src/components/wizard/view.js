import * as React from 'react';
import { Component } from 'react';
// import { Values } from 'redux-form-website-template';
import WizardForm from './wizard-form';

class Wizard extends Component {

    onSubmit = (values) => {
        console.log('wizard form values...>', values);
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Wizard view</h3>
                    <WizardForm onSubmit={this.onSubmit}></WizardForm>
                </div>
                <div>
                    <h3>Form values</h3>
                </div>
            </div>
        )
    }
}

export default Wizard;