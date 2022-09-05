const element=document.getElementById('pic')
const pic1 = document.getElementById('pic1')
const pic2 = document.getElementById('pic2')
const pic3 = document.getElementById('pic3')

pic1.addEventListener("click",function(){
    element.setAttribute('src','./img/beach-at-sunset-in-teal-and-orange.jpg')
})

pic2.addEventListener("click", function(){
    element.setAttribute('src','./img/CB-Background-151-864x1080.jpg')
})

pic3.addEventListener('click',function(){
    element.setAttribute('src','./img/elaborate-building-interior-with-light-teal-walls.jpg')
})