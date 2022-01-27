import Link from "next/link";

// Library imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// Samsætning af vores scss styles samt style prop.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Link Component/atom.
export default function Links({ href, style, children }) {
    return (
        <Link href={href}>
            <a className={classNames(styles.link, `${style}`)}>{children}</a>
        </Link>
    );
}

// Prop typer specifikationer.
Links.propTypes = {
    href: PropTypes.string.isRequired,
    style: PropTypes.string,
};

// Standard styling.
Links.defaultProps = {
    style: styles.link_primary,
};
