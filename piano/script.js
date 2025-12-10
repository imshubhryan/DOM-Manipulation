var c = new Audio('./28.mp3')
var d = new Audio('./29.mp3')
var e = new Audio('./30.mp3')
var f = new Audio('./31.mp3')
var g = new Audio('./32.mp3')
var a = new Audio('./33.mp3')
var b = new Audio('./34.mp3')

var h1 = document.querySelector('h1')

document.body.addEventListener('keydown',function(val){
    if(val.key === 'c' || val.key ==="C"){
        c.play()
        h1.innerHTML = val.key
    } 
    if(val.key === 'd' || val.key ==="D"){
         d.play()
         h1.innerHTML = val.key
    }
    if(val.key === 'e' || val.key ==="E"){
         e.play()
         h1.innerHTML = val.key
    }
    if(val.key === 'f' || val.key ==="F"){
         f.play()
         h1.innerHTML = val.key
    }
    if(val.key === 'g' || val.key ==="G") {
        g.play()
        h1.innerHTML = val.key
    }
    if(val.key === 'a' || val.key ==="A"){ 
        a.play()
    }
    if(val.key === 'b' || val.key ==="B") {
        b.play()
        h1.innerHTML = val.key
    }

})