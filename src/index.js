// Import the main logo
// Import the contents for the header elements
import './style.css'

import cigkoftemlogo from './logos/cigkoftem-logo.png'

import { homePageContent } from './home.js'
import { menuPageContent } from './menu.js'
import { kontaktPageContent } from "./kontakt.js"

// export the element class 
export {ElementClass, page}


// Class for Creating an Element as object 
  // creates values such as element, parent, class name and textcontent
  // automaticly pushes it to its parent array 
  // creates own childs as an array
  // to get the element use this.domEl
class ElementClass { 
  constructor(element, parent, className, text){
    this.element = element
    this.parent = parent
    this.className = className
    this.text = text      
    this.domEl = this.domElement()   
    this.childs = []
    if(parent === content){ parent.append(this.domEl)}
    else {parent.domEl.append(this.domEl)}  
    this.pushToParent()   
  }
  domElement(){
    let newDomElement = document.createElement(this.element)
    if(this.className){newDomElement.classList.add(this.className)}
    if(this.text){newDomElement.textContent=this.text}
    return newDomElement
  }  
  pushToParent(){
    if(this.parent.childs){
      this.parent.childs.push(this)
    }
  }
}

// get the Content div from html and
// Create the Elements that are shown on every page such as header and the main image
const content = document.querySelector('#content')

const header = new ElementClass('div', content, 'header')
const home = new ElementClass('div', header, 'home', 'HOME')
const menu = new ElementClass('div', header, 'menu', 'MENU')
const kontakt = new ElementClass('div', header, 'kontakt', 'KONTAKT')

const mainImageContainer = new ElementClass('div', content, 'main-image-container')
const mainImage = new ElementClass('img', mainImageContainer, 'main-image')
mainImage.domEl.src= cigkoftemlogo

const page =  new ElementClass('div', content, 'page', )  



// inital the page with the home page content
// add listeners to every clickable header element
homePageContent()
home.domEl.addEventListener('click', homePageContent)

menu.domEl.addEventListener('click', menuPageContent)

kontakt.domEl.addEventListener('click', kontaktPageContent)




