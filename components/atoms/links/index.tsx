import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

// Samsætning af flere classes.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Links({ href, style, children }) {
    return (
        <Link href={href}>
            <a className={classNames(styles.link, `${style}`)}>{children}</a>
        </Link>
    );
}

// Prop typer.
Links.propTypes = {
    href: PropTypes.string.isRequired,
    style: PropTypes.string,
};

// Standard styling.
Links.defaultProps = {
    style: styles.link_primary,
};
