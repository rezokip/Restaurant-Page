import Icon from './cigkoftem-logo.png'
const CigkoftemLogo = new Image()
CigkoftemLogo.src = Icon

import menuPic2 from './menu-pic2.jpg'
import menuPic3 from './menu-pic3.jpg'
import menuPic4 from './menu-pic4.jpg'

import { homePageContent } from './home.js'
import { menuPageContent } from './menu.js'
import { kontaktPageContent } from "./kontakt.js"


export {ElementClass, page}

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



const content = document.querySelector('#content')

let header = new ElementClass('div', content, 'header')
let home = new ElementClass('div', header, 'home', 'HOME')
let menu = new ElementClass('div', header, 'menu', 'MENU')
let kontakt = new ElementClass('div', header, 'kontakt', 'KONTAKT')

const mainImageContainer = new ElementClass('div', content, 'main-image-container')
mainImageContainer.domEl.appendChild(CigkoftemLogo)

let page =  new ElementClass('div', content, 'page', )  



homePageContent()
home.domEl.addEventListener('click', homePageContent)

menu.domEl.addEventListener('click', menuPageContent)

kontakt.domEl.addEventListener('click', kontaktPageContent)