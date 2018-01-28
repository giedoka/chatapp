export class User {
    constructor(
        public id: number,
        public name: string,
        public conversationsIds: Array<number>
    ) {
        this.id = id;
        this.name = name;
        this.conversationsIds = conversationsIds;
    }
}
