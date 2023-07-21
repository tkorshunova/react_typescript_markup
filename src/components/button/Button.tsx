import styles from "./Button.module.scss";

type ButtonPropsType = {
    text: string,
    size?: 'normal' | 'small'
}

function Button ({text="Protect me now", size}: ButtonPropsType) {
    return <button 
            className={`${styles.button} ${size === "normal" ? `${styles.normal}` : `${styles.small}`}`}
            >
                {text}
            </button>
}

export default Button;