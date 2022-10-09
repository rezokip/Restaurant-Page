
let menuPageContent = function(){

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
