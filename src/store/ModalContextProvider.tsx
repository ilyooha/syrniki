import {ReactNode, useState} from "react";
import ModalContext, {ModalContextValue} from "./modal-context";

export interface ModalContextProviderProps {
    children?: ReactNode;
}

const ModalContextProvider = (props: ModalContextProviderProps) => {
    const [modalIsShown, setModalIsShown] = useState(false);

    const value: ModalContextValue = {
        modalIsShown: modalIsShown,
        onShowModal: () => {
            setModalIsShown(true);
        },
        onHideModal: () => {
            setModalIsShown(false);
        }
    }

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;