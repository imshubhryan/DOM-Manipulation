var istatus = document.querySelector('h5')

var add = document.querySelector('#add')

var counter = 0;
add.addEventListener('click', function(){
    if(counter === 0){
        counter = 1;
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        add.innerHTML = "Remove Friend"

    }
    else{
        istatus.innerHTML = "Remove"
        istatus.style.color = "red"
        add.innerHTML = "Add Friend"
        counter = 0;
    }
    
})
