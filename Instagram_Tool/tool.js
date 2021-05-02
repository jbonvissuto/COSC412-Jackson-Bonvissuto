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
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));
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

function checkAccount(){ 
    $.post("getAccountv2.php")
    .done(function() {
        alert( "$.get succeeded" );
    })
    .fail(function() {
        alert( "$.get failed!" );
    });
}







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