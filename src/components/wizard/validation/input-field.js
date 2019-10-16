import React from 'react';

const inputField = ({
    input,
    label,
    type,
    meta: { touched, error, warning, asyncValidating }
}) => (
        <div>
            <div>
                <span>{label}</span>
                <input {...input} placeholder={label} type={type} />
                {asyncValidating &&
                    <span >
                        <i ></i>
                    </span>}
            </div>
            {touched &&
                ((error && <div >{error}</div>) ||
                    (warning && <div >{warning}</div>))}
        </div>
    )

export default inputField;