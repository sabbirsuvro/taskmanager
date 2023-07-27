var users = [
    {
         username : "sabbir",
         password : "sabbir"
    },
    {
        username : "sabbir1",
        password : "sabbir1"
    }
]

function loginS () {
     var username = document.getElementById('username').value ;
     var password = document.getElementById('password').value ;

     for(var i=0; i<users.length; i++ ){
        if(username == users[i].username && password == users[i].password) {
            window.location.href = 'https://www.google.com' ;
            // window.location.assign = 'Udashboard.html';
        
        }
          
     }
}