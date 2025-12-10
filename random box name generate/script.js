var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = ['hey ! I am shubham', 'i am very nice guy', 'i am the best', 'harsh bhaiya ki jai ho']

btn.addEventListener('click', function(){
    var h1 = document.createElement('h1')
    var x = Math.random()*70
    var y = Math.random()*70
    var r = Math.floor(Math.random()*361)
    var s = Math.random()*3
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    var rand = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[rand]
    h1.style.position = "absolute"
    h1.style.top = x+"%"
    h1.style.left = y + "%"
    h1.style.rotate = r+"deg"
    h1.style.scale = s
    h1.style.color = `rgb(${c1},${c2},${c3})`
    main.appendChild(h1)
    
})


// btn.addEventListener('click', function(){
//     var div = document.createElement('div')
//     var x = Math.random()*100
//     var y = Math.random()*100
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
//     var r = Math.floor(Math.random()*361)
//     div.style.height = '50px'
//     div.style.width = "50px"
//     div.style.position = "absolute"
//     div.style.left = x+'%'
//     div.style.top = y+'%'
//     div.style.rotate = r+'deg'
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     main.appendChild(div)
    
    
// })

