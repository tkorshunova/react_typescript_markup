import icons from '../../images/icons.svg';

import styles from "./Systems.module.scss";

function Systems () {
    return (
        <div className={styles.container}>
            <svg className={styles.icon}>
                <use href={`${icons}#apple`}></use>
            </svg>
            <span>iOS</span>
            <svg className={styles.icon}>
                <use href={`${icons}#monitor`}></use>
            </svg>
            <span>macOS, Windows</span>
        </div>
    )
}

export default Systems