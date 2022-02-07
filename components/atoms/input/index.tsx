// Bibliotek imports.
import PropTypes from "prop-types";

// Scss style.
import styles from "./index.module.scss";

// Samsætning af vores scss styles samt style prop.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Input components/atom.
export default function Input(props) {
    return (
        <input
            type={props.type}
            name={props.name}
            className={classNames(styles.input, `${props.style}`)}
        />
    );
}

// Prop typer specifikationer.
Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    style: PropTypes.any,
};

// Standard styling/specifikationer.
Input.defaultProps = {
    type: "text",
};
