import { useRef, useEffect } from 'react';

import MainHeading from "../heading/MainHeading";
import Section from "../section/Section";
import Text from "../text/Text";
import Button from "../button/Button";
import Systems from "../systems/Systems";
import Heading from "../heading/Heading";
import List from "../list/List";

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import { BACKGROUND_COLORS, CONTENT, CAPABILITY } from "../../constants";

import styles from "./Intro.module.scss";

type IntroPropsType = {
  changeHeader: (params: boolean) => void
}

function Intro (props: IntroPropsType) {
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(buttonRef, {});
    const isVisible = !!entry?.isIntersecting;

    useEffect(() => {
      props.changeHeader(isVisible);
    }, [isVisible, props])

    return (
        <Section background={BACKGROUND_COLORS.PRIMARY_LIGHT}>
          <div className={styles.textHolder}>
            <MainHeading />
            <Text 
              content={CONTENT.MAIN_DESCRIPTION}
              opacity={70}
            />
          </div>
          <div ref={buttonRef} className={styles.buttonHolder}>
            <Button text="Protect me now" size="normal" />
          </div>
          <Systems />
          <div className={styles.capabilities}>
            <Heading as='h4' text="The anti-spy protect.me app can:" />
            <List items={CAPABILITY} />
          </div>
        </Section>
    )
}

export default Intro;