"use strict";
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(likeCount) {
        this.likeCount = likeCount;
    }
    Like.prototype.likePost = function (liked) {
        if (!liked) {
            console.log("Post was not liked. Number of likes now is: \t".concat(this.likeCount));
            return;
        }
        this.likeCount++;
        console.log("Post liked! Number of likes is now: \t\t".concat(this.likeCount));
    };
    return Like;
}());
exports.Like = Like;
