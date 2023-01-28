import React from "react";

export interface ModalContextValue {
    modalIsShown: boolean;
    onShowModal: () => void;
    onHideModal: () => void;
}

const ModalContext = React.createContext<ModalContextValue>({
    modalIsShown: false,
    onShowModal: () => {},
    onHideModal: () => {}
});

export default ModalContext;