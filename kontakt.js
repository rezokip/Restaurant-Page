
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


let content = document.querySelector('#content')
let page = new ElementClass('div', content, 'page', 'test')



let openingHours = new ElementClass('div', page, 'opening-hours', ) 
let openingTitle = new ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')
let monday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')
let tuesday = new ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')
let wednesday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr')
let thursday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr')
let friday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr')
let saturday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr')
let sunday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr')

