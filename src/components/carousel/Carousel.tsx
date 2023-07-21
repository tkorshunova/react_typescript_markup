import { useState } from "react";
import Text from "../text/Text";
import { REVIEWS } from "../../constants";

import trustpilot from "../../images/trustpilot.svg";
import googlePlay from "../../images/googleplay.svg";
import appStore from "../../images/appstore.svg";

import styles from "./Carousel.module.scss";

const carouselStep = 284; // 272 - item width; 10 - gap

function Carusel () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [left, setLeft] = useState(24);

    function getName (str: string) {
        return str.toLowerCase().split(" ").join("");
    }

    function getIcon (str: string) {
        const name = getName(str);
        switch(name) {
            case 'trustpilot':
                return trustpilot;
                break;
            case 'googleplay':
                return googlePlay;
                break;
            case 'appstore':
                return appStore;
                break;
            default:
                console.log('no other options')
        }
    }

    function slideLeft (e: React.MouseEvent<HTMLElement>) {
        if (currentIndex === 0) {
            return
        } else if (currentIndex === 1) {
            setCurrentIndex(currentIndex - 1);
            setLeft(24);
        } else {
            setCurrentIndex(currentIndex - 1);
            setLeft(left + carouselStep);
        }  
    }

    function slideRight (e: React.MouseEvent<HTMLElement>) {
        if (currentIndex === REVIEWS.length - 1) {
            return;
        } else if (currentIndex === 0) {
            setCurrentIndex(currentIndex + 1)
            setLeft(left - carouselStep);
        } else {
            setCurrentIndex(currentIndex + 1)
            setLeft(left - carouselStep);
        }
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.caruselContainer} style={{left: `${left}px`, transition: "all .7s"}}>
            {REVIEWS.map((item, index) => {
                return (
                    <div 
                        className={`${styles.item} ${getName(item.source)}`}
                        key={index}
                    >
                        <div className={styles.logoHolder}>
                            <img src={`${getIcon(item.source)}`}  alt={item.source}/>
                        </div>
                        <Text content={item.text} textAlign="left" />
                        <div className={styles.author}>{item.author}</div>
                    </div>
                )
            })}
        </div>
        <div className={styles.buttons}>
            <div className={`${styles.btn} ${styles.left}`} onClick={(e)=>slideLeft(e)}></div>
            <div className={`${styles.btn} ${styles.right}`} onClick={(e)=>slideRight(e)}></div>
        </div>
        </div>
        
    )
}

export default Carusel;