
alert('Hello');

var button = document.querySelector('button');
var isPurple= true;

button.addEventListener("click",function (count){
    if(isPurple){
        document.body.style.background = 'purple';
        
    }
    else{
        document.body.style.background = "blue";
    }
    isPurple=!isPurple;
    
});
