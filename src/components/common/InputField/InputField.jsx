import React from 'react';
import styles from './InputField.module.scss';

const InputField = ({ label, value, onChange, error, type = 'text', placeholder }) => {
    return (
        <div className={styles.inputGroup}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
};

export default InputField;
