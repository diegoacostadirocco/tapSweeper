
import axios from 'axios'

const baseURL = 'http://localhost:5000/api'

const getGame = async (name) => {

    const { data, error, success } = await (await axios.get(`${baseURL}/game/`, { params: { name } })).data
    if (!success) {
        alert(error)
        return
    }
    return data
}

const saveGame = async (body) => {
    await axios.post(`${baseURL}/game/`, body)
}

const apis = {
    getGame, saveGame
}

export default apis
