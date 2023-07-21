import Heading from "../heading/Heading";
import Section from "../section/Section";
import Text from "../text/Text";
import Plate from "../plate/Plate";
import Icon from "../icon/Icon";
import styles from "./Team.module.scss";
import Button from "../button/Button";

import teamImage from "../../images/team.png";

import { BACKGROUND_COLORS } from "../../constants";

function Team () {
    return (
        <Section background={`${BACKGROUND_COLORS.GRADIENT}`}>
            <div className={styles.headingHolder}>
                <Heading as="h2" text="Not sure that the app can solve your problem?" />
            </div>
            <Text content="You'll have Protect.me experts ready to jump in and help you, 24/7, just when you need them." />
            <Plate 
                radius={16} 
                background={BACKGROUND_COLORS.LIGHT_BLUE}
                shadow={true}
            >
                <Icon id="time" width={13} height={18} />
                <span className={styles.plateText}><span className="textBold">Response time:</span>  2 mins</span>
            </Plate>
            <img src={teamImage} alt="team" />
            <div className={styles.buttonHolder}>
                <Button text="Protect me now" size="normal" />
            </div>
        </Section>
    )
}

export default Team;