export class User {
    constructor(
        public email: string,
        public password: string,
        public name?: string,
        public firstName?: string,
        public lastName?: string,
        public conversationsIds?: [string],
        public _id?: string,
    ) {}
}
