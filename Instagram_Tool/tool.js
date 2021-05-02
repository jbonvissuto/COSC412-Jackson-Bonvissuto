//check if logged in

// Name and Password from the register-form
var username = document.getElementById('username');
var password = document.getElementById('password');
var delayInMilliseconds = 1500; //1.5 second



setTimeout(function() {
    //your code to be executed after 1 second
  }, delayInMilliseconds);

 


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
      username = localStorage.getItem('username')
      //Display the tool page
      location.href = "tool.html";
      //Display the stats on the tool page
      document.getElementById("username").innerHTML = username;
      document.getElementById("fullName").innerHTML = localStorage.getItem('fullName');
      document.getElementById("postNum").innerHTML = localStorage.getItem('postNum');
      document.getElementById("followersNum").innerHTML = localStorage.getItem('followersNum');
      document.getElementById("followsNum").innerHTML = localStorage.getItem('followsNum');
  }, 'json' 
  )
  .fail(function() {
    alert("Username: " + localStorage.getItem('username') + " not found, try another one.");
    setTimeout(function() {
      location.reload();
    }, delayInMilliseconds);
  });
}


/*function checkAccount(){ 
    $.post("getAccountv2.php", {"username": localStorage.getItem('username')},
    function(response) {
        location.href = "tool.html";
        document.getElementById("username").innerHTML = response.username;
        document.getElementById("fullName").innerHTML = response.fullName;
        document.getElementById("postNum").innerHTML = response.postNum;
        document.getElementById("followersNum").innerHTML = response.followersNum;
        document.getElementById("followsNum").innerHTML = response.followsNum;
    }, 'json' )
    .fail(function() {
        alert( "Account not found" );
    });
}*/







/*function checkAccount(){
        $.post("getAccount.php", {"username": username.value, "password": password.value}, function() {
            alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  });
    
}*/

/*function checkAccount(){
    $.ajax({
        url: "getAccount.php",
        type: "POST",
        data: {username: localStorage.getItem('username'), password: localStorage.getItem('password')},
        dataType: "json",
        success: function(data) {
            if(data.status == 'success'){
                alert("Thank you for subscribing!");
            }
        },
        error: function(data) {
          alert(data.status);
          //alert("There was an error. Try again please!");
        }
      });
}
*/