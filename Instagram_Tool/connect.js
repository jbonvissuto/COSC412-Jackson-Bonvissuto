
// username from input 
var username = document.getElementById('username');

// storing input from register-form
$("#connect").click(function(e) {
    e.preventDefault();
    localStorage.setItem('username', username.value);
    checkAccount();
});


function checkAccount(){ 
  $.post("getAccountv2.php", {"username": localStorage.getItem('username')}, function(response) {
      //Store values returned by scraper in local storage
      localStorage.setItem('fullName', response.fullName);
      localStorage.setItem('postNum', response.postNum);
      localStorage.setItem('followersNum', response.followersNum);
      localStorage.setItem('followsNum', response.followsNum);
      localStorage.setItem('likes', response.likes);
      localStorage.setItem('comments', response.comments);
      //Display the tool page
      location.href = "tool.html";
  }, 'json' 
  )
  .fail(function() {//if the user is not found display alert and reload page
    alert("Username: " + localStorage.getItem('username') + " not found, try another one.");
    location.reload();
  });
}