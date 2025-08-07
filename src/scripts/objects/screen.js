const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}"alt'Foto de perfil do usuario'/>
                                        <div>
                                            <h1>${user.name ?? 'Não possui nome cadastrado😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadstrada😥'}</p>
                                        </div>
                                      </div>`

        this.userProfile.innerHTML += `<div class= "other-info"> 

                                            <div class = "followers">
                                                <h4>👥Followers</h4>
                                                <p>${user.followers}</p>
                                            </div>

                                            <div class = "followings">
                                                <h4>👥Followings</h4>
                                                <p>${user.followings}</p>
                                            </div>

                                        </div>
                                      </div>`

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += `<li><a href='${repo.html_url}' target='_blank'>${repo.name}
            <div class="classificacoes ">
                <div class ="forks">🍴 ${repo.forks}</div>
                <div class ="star">⭐ ${repo.stargazers_count}</div>
                <div class ="watchers">👀 ${repo.watchers}</div>
                <div class ="language">🌄 ${repo.language}</div>
            </div>
            </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class='repositories section'>
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}
                                                </ul>
                                           </div>`
        }

    let eventsItens = "";

        user.events.forEach(event => {
            if (event.type === "PushEvent" &&
                event.payload.commits &&
                event.payload.commits.length > 0) {
                
                eventsItens += `<li>${event.repo.name}<span>-${event.payload.commits[0].message}</span></li>`;
            
            } else if (event.type === "CreateEvent") {
                
                eventsItens += `<li>${event.repo.name} <span>-Sem mensagem de commit</span></li>`;
            }
            
    });

    // Se não houver eventos válidos
    if (user.events.length === 0) {
        eventsItens = `<li>Não possui eventos recentes</li>`;
    }

    this.userProfile.innerHTML +=  `<div class="events section">
                                        <h2>Eventos</h2>
                                        <ul>${eventsItens}</ul>
                                    </div>`;

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  
    }
}

export { screen }

