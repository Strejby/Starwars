// Scss style.
import styles from "./index.module.scss";

// Samsætning af vores scss styles samt style prop.
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Typography component/atom.
export default function Typography(props) {
    const { as: Component, children } = props;
    return <Component className="typography">{children}</Component>;
}

// Standard styling/specifikationer.
Typography.defaultProps = {
    as: "h1",
};
