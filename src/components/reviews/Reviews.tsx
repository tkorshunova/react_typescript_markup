import Heading from "../heading/Heading";
import Carusel from "../carousel/Carousel";
import styles from "./Reviews.module.scss";

function Reviews () {
    return (
        <section className={styles.container}>
            <div className={styles.headingHolder}>
                <Heading as="h2" text="Let’s hear what real Protect.me users say." />
            </div>
            <div className={styles.caruselWrapper}>
                <Carusel />
            </div>
        </section>
    )
}

export default Reviews;