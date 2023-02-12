import styles from './Frozen.module.css';

const Frozen = () => {
    return (
        <>
            <i className={'fa-solid fa-snowflake ' + styles.icon}></i>
            <span className={styles.caption}>Frozen</span>
        </>
    );
}

export default Frozen;