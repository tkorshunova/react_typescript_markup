import Heading from "../heading/Heading";
import Text from "../text/Text";
import Section from "../section/Section";
import List from "../list/List";

import spywareDetector from "../../images/spyware_detector.jpeg";
import trackerDetector from "../../images/tracker_detector.jpeg";
import socialMediaProtection from "../../images/social_media_protection.jpeg";

import { BACKGROUND_COLORS, FEATURES } from "../../constants";

import styles from "./Features.module.scss";

const images: { [key: string]: string } = {
    spyware_detector: spywareDetector,
    tracker_detector: trackerDetector,
    social_media_protection: socialMediaProtection,

}

function defineImage (name: string) {
    const arr = name.split(" ");

    if(arr.length === 1) return name.toLowerCase();

    arr[0] = arr[0].toLowerCase();
    return arr.join("_");
}

function defineSourse (name: string) {
    const imageName = defineImage(name);
    return images[imageName];
}

function Features () {
    return (
        <Section background={BACKGROUND_COLORS.LIGHT}>
            <div className={styles.headingHolder}>
                <Heading as="h2" text="Protect.me helps you easily avoid spying." />
            </div>
            {FEATURES.map((item, index) => {
                return (
                    <article key={index} className={styles.card}>
                        <img src={defineSourse(item.name)} alt={`${defineImage(item.name)}`} />
                        <div className={styles.textHolder}>
                            <Heading as="h3" text={item.name} />
                            <Text content = {item.description} />
                        </div>
                        <List 
                            items={item.functions}
                            fontWeight={700}
                            iconSize={24}
                        />
                    </article>
                )
            })}
        </Section>
    )
}

export default Features;