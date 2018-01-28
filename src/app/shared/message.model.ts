export class Message {
    constructor(public id: number,
                public authorName: string,
                public authorId: number,
                public content: string,
                public date: Date,
                public read: boolean) {
        this.id = id;
        this.authorName = authorName;
        this.authorId = authorId;
        this.content = content;
        this.date = date;
        this.read = read;
    }
}
