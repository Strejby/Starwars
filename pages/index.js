import React, { useState, useEffect } from "react";

const defaultEndPoint = "https://swapi.dev/api/people/";

export async function getServerSideProps() {
    const res = await fetch(defaultEndPoint);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

export default function index({ data }) {
    const { next, results: defaultResults = [] } = data;
    const [results, updateResults] = useState(defaultResults);
    const [minIndex, setMinIndex] = useState(0);
    const [maxsIndex, setMaxIndex] = useState(2);
    const [page, updatePage] = useState({
        current: defaultEndPoint,
    });

    const { current } = page;

    useEffect(() => {
        if (current === defaultEndPoint) return;

        async function request() {
            const res = await fetch(current);
            const nextData = await res.json();
            updatePage({
                current,
                ...nextData.info,
            });

            if (!nextData.info?.prev) {
                updateResults(nextData.results);
                return;
            }

            updateResults((prev) => {
                return [...prev, ...nextData.results];
            });
        }
        request();
    }, [current]);

    function handleLoadMore() {
        setMaxIndex(maxsIndex + 1);
    }

    function handleOnSubmitSearch(e) {
        e.preventDefault();

        const { currentTarget = {} } = e;
        const fields = Array.from(currentTarget?.elements);
        const fieldQuery = fields.find((field) => field.name === "query");

        const value = fieldQuery.value || "";
        const endpoint = "https://swapi.dev/api/people/?search=" + value;

        updatePage({
            current: endpoint,
        });
    }

    return (
        <>
            <form onSubmit={handleOnSubmitSearch}>
                <input name="query" type="search" />
                <button>Search</button>
            </form>
            {results.slice(minIndex, maxsIndex).map((result) => {
                const { name } = result;
                return (
                    <li key={name}>
                        <a>{name}</a>
                    </li>
                );
            })}
            <button type="button" onClick={handleLoadMore}>
                Load more
            </button>
        </>
    );
}
