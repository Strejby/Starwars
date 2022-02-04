import React from "react";
import Image from "next/image";

// Scss style.
import styles from "./index.module.scss";

// Images component/atom.
// Billedet skal wrappes af en div som er relative, så vi kan sætte width & height.
export default function Images(props) {
    return (
        <div className={styles.image_wrapper}>
            <Image
                src={props.src}
                alt={props.alt}
                layout="fill"
                objectFit="cover"
                draggable="false"
                className="select-none"
            />
        </div>
    );
}
