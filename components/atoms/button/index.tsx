import React from "react";

// Library imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// Button component/atom.
function Button({ type, children }) {
    return (
        <button type={type} className={styles.btn}>
            {children}
        </button>
    );
}

// IconButton component/atom.
function IconButton({ type, children }) {
    return <button type={type}>{children}</button>;
}

export { Button, IconButton };
