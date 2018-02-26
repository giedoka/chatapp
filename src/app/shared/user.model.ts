import { Conversation } from './conversation.model';
export class User {
    constructor(
        public id: string,
        public name: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public conversationsIds: [string]
    ) {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.conversationsIds = conversationsIds;
    }
}
