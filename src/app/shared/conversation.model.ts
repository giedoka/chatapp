import { Message } from './message.model';

export class Conversation {

    constructor(
        public _id: string,
        public name: string,
        public imagePath: string,
        public usersCount: number,
        public usersIds: [string],
        public messagesCount: number,
        public messages: Message[]
    ) {
        this._id = _id;
        this.name = name;
        this.imagePath = imagePath;
        this.usersCount = usersCount;
        this.usersIds = usersIds;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
}
