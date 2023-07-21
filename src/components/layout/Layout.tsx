import styles from "./Layout.module.scss";

function Layout ({children}: any) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Layout;