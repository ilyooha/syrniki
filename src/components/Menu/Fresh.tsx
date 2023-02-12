import styles from './Fresh.module.css';

const Fresh = () => {
    return (
        <>
            <i className={'fa-solid fa-leaf ' + styles.icon}></i>
            <span className={styles.caption}>Fresh</span>
        </>
    );
}

export default Fresh;