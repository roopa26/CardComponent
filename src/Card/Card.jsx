import React from "react";
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';

export default function Card(){
   return (
   <div className={styles.wrapper}>
    <Tooltip title="42 Songs" placement="top" arrow>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <div className={styles.banner}>
                <div className={styles.pill}>
                    12417 Follows
                </div>
            </div>
        </div>
        </Tooltip>
        <div className={styles.titleWrapper}>
                Light hearted childhood
        </div>
    </div>)
}