import Heading from "../heading/Heading";
import List from "../list/List";
import Plate from "../plate/Plate";
import Section from "../section/Section";
import Timer from "../timer/Timer";
import Text from "../text/Text";
import Icon from "../icon/Icon";
import Button from "../button/Button";

import { BENEFITS, PROMO_DETAILS, BACKGROUND_COLORS } from "../../constants";

import styles from "./Promo.module.scss"

function Promo () {
    return (
        <Section background={BACKGROUND_COLORS.PRIMARY}>
            <div className={styles.container}>
                <div className={styles.contentHolder}>
                    <div className={styles.headingHolder}>
                        <Heading as="h2" text="Start your spy-free week for as low as" color="#fff" />
                    </div>
                    <div className={styles.content}>
                        <Plate radius={4} background={BACKGROUND_COLORS.SPECIAL} width={224}>
                            <div className={styles.special}>
                                <div className={styles.text}><span>Special offer valid for</span></div>
                                <div className={styles.spacer}></div>
                                <Timer />
                            </div>
                        </Plate>
                        <Plate radius={16} width={224} background={BACKGROUND_COLORS.LIGHT_BLUE}>
                            <div className={styles.priceContainer}>
                                <sup className={styles.sign}>$</sup>
                                <span className={styles.dollar}>2</span>
                                <sup className={styles.cent}>99</sup>
                            </div>
                            <span className={styles.duration}>/7 days</span>
                        </Plate>
                        <Heading as="h4" text="What you get:" />
                        <List items={BENEFITS} />
                        <div className={styles.buttonHolder}>
                            <Button  size="normal" text="Try for $2.99"/>
                        </div>
                        <div className={styles.textHolder}>
                            <Text content={PROMO_DETAILS} opacity={50} size={9} />
                        </div>
                        <div className={styles.additionalInfo}>
                            <div className={styles.additionalInfotem}>
                                <Icon id="money" width={28} height={24} />
                                <span>30-day money-back guarantee</span>
                            </div>
                            <div className={styles.additionalInfotem}>
                                <Icon id="download" width={23} height={23} />
                                <span>100.000 + downloads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Promo;