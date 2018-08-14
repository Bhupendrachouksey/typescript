class Tube{

    videoTitle : string;
    category : string;
    views : number;
    likes : number;
    dislikes : number;
    comments : number;
    subcribe : number;
    description : string;
    nextVideolink : string;
    previousVideolink : string;
    relatedVideos : string;

    constructor(videoTitle: string, category: string, views : number, likes : number, dislikes : number, comments : number, subcribe : number, description : string, nextVideolink : string, previousVideolink : string, relatedVideos : string)
{
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

getVideoTitle = () =>{
    return this.videoTitle;
}

getViews = () =>{
    return this.views;
}

getLikes = () =>{
    return this.likes;
}

getDislikes = () =>{
    return this.dislikes;
}

getComments = () =>{
    return this.comments;
}

getDescription = () =>{
    return this.description;
}

getCategory = () =>{
    return this.category;
}

getRelatedVideos = () =>{
    console.log("These are the related Videos");
}

getNextVideoLink = () => {
    return this.nextVideolink;
}

getPreviousVideoLink = () =>{
    return this.previousVideolink;
}

getSubcribe =() =>{
    return this.subcribe;
}
}

let youTube= new Tube("Best Of Atif Aslam", "latest video songs", 20, 10, 2, 5, 50, "All songs of Rockstar", "https://www.youtube.com/watch?v=d941Hxzycjc", "https://www.youtube.com/watch?v=clbREj2_Lw4", "BEST OF 2018 | BOLLYWOOD SONGS, BEST OF 2018 | BOLLYWOOD ROMANTIC")

let titl= youTube.getVideoTitle();
console.log("This is the Title:- " +titl);


let view= youTube.getViews();
console.log("Number of views:- " +view);


let like= youTube.getLikes();
console.log("Number of likes:- " +like);


let dis= youTube.getDislikes();
console.log("Number of dislikes:- " +dis);


let comm= youTube.getComments();
console.log("Number of comments:- " +comm);

let subcri= youTube.getSubcribe();
console.log("Number of subcribers:- "+subcri);

let descrip= youTube.getDescription();
console.log("Decription:- " +descrip);

let cate= youTube.getCategory();
console.log("Category:- " +cate);

let related= youTube.getRelatedVideos();
console.log("Related video:- " +related);


let next= youTube.getNextVideoLink();
console.log("Next video link:- " +next);


let previous= youTube.getPreviousVideoLink();
console.log("Previous video liks:- "+previous);





