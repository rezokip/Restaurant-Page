// Import the menu pictures
import menuPic1 from './images/menu-pic2.jpg'
import menuPic2 from './images/menu-pic3.jpg'
import menuPic3 from './images/menu-pic4.jpg'

import {ElementClass, page} from './index.js'

// first reset the page content with empty textconent and then
// use the element class to create the elements
// use the created image elements and asign its src to the imported images
// make a nodelist for the image containers
  // set the displays to none 
  // set the first images display to block
  // listen for click on the images to change to next image
    // if its the last image, then go back to the first image
let menuPageContent = function(){
  page.domEl.textContent=''
  const menuImageContainer1 = new ElementClass('div', page, 'img-container')
  const menuImageContainer2 = new ElementClass('div', page, 'img-container')
  const menuImageContainer3 = new ElementClass('div', page, 'img-container')
  const menuImg1 = new ElementClass('img', menuImageContainer1, 'menu-img1')
  const menuImg2 = new ElementClass('img', menuImageContainer2, 'menu-img2')
  const menuImg3 = new ElementClass('img', menuImageContainer3, 'menu-img3')
  menuImg1.domEl.src = menuPic1
  menuImg2.domEl.src = menuPic2
  menuImg3.domEl.src = menuPic3

  let imgContainers = document.querySelectorAll('.img-container')

  for(let image  of imgContainers){
    image.style.display = 'none'
  }
  function renderImg(){
    imgContainers[0].style.display = 'block'
  }
  renderImg()

  for(let i =0; i<imgContainers.length; i++){
    imgContainers[i].addEventListener('click', function(){
   
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

// export menu page content
export {menuPageContent}

