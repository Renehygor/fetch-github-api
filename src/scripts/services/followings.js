import { baseUrl } from '../variables.js'
// fução para trazer os repositorios do usuario
async function getFollowings(userName) {

    const response = await fetch(`${baseUrl}/${userName}/following`)
    return await response.json()
}

export { getFollowings }

//"https://api.github.com/users/Renehygor/following"

//  <div class="classificacoes ">
//                 <div class ="forks">${repo.forks}</div>
//                 <div class ="starred">${repo.starred}</div>
//                 <div class ="watchers">${repo.watchers}</div>
//                 <div class ="language">${repo.language}</div>
//             </div>