let pageEl = document.querySelector('.page')


class ElementClass {
  constructor(element, parent, className, text){
    this.element = element
    this.parent = parent
    this.className = className
    this.text = text      
    this.newDomEl = this.domElement()  
    parent.append(this.newDomEl)
  }
  domElement(){
    let newDomElement = document.createElement(this.element)
    if(this.className){newDomElement.classList.add(this.className)}
    if(this.text){newDomElement.textContent=this.text}
    return newDomElement
  }  
}


  let openingHours = new ElementClass('div', pageEl, 'opening-hours', ) 
  openingHours.childs = [
  title = new ElementClass('h2', openingHours.newDomEl, 'opening-hours-title', 'Öffnungszeiten'),
  monday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr'),
  tuesday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr'),
  wednesday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr'),
  thursday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr'),
  friday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr'),
  saturday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr'),
  sunday = new ElementClass('p', openingHours.newDomEl, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr'),
  ]
