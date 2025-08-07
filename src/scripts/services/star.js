import { baseUrl } from '../variables.js'
// função para trazer as stars repositorios do usuario
async function getStar(userName) {

    const response = await fetch(`${baseUrl}/${userName}/starred`)
    return await response.json()
}

export{getStar}

