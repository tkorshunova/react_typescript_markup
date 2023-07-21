import Section from "../section/Section";
import Heading from "../heading/Heading";
import Text from "../text/Text";
import Systems from "../systems/Systems";

import { BACKGROUND_COLORS } from "../../constants";

import styles from "./Security.module.scss"

function Security () {
    return (
        <Section background={BACKGROUND_COLORS.PRIMARY_LIGHT}>
            <div className={styles.headingHolder}>
                <Heading as="h2" text="Protect all your devices." />
            </div>
            <div className={styles.textHolder}>
                <Text content="Are you working from a Windows laptop and browsing from your home Mac? Use Protect.me to enjoy total privacy on every platform and device. "/>
                </div>
            <Systems />
        </Section>
    )
}

export default Security;