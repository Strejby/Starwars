import React from "react";

// Bibliotek imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// -------------------------- Container start ------------------------

// Container component/atom.
function Container({ children }) {
    return <div className={styles.btn}>{children}</div>;
}

// ------------------------- Container slut ------------------------

// ---------------------- InnerContainer start ---------------------

// InnerContainer component/atom.
function InnerContainer({ children }) {
    return <div>{children}</div>;
}

// ------------------------ InnerContainer slut ---------------------

// Export begge components/atoms.
export { Container, InnerContainer };
