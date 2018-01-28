import { Message } from './message.model';

export class Conversation {

    constructor(
        public id: number,
        public name: string,
        public imagePath: string,
        public usersCount: number,
        public messagesCount: number,
        public messages: Message[]
    ) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.usersCount = usersCount;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
}
