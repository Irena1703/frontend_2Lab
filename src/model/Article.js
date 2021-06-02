export default class Article {
    constructor(description, text) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.description = description;
        this.text = text;
        this.createdAt = new Date();
        this.comments = [];
    }

    AddComment(comment) { 
        this.comments.push(comment);
    }

    ChangeDescription(description) {
        this.description = description;
    }

    ChangeText(text){
        this.text = text;
    }
}