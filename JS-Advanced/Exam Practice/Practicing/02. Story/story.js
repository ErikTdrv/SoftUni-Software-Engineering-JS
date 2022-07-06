class Story{
    title = String;
    creator = String;
    #comments = []
    #likes = []
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
    } 

    getterLikes(username){
        if(this.#likes == 0){
            return `${username} has 0 likes`
        }else if(this.#likes == 1){
            return `${username} has 0 likes`
        }else{
            return `${username} and ${this.#likes - 1} others like this story!`
        }
    }

    like(username){
        
    }
}