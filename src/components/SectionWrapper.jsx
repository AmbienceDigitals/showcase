import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button'


const SectionWrapper = ({title, description, showBtn, mockupImg, banner, reverse}) => {
    return (
        <div className={`min-h-screen 
        ${styles.section} 
        ${reverse ?styles.bgWhite : styles.bgPrimary} 
        ${banner}`}>
            {/* set animations and text alignment conditionally  */}
            <div className={`flex items-center 
            ${reverse? styles.boxReverseClass :styles.boxClass} 
            w-11/12 sm:full minmd:w-3/4`}>
                <div className={`${styles.descDiv}
                ${reverse ? " fadeRightMini": "fadeLeftMini"}
                ${reverse ? styles.textRight: styles.textLeft }`}>
                    {/* conditionally set text color */}
                    <h1 className={`
                    ${reverse ? styles.blackText: styles.whiteText }
                    ${styles.h1Text}`}>{title}</h1>
                    <h1 className={`${reverse ? styles.blackText: styles.whiteText }
                    ${styles.description}`}>{description}</h1>
                    {/* display the button conditionally */}
                    {showBtn && (
                        <Button
                        assetUrl={assets.expo}
                        link="https://expo.dev/@ambience_media/nft?serviceType=classic&distribution=expo-go"
                        title = "View it on"
                        description = "Expo Store"/>
                    )}
                </div>

                <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0 `}>
                    {/* conditionally animate image in opposite direction of text animation */}
                    <img className={`${reverse ? " fadeLeftRMini": "fadeRightMini"}
                        styles.sectionImg}`} src={mockupImg} alt="Section Wrapper" />
                </div>

            </div>

        </div>
    )
}

export default SectionWrapper