import React, { useEffect } from "react";

// Api kald.
import { getStarWars } from "./api";

export default function index({ data, results }) {
    useEffect(async () => {
        const data = await getStarWars("starships");
        console.log(data.results[2]);
    }, []);

    return <>{data.results}</>;
}
