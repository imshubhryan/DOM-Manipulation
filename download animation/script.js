var grow = 0;
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
    btn.style.pointerEvents= "none"

    var num =50 + Math.random()*50 //50 add cuz agr number 50 se neeche hoga to timer kitta fast chlega thats y
    var stop =setInterval(() => {
    grow++
    h2.innerHTML = grow+"%"
    inner.style.width = grow+"%"
    
   }, num);

   setTimeout(function(){
    clearInterval(stop)
    btn.innerHTML = "Downloaded"
    btn.style.opacity= 0.5
},num*100)// number jitta hoga uska 100 guna qki hundred pr rukna h
    
})



