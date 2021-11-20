import axios from "axios";


export function optionsGen(op, detail) {
    if (detail) {
        const options = {
            method: 'GET',
            url: 'https://mmo-games.p.rapidapi.com/game',
            params: { id: `${detail}` },
            withCredentials: true,
            headers: {
                'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
                'x-rapidapi-key': 'dab44ff0ecmsh6ef9d47b94e920cp1656f0jsna278c339b084'
            },

        };
        return options
    } else {
        const options = {
            method: 'GET',
            url: `https://mmo-games.p.rapidapi.com/${op}`,
            headers: {
                'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
                'x-rapidapi-key': 'dab44ff0ecmsh6ef9d47b94e920cp1656f0jsna278c339b084'
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
