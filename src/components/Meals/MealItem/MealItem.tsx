import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import Money from "../../UI/Money";
import {Meal} from "../../../store/meal.model";
import Frozen from "../Frozen";
import Fresh from "../Fresh";

export interface MealItemProps {
    meal: Meal;
}

const MealItem = (props: MealItemProps) => {
    const meal = props.meal;
    return (
        <>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3 className={styles.title}>{meal.name}</h3>
                    <div className={styles.characteristics}>
                        <Money value={meal.unitPrice}/> / {meal.unit}
                        {meal.isFrozen && <Frozen/>}
                        {meal.isFresh && <Fresh/>}
                    </div>
                    <div className={styles.actions}>
                        <MealItemForm meal={meal}/>
                    </div>
                </div>
                <div className={styles.column + ' ' + styles.image}>
                    {meal.image_id != null && <img src={`${process.env.PUBLIC_URL}/images/${meal.image_id}`} />}
                </div>
            </div>
        </>
    );
}

export default MealItem;