import Button from "../button/Button";

import styles from "./StickyHeader.module.scss";
import { BUTTON_TEXT } from "../../constants";
import { Logo } from "../logo/Logo";

export function StickyHeader () {
    return (
        <header className={styles.header}>
            <Logo />
            <Button text={BUTTON_TEXT.MAIN} size='small' />
        </header>
    )
}