import * as ReactDOM from "react-dom";
import {ReactNode} from "react";
import styles from './Modal.module.css';

const portalElement = document.getElementById('overlays')!;

const Modal = (props: ModalProps) => {
    const modalClickHandler = (e: any) => {
        e.stopPropagation();
    };

    return (
        <>
            {ReactDOM.createPortal(
                <div className={styles.backdrop} onClick={props.onBackdropClick}>
                    <div className={styles.modal} onClick={modalClickHandler}>
                        <div className={styles.content}>
                            {props.children}
                        </div>
                    </div>
                </div>, portalElement)}
        </>
    )
}

export default Modal;

export interface ModalProps {
    children?: ReactNode;
    onBackdropClick?: () => void;
}