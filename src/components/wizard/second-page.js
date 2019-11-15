import * as React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import inputField from './validation/input-field';


const WizardFormSecondPage = (props) => {
    const { handleSubmit, previousPage } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="text" component={inputField} label="email"></Field>
            <div>
                <label>gender</label>
                <label>
                    <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="female"
                    />
                    Female
                </label>
                <label>
                    <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="male"
                    />
                    Male
                    </label>
            </div>
            <button type="button" onClick={previousPage}>Previous</button>
            <button type="submit">Next</button>
        </form>
    )
}

export const SecondPage = reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(WizardFormSecondPage)