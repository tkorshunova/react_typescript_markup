import styles from "./Section.module.scss";

type SectionPropsType = {
    background?: string,
    children: any
}

function Section ({children, background}:SectionPropsType) {
    const style = { background: background } as React.CSSProperties;

    return (
        <section 
            style={style}
            className={styles.section}
        >
            {children}
        </section>
    )
}

export default Section;