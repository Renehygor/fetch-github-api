
import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getFollowers } from './services/followers.js'
import { getFollowings } from './services/followings.js'
import { getStar } from './services/star.js'
import { getEvents } from './services/events.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'


// evento de click
document.getElementById('btn-search').addEventListener('click', () => {
    // quando clicar tenho que pega o que esta escrito no input e mandar para github
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
});

// evento de ENTER keyup 
document.getElementById('input-search').addEventListener('keyup', (e) => {
    // quando apertar o enter tenho que pega o que esta escrito no input e mandar para github
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {

        if (validateEmptyInput(userName)) return
        getUserData(userName)

    }

});

// essa função foi criada para validar se o input esta vazio se estiver vazio vai mandar um alerta para preencher corretamente
function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com nome do usuário do Github')
        return true // este return é bolleano pois ele é chamado dentro de outra função
    }
}

async function getUserData(userName) {

    //then quando terminar de carregar vou fazer algo 
    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const followersResponse = await getFollowers(userName)
    const followingsResponse = await getFollowings(userName)
    const starredResponse = await getStar(userName)
    const eventsResponse = await getEvents(userName)

    user.setFollowers(followersResponse.length)
    user.setFollowings(followingsResponse.length)
    user.setStarred(starredResponse.length)
    user.setInfo(userResponse)
    user.setEvents(eventsResponse)
    user.setRepositories(repositoriesResponse)
    // renderizar o objeto user na tela
    screen.renderUser(user)

}
