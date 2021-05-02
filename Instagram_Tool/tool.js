//on loading tool.js display the stats 
var avgLikes = localStorage.getItem('likes')/localStorage.getItem('postNum');
var avgComments = localStorage.getItem('comments')/localStorage.getItem('postNum');
window.onload = function what(){
    document.getElementById("username").innerHTML = localStorage.getItem('username');
    document.getElementById("fullName").innerHTML = localStorage.getItem('fullName');
    document.getElementById("postNum").innerHTML = localStorage.getItem('postNum');
    document.getElementById("followersNum").innerHTML = localStorage.getItem('followersNum');
    document.getElementById("followsNum").innerHTML = localStorage.getItem('followsNum');
    document.getElementById("likes").innerHTML = localStorage.getItem('likes');
    document.getElementById("comments").innerHTML = localStorage.getItem('comments');
    document.getElementById("avgLikes").innerHTML = avgLike;
    document.getElementById("avgComments").innerHTML = avgComments;
  }
