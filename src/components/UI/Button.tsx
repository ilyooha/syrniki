import styles from './Button.module.css';
import {ReactNode} from "react";

export interface ButtonProps {
    children: ReactNode,
    appearance?: 'primary' | 'secondary'
    button?: any;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const classes = [styles.button];
    if (props.appearance != null)
        classes.push(props.appearance);
    else
        classes.push(styles.primary)

    return (
        <button className={classes.join(" ")} onClick={props.onClick} {...props.button}>
            {props.children}
        </button>
    )
}

export default Button;
