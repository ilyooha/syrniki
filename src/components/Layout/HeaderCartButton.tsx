import Button from "../UI/Button";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props: HeaderCartButtonProps) => {
    const context = useContext(CartContext);
    const numberOfItems = context.items.length; //.reduce((cur, item) => cur + item.amount, 0)

    const clickHandler = () => {
        props.onClick();
    }

    return (
        <>
            <Button button={{onClick: clickHandler}}>
                <span>Cart ({numberOfItems})</span>
            </Button>
        </>
    );
}

export default HeaderCartButton;

export interface HeaderCartButtonProps {
    numberOfItems: number;
    onClick: () => void;
}
