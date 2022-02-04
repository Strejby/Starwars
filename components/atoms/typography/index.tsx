import React from "react";

// Typography component/atom.
export default function Typography(props) {
    const { as: Component, children } = props;
    return <Component className="typography">{children}</Component>;
}

Typography.defaultProps = {
    as: "h1",
};
