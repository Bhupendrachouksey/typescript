var Tube = /** @class */ (function () {
    function Tube(videoTitle, category, views, likes, dislikes, comments, subcribe, description, nextVideolink, previousVideolink, relatedVideos) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getRelatedVideos = function () {
            console.log("These are the related Videos");
        };
        this.getNextVideoLink = function () {
            return _this.nextVideolink;
        };
        this.getPreviousVideoLink = function () {
            return _this.previousVideolink;
        };
        this.getSubcribe = function () {
            return _this.subcribe;
        };
        this.videoTitle = videoTitle;
        this.category = category;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.subcribe = subcribe;
        this.description = description;
        this.nextVideolink = nextVideolink;
        this.previousVideolink = previousVideolink;
        this.relatedVideos = relatedVideos;
    }
    return Tube;
}());
var youTube = new Tube("Best Of Atif Aslam", "latest video songs", 20, 10, 2, 5, 50, "All songs of Rockstar", "https://www.youtube.com/watch?v=d941Hxzycjc", "https://www.youtube.com/watch?v=clbREj2_Lw4", "BEST OF 2018 | BOLLYWOOD SONGS, BEST OF 2018 | BOLLYWOOD ROMANTIC");
var titl = youTube.getVideoTitle();
console.log("This is the Title:- " + titl);
var view = youTube.getViews();
console.log("Number of views:- " + view);
var like = youTube.getLikes();
console.log("Number of likes:- " + like);
var dis = youTube.getDislikes();
console.log("Number of dislikes:- " + dis);
var comm = youTube.getComments();
console.log("Number of comments:- " + comm);
var subcri = youTube.getSubcribe();
console.log("Number of subcribers:- " + subcri);
var descrip = youTube.getDescription();
console.log("Decription:- " + descrip);
var cate = youTube.getCategory();
console.log("Category:- " + cate);
var related = youTube.getRelatedVideos();
console.log("Related video:- " + related);
var next = youTube.getNextVideoLink();
console.log("Next video link:- " + next);
var previous = youTube.getPreviousVideoLink();
console.log("Previous video liks:- " + previous);
