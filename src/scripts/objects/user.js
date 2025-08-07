
// criar um objeto user atribuindo as propriedades
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers:[],
    followings:[],
    starred: [],
    events: [],
    
    // criar metodos, this se referencia ao objeto

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },

    setRepositories(repositories){
        this.repositories = repositories
    },
    setFollowers(followers){
        this.followers = followers
    },
     setFollowings(followings){
        this.followings = followings
    },
    setStarred(starred){
        this.starred = starred
    },
    setEvents(events){
        this.events = events
    }
}

export{ user }