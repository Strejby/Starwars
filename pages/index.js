import React, { useState, useEffect } from "react";

const defaultEndPoint = "https://swapi.dev/api/people/";

export async function getData() {
    //Utility Functions for fetch
    const urls = [
        "https://swapi.co/api/planets/",
        "https://swapi.co/api/films/",
        "https://swapi.co/api/people/",
    ];
    const checkStatus = (res) =>
        res.ok
            ? Promise.resolve(res)
            : Promise.reject(new Error(res.statusText));
    const parseJSON = (response) => response.json();

    // Get a single endpoint.
    const getPage = (url) =>
        fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .catch((error) => console.log("There was a problem!", error));

    // Keep getting the pages until the next key is null.
    const getAllPages = async (url, collection = []) => {
        const { results, next } = await getPage(url);
        collection = [...collection, ...results];
        if (next !== null) {
            return getAllPages(next, collection);
        }
        return collection;
    };

    // Select data out of all the pages gotten.
    const [planets, films, people] = await Promise.all(
        urls.map((url) => getAllPages(url))
    );
    buildData(films, planets, people);
}

export default function index({ data }) {
    return <>{data}</>;
}
