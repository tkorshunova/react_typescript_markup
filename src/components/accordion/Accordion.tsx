import { useState } from "react";

import styles from "./Accordion.module.scss";

type Item = {
    step: string,
    content: string
}

type AccordionPropsType = {
    items: Item[]
}

function Accordion ({items}: AccordionPropsType) {
    const [isActive, setIsActive] = useState(-1);

    const toggleItem = (index: number) => {
        if (index === isActive) {
            setIsActive(-1);
        } else {
            setIsActive(index)
        }
    }

    return (
        <div className={styles.container}>
            {items.map((item, index) => {
                return (
                    <div 
                        key={index} 
                        className={`${styles.itemContainer} ${index === isActive ? styles.active : ""}`} 
                        onClick={() => toggleItem(index)}
                    >
                        <div className={styles.stepContainer}>
                            <div className={styles.numberHolder}>{index+1}</div>
                            <div className={styles.step}>{item.step}</div>
                            <div className={`${styles.iconHolder} ${index === isActive ? styles.activeIcon : ""}`}></div>
                        </div>
                        <div className={styles.content}>
                            <p>{item.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion;