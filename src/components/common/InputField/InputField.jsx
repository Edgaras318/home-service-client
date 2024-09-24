import styles from "./InputField.module.scss";

const InputField = ({ label, name, type, value, onChange, error }) => (
    <div className={styles.inputGroup}>
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={`Type your ${label.toLowerCase()}`}
            required
        />
        {error && <p className={styles.errorText}>{error}</p>}
    </div>
);

export default InputField;
