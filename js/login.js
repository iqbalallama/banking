document.getElementById('login-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    if(userEmail == 'king@123' && userPassword == 12345){
        window.location.href="banking.html";
    }
})