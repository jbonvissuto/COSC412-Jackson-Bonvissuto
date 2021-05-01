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
    if(username.value === "bat" && password.value === "test"){
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

function checkAccount(){
        $.post("checkAccount.php", {"username": username.value, "password": password.value}, function() {
            alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  });
    
}
/*
function checkAccount(){
    $.ajax({
        url: "getAccount.php",
        type: "POST",
        data: {username: username.value, password: password.value},
        dataType: "json",
        success: function() {
          alert("Thank you for subscribing!");
        },
        error: function() {
          alert("There was an error. Try again please!");
        }
      });
}
*/