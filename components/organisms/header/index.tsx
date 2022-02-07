import { useState, useEffect } from "react";

// Atoms imports.
import Image from "../../atoms/image";

export default function Header() {
    // On scroll show solid header.
    const [header, setHeader] = useState(false);
    useEffect(function onFirstMount() {
        function onScroll() {
            if (window.scrollY >= 5) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        }

        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <div style={{ backgroundColor: "red" }}>
            <Image src="/star-wars-logo.png" alt="Logo" />
        </div>
    );
}
