    const uniqueId = require('uniqid');
class Cube{
    constructor(name, description, imageUrl, difficulty){
        this._id = uniqueId();
        this.name = name
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }
    
}

module.exports = Cube