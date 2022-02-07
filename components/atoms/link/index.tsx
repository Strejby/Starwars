import Link from "next/link";

// Bibliotek imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// Samsætning af vores scss styles samt style prop.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Link component/atom.
export default function Links(props) {
    return (
        <Link href={props.href}>
            <a
                target={props.target}
                className={classNames(styles.link, `${props.style}`)}
            >
                {props.children}
            </a>
        </Link>
    );
}

// Prop typer specifikationer.
Links.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    target: PropTypes.string,
    style: PropTypes.any,
};

// Standard styling/specifikationer.
Links.defaultProps = {
    style: styles.link_primary,
    target: "_self",
};
