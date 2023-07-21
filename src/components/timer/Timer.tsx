import { useState, useEffect } from 'react';
import styles from "./Timer.module.scss"

type TimerPropsType = {
    minutes: number | boolean
}

function Timer ({ minutes = 30 }) {
    const [mins, setMins] = useState(minutes);
    const [secs, setSecs] = useState(0);
    const [stop, setStop] = useState(false);


    const getTime = () => {
        const newSecs = secs - 1;

        if(mins === 0 && secs === 0) {
            setStop(true)
        } else if(newSecs < 0) {
            setMins(mins-1);
            setSecs(59);
        } else {
            setSecs(newSecs)
        }     
      };

    const getSeconds = () => {
        if (secs < 10) return `0${secs}`;
        if (secs === 0) return '00';
        return secs;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(!stop) {
                getTime()
            }    
        }, 1000);
    
        return () => clearInterval(interval);
      }, [mins, secs]);

    return (
        <div className={styles.container}>
            <span>
                <span className={styles.timer}>
                    {mins<10 ? `0${mins}` : mins}:{getSeconds()}
                </span> min
            </span>
        </div>
    )
}

export default Timer;