export async function getStarWars(target) {
    const getRequest = fetch("https://swapi.dev/api/" + target, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (body) {
            return body;
        })
        .catch(function (err) {
            return err;
        });

    return getRequest;
}
