//calculate stats
var avgLikes = localStorage.getItem('likes')/localStorage.getItem('postNum');
var avgComments = localStorage.getItem('comments')/localStorage.getItem('postNum');
//round the numbers
avgLikes = Math.round(avgLikes * 10) / 10;
avgComments = Math.round(avgComments * 10) / 10;

//on loading tool.js display the stats
window.onload = function what(){
    //document.getElementById("profilePic").src = "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/131998814_790943794968713_1877753893038002645_n.jpg?tp=1&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=EGJrRQmjTDoAX9Dkd5y&edm=ABfd0MgBAAAA&ccb=7-4&oh=63f71262c27e385bd5dee6fc14f24d86&oe=60B3D2D9&_nc_sid=7bff83";
    document.getElementById("profilePic").src = localStorage.getItem('profileUrl');
    document.getElementById("username").innerHTML = localStorage.getItem('username');
    document.getElementById("fullName").innerHTML = localStorage.getItem('fullName');
    document.getElementById("postNum").innerHTML = localStorage.getItem('postNum');
    document.getElementById("followersNum").innerHTML = localStorage.getItem('followersNum');
    document.getElementById("followsNum").innerHTML = localStorage.getItem('followsNum');
    document.getElementById("likes").innerHTML = localStorage.getItem('likes');
    document.getElementById("comments").innerHTML = localStorage.getItem('comments');
    document.getElementById("avgLikes").innerHTML = avgLikes;
    document.getElementById("avgComments").innerHTML = avgComments;
  }
