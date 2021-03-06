import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)
export function optionsGen(op, detail) {
    if (detail) {
        const options = {
            method: 'GET',
            url: 'https://mmo-games.p.rapidapi.com/game',
            params: { id: `${detail}` },
            withCredentials: true,
            headers: {
                'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
                'x-rapidapi-key': apiKey
            },

        };
        return options
    } else {
        const options = {
            method: 'GET',
            url: `https://mmo-games.p.rapidapi.com/${op}`,
            headers: {
                'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
                'x-rapidapi-key': apiKey
            }
        };
        return options
    }
}

export async function getResponse(op) {
    const gamesData = await axios.request(op).then(function (response) {
        return response.data
    }).catch(function (error) {
        return error;
    });
    return gamesData;
}
