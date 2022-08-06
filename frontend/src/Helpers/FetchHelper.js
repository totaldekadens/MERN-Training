
const makeRequest = async (url, body) => {
    try {
        let response = await fetch(url, body)
        let result = await response.json();

        return result
    } catch(err) {
        console.error(err)
    }
}


export const getAllPlayers = async () => {
    let result = await makeRequest('http://localhost:4000/players');
    return result;
}

export const deletePlayer = async (playerId) => {
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    let result = await makeRequest(`http://localhost:4000/player/${playerId}`, requestOptions) 

    return result;
}

export const addPlayer = async (newPlayer) => {
 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer)
    };

    let result = await makeRequest('http://localhost:4000/players', requestOptions)

    return result;
}

export const modifyPlayer = async (playerId, updatePlayer) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatePlayer)
    };

    let result = await makeRequest(`http://localhost:4000/player/${playerId}`, requestOptions)

    return result
}