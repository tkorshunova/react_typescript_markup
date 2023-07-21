import { BACKGROUND_COLORS, STEPS } from "../../constants";
import Section from "../section/Section";
import Accordion from "../accordion/Accordion";
import styles from "./Setup.module.scss";

function Setup () {
    return (
        <Section background={BACKGROUND_COLORS.LIGHT}>
            <h2>All you need to do <br/> is <span className={styles.highlighted}>3 easy steps.</span> </h2>
            <Accordion items={STEPS} />
        </Section>
    )
}

export default Setup;