import {ElementClass, page} from './index.js'


import menuPic2 from './menu-pic2.jpg'
import menuPic3 from './menu-pic3.jpg'
import menuPic4 from './menu-pic4.jpg'

let menuPageContent = function(){

const menupic1 = new Image()
const menupic2 = new Image()
const menupic3 = new Image()
menupic1.src = menuPic2
menupic2.src = menuPic3
menupic3.src = menuPic4


const menuImageContainer1 = new ElementClass('div', page, 'img-container')
menuImageContainer1.domEl.appendChild(menupic1)
const menuImageContainer2 = new ElementClass('div', page, 'img-container')
menuImageContainer2.domEl.appendChild(menupic2)
const menuImageContainer3 = new ElementClass('div', page, 'img-container')
menuImageContainer3.domEl.appendChild(menupic3)


let imgContainers = document.querySelectorAll('.img-container')

for(let i =0; i<imgContainers.length; i++){
  imgContainers[i].style.display = 'none'
}

function renderImg(){
  imgContainers[0].style.display = 'block'
}

renderImg()



for(let i =0; i<imgContainers.length; i++){
  
  imgContainers[i].addEventListener('click', function(){
 
    console.log(imgContainers[i]) 
    this.style.display = 'none'
    if(i+1<imgContainers.length){
      imgContainers[i+1].style.display = 'block' 
    }
    else{
      imgContainers[0].style.display = 'block'
    }
  })
}

}

export {menuPageContent}



/*
let imgContainers = document.querySelectorAll('.img-container')


for(let i =0; i<imgContainers.length; i++){
  imgContainers[i].style.display = 'none'
}

function renderImg(){
  imgContainers[0].style.display = 'block'
}

renderImg()



for(let i =0; i<imgContainers.length; i++){
  
  imgContainers[i].addEventListener('click', function(){
 
    console.log(imgContainers[i]) 
    this.style.display = 'none'
    if(i+1<imgContainers.length){
      imgContainers[i+1].style.display = 'block' 
    }
    else{
      imgContainers[0].style.display = 'block'
    }
  })
}
*/