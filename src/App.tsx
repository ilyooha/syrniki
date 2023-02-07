import React, {useContext, useState} from 'react';
import './App.module.css';
import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";

import styles from './App.module.css';
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import ModalContext from "./store/modal-context";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const modalContext = useContext(ModalContext);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    let appClasses = [styles.app];
    if (modalContext.modalIsShown)
        appClasses.push(styles['modal-shown']);

    return (
        <>
            <CartContextProvider>
                <div className={appClasses.join(' ')}>
                    {cartIsShown && <Cart onClose={hideCartHandler}/>}
                    <Header onShowCart={showCartHandler}/>
                    <main className={styles.main}>
                        <Menu/>
                    </main>
                </div>
            </CartContextProvider>
        </>
    );
}

export default App;
