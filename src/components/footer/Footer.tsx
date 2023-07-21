import { Logo } from "../logo/Logo";
import Text from "../text/Text";
import styles from "./Footer.module.scss";

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.logoHolder}>
                    <Logo />
                </div>
                <Text content="© 2023 Protect.me. All rights reserved." />
            </div>
        </footer>
    )
}

export default Footer;