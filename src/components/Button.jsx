import React from 'react'
import styles from '../styles/Global';


const Button = ({assetUrl, link, title, description}) => {
    return (
        <div
        className={styles.btnBlack}
        // onclick event to open mobile application in expo on a blank browser tab
        onClick={()=> window.open(link, "_blank")}>
            <img src={assetUrl} alt="expo_icon" 
            className={styles.btnIcon}/>
            <div className="flex flex-col justify-start ml-4">
                <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
                <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
            </div>
        </div>
    )
}

export default Button