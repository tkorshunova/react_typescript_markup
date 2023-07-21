import styles from "./Plate.module.scss";

type PlatePropsType = {
    radius?: number | "none",
    background?: string,
    shadow?: boolean,
    width?: number | "auto",
    children: any
}

function Plate ({children, ...props}:PlatePropsType) {
    const { 
        radius, 
        background = "white", 
        shadow = false,
        width = "auto"
    } = props;

    const style = {
        borderRadius: radius === "none" ? radius : `${radius}px`,
        background: background,
        width: props.width ? `${width}px` : width
    }

    return (
        <div style={style} className={`${styles.plate} ${shadow ? styles.shadow : ""}`}>
            {children}
        </div>
    )
}

export default Plate;