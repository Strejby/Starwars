import React, { useState } from "react";

const dataTypes = ["films", "people", "planets", "species", "vehicles"];

export default function App() {
    const [swapiData, setSwapiData] = useState(null);
    const [category, setCategory] = useState(null);

    const getData = async (type) => {
        setCategory(type);
        const response = await fetch(`https://swapi.dev/api/${type}/`);
        const data = await response.json();
        setSwapiData(data);
        console.log(data);
    };

    const getPage = async (url) => {
        const newUrl = url;
        const response = await fetch(newUrl);
        const data = await response.json();
        setSwapiData(data);
    };

    return (
        <div className="App">
            {dataTypes.map((type) => (
                <button name={type} onClick={(e) => getData(e.target.name)}>
                    {type}
                </button>
            ))}
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
        </div>
    );
}
