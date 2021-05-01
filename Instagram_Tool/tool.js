//check if logged in

// Name and Password from the register-form
var username = document.getElementById('username');
var password = document.getElementById('password');
var delayInMilliseconds = 1500; //1.5 second



setTimeout(function() {
    //your code to be executed after 1 second
  }, delayInMilliseconds);

 


// storing input from register-form
function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
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
}



function checkAccount(){
    
}

