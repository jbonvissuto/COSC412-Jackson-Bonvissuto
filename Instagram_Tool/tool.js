//calculate stats
var avgLikes = localStorage.getItem('likes')/localStorage.getItem('postNum');
var avgComments = localStorage.getItem('comments')/localStorage.getItem('postNum');
//round the numbers
avgLikes = Math.round(avgLikes * 10) / 10;
avgComments = Math.round(avgComments * 10) / 10;

//on loading tool.js display the stats
window.onload = function what(){
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
