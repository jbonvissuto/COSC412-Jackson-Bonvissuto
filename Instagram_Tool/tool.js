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
    localStorage.setItem('password', password.value);
    checkAccount();
    if(localStorage.getItem('username') === "bat" && localStorage.getItem('password') === "test"){
        location.href = "tool.html";
      }  
      else{
          // Changing content and color of content
        error.textContent = "Unable to find account, try again"
        setTimeout(function() {
            location.reload();
          }, delayInMilliseconds);
        
      }
});

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
function checkAccount(){
    $.ajax({
        url: "getAccount.php",
        type: "POST",
        data: {username: localStorage.getItem('username'), password: localStorage.getItem('password')},
        dataType: "json",
        success: function() {
          alert("worked");
        },
        error: function() {
          alert("There was an error. Try again please!");
        }
      });
}
