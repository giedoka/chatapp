export class Message {
    constructor(
                public authorId: string,
                public authorFirstName: string,
                public authorLastName: string,
                public content: string,
                public date: Date,
                public status: string,
                public conversationId: string) {
        this.authorId = authorId;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.content = content;
        this.date = date;
        this.status = status;
        this.conversationId = conversationId;
    }
}