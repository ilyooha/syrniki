import {ReactNode} from "react";
import styles from './Card.module.css';

export interface CardProps {
    children?: ReactNode
}

const Card = (props: CardProps) => {
    return (
        <>
            <div className={styles.card}>
                {props.children}
            </div>
        </>
    )
}

export default Card;