export class Message {
    constructor(
                public authorId: string,
                public content: string,
                public date: Date,
                public status: string) {
        this.authorId = authorId;
        this.content = content;
        this.date = date;
        this.status = status;
    }
}