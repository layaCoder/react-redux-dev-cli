import * as React from 'react';
import { Component } from 'react';
import { FirstPage } from './first-page';
import { SecondPage } from './second-page';
import { ThirdPage } from './third-page';

class WizardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    nextPage = () => {
        console.log('next step works!!!');
        this.setState({ page: this.state.page + 1 });
    }

    previousPage = () => {
        this.setState({ page: this.state.page - 1 });
    }

    render() {
        const { onSubmit } = this.props
        return (
            <div>
                {this.state.page === 1 && <FirstPage onSubmit={this.nextPage} />}
                {this.state.page === 2 && <SecondPage onSubmit={this.nextPage} previousPage={this.previousPage} />}
                {this.state.page === 3 && <ThirdPage onSubmit={onSubmit} previousPage={this.previousPage} />}
            </div>
        )
    }
}

export default WizardForm;