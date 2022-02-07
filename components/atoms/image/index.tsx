import Image from "next/image";

// Bibliotek imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// Samsætning af vores scss styles samt style prop.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

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
                draggable={props.draggable}
                className={classNames(styles.image, `${props.style}`)}
            />
        </div>
    );
}

// Prop typer specifikationer.
Images.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    draggable: PropTypes.bool,
    style: PropTypes.any,
};

// Standard styling/specifikationer.
Images.defaultProps = {
    draggable: false,
};
