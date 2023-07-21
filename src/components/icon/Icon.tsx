import icons from "../../images/icons.svg";
import styles from "./Icon.module.scss";

type IconPropsType = {
    id: string,
    width: number,
    height: number
}

function Icon ({id, width, height}: IconPropsType) {
    return (
        <svg className={styles.icon} width={`${width}`} height={`${height}`}>
            <use href={`${icons}#${id}`} />
        </svg>
    )
}

export default Icon;