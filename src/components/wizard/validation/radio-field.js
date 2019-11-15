import React, { Component } from 'react';

class radioField extends Component {

    render() {
        const {
            input,
            type,
            label,
            meta: { touched, error, warning }
        } = this.props;
        return (
            <div>
                <label>{label}</label>
                {
                    this.props.radios.map((item, i) => (
                        <label key={i}>
                            <input {...input} type={type}
                                value={item.value}
                                checked={this.checked} />
                            {item.label}
                        </label>
                    ))
                }
                <label>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                            (warning && <span>{warning}</span>))}
                </label>
            </div>
        )
    }
}

export default radioField;