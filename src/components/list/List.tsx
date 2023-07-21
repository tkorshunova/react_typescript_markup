import Icon from "../icon/Icon";
import styles from "./List.module.scss";

type Item = {
    icon: string,
    text: string,
}

type ListPropsType = {
    items: Item[],
    fontWeight?: number,
    iconSize?: number
}

function List (props: ListPropsType) {
    const {items, fontWeight=400, iconSize=16} = props;

    return (
        <ul className={styles.list}>
            {items.map((item, index) => {
                return <li key={index} style={{fontWeight: fontWeight}}>
                    <Icon id={item.icon} width={iconSize} height={iconSize} />
                    { item.text }
                </li>
            })}
        </ul>
    )
}

export default List;