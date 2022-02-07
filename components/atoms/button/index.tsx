// Bibliotek imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// Samsætning af vores scss styles samt style prop.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// -------------------------- Button start ------------------------

// Button component/atom.
function Button(props) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={classNames(styles.button, `${props.style}`)}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.any,
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
};

Button.defaultProps = {
    style: styles.button_primary,
};

// -------------------------- Button slut ------------------------

// ------------------------ IconButton start ---------------------

// IconButton component/atom.
function IconButton({ type, children }) {
    return <button type={type}>{children}</button>;
}

// ------------------------ IconButton slut ----------------------

// Export begge components/atoms.
export { Button, IconButton };
