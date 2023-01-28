import styles from './Input.module.css';

export interface InputProps {
    label: string;
    input: any;
    isValid?: boolean;
    validationMessage?: string;
}

const Input = (props: InputProps) => {
    let classes = [styles.input];
    if (props.isValid != null && !props.isValid)
        classes.push(styles['invalid']);

    return (
        <div className={classes.join(' ')}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
            {!props.isValid && <div className={styles['validation-message']}>{props.validationMessage}</div>}
        </div>
    );
}

export default Input;