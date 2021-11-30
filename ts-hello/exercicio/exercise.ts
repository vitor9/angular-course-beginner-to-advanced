export class Like {

    constructor(private likeCount: number) {}

    likePost(liked: boolean) {
        if (!liked) {
            console.log(`Post was not liked. Number of likes now is: \t${this.likeCount}`);
            return;
        }
        this.likeCount++;
        console.log(`Post liked! Number of likes is now: \t\t${this.likeCount}`);
    }

}