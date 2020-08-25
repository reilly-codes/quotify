export class Quote {
    constructor (
        public title: string,
        public description: string,
        public author: string,
        public upvotes: number = 0,
        public downvotes: number = 0
    ) {}
}
