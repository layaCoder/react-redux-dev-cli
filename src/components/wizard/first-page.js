import * as React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import inputField from './validation/input-field';
import validate from './validate';

const WizardFormFirstPage = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Field name="firstName" type="text" component={inputField} label="First Name"></Field>
                <Field name="lastName" type="test" component="input"></Field>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export const FirstPage = reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(WizardFormFirstPage)