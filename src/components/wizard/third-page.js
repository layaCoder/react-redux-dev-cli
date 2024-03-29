import * as React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const colors = ['red', 'oringe', 'yellow', 'green', 'blue', 'indigo', 'violet']

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const WizardThirdPage = (props) => {
  const { previousPage } = props;
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>favoriteColor</label>
        <Field name="favoriteColor" label="Favorite Color" component={renderColorSelector}></Field>
      </div>
      <div>
        <label>Employed</label>
        <Field name="employed" component="input" type="checkbox"></Field>
      </div>
      <div>
        <label>Notes</label>
        <Field name="notes" component="textarea"></Field>
      </div>
      <button type="button" onClick={previousPage}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export const ThirdPage = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardThirdPage);