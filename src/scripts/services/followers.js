
import { baseUrl } from '../variables.js'
// fução para trazer os repositorios do usuario
async function getFollowers(userName) {

    const response = await fetch(`${baseUrl}/${userName}/followers`)
    return await response.json()
}

export{getFollowers}

//"https://api.github.com/users/Renehygor/followers"