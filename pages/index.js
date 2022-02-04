import React, { useState } from "react";
import Typography from "../components/atoms/typography";

const dataTypes = ["films", "people", "planets", "species", "vehicles"];

export default function App() {
    const [swapiData, setSwapiData] = useState(null);
    const [category, setCategory] = useState(null);
    const [search, setSearch] = useState("");

    const getData = async (type) => {
        setCategory(type);
        const response = await fetch(`https://swapi.dev/api/${type}/`);
        const data = await response.json();
        setSwapiData(data);
    };

    const getPage = async (url) => {
        const newUrl = url;
        const response = await fetch(newUrl);
        const data = await response.json();
        setSwapiData(data);
    };

    const handleSearch = async () => {
        const response = await fetch(
            `https://swapi.dev/api/${category}/?search=${search}`
        );
        const data = await response.json();
        setSwapiData(data);
    };

    return (
        <>
            {dataTypes.map((type) => (
                <button name={type} onClick={(e) => getData(e.target.name)}>
                    {type}
                </button>
            ))}
            <div>Results: {swapiData && swapiData.count}</div>
            {swapiData &&
                swapiData.results.map((item) =>
                    category === "films" ? (
                        <p>{item.title}</p>
                    ) : (
                        <p>{item.name}</p>
                    )
                )}
            {swapiData && (swapiData.next || swapiData.previous) ? (
                <div>
                    <button
                        disabled={!swapiData.previous}
                        onClick={() => getPage(swapiData.previous)}
                    >
                        Previous page
                    </button>
                    <button
                        disabled={!swapiData.next}
                        onClick={() => getPage(swapiData.next)}
                    >
                        Next page
                    </button>
                </div>
            ) : null}
            <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={(e) => handleSearch(e.target.name)}>Search</button>
            <Typography as="p">Hej</Typography>
        </>
    );
}
