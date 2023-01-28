import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props: HeaderProps) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Valeriia's Kitchen</h1>
                <HeaderCartButton numberOfItems={3} onClick={props.onShowCart}/>
            </header>
        </>
    )
}

export default Header;

export interface HeaderProps {
    onShowCart: () => void;
}