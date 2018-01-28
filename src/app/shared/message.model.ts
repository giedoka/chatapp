export class Message {
    constructor(public id: number,
                public authorName: string,
                public authorId: number,
                public content: string,
                public day,
                public time: string,
                public read: boolean) {
        this.id = id;
        this.authorName = authorName;
        this.authorId = authorId;
        this.content = content;
        this.day = day;
        this.time = time;
        this.read = read;
    }
}
