import Card from "../UI/Card";
import Frozen from "./Frozen";
import Fresh from "./Fresh";

const MenuSummary = () => {
    return (
        <>
            <Card>
                <h2>How it works</h2>
                <p>
                    Here you can see the menu and place an order.
                </p>
                <p>
                    Then we will confirm it. You must pay 50% of the order value in advance. This amount covers the cost
                    of ingredients and is non-refundable.
                </p>
                <p>
                    Pay attention to descriptions. Products marked with <Frozen/> are frozen, <Fresh/> are fresh.
                </p>
            </Card>
        </>
    );
}

export default MenuSummary;