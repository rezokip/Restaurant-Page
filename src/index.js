
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
let page =  new ElementClass('div', content, 'page', )  

let homePageContent=function(){
  let descriptionFirst = new ElementClass('p', page, 'description-first', 'Wir in Nürnberg, im herzen der Südstadt können auf eine über 10 Jährige Erfahrung zurückblicken. Unser Ziel ist es mit unserer langjährigen Erfahrung euch das beste und optimale Geschmackserlebnis zu bieten. Cigköfte reicht auf eine traditionelle Herkunft von mehreren hundert Jahren zurück. Es ist eine herzhafte Paste, die aus Bulgur (Weizen), Tomatenmark, Paprikamark, zahlreiche Gewürze, gemahlene Nüsse und weitere Bestandteile besteht. Diese natürlichen Zutaten bieten nicht zuletzt deshalb einen exzellenten Geschmack' )
  let descriptionSecond = new ElementClass('p', page, 'description-second','Bei uns kannst du dir die türkische Spezialität im Dürüm oder Portionsweise mit frischem Salat, Lavashbrot und Soße schmecken lassen, wahlweise auch zum mitnehmen. Neben Cigköfte bieten wir selbstverständlich viele verschiedene Vegane Spezialitäten an. Unser Hausgemachtes, Veganes Käsekuchen ist das Highlight für Naschkatzen. Ob Veganer oder nicht Veganer lass dich von unseren köstlichen Speisen überzeugen.') 
  
  let openingHours = new ElementClass('div', page, 'opening-hours', ) 
  let openingTitle = new ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')
  let monday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')
  let tuesday = new ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')
  let wednesday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr')
  let thursday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr')
  let friday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr')
  let saturday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr')
  let sunday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr')

  let location = new ElementClass('div', page, 'location')
  let locationTitle = new ElementClass('h2', location, 'location-title', 'SCHAUT VORBEI')
  let locationName = new ElementClass('p', location, 'location-name', 'Cigköftem Nürnberg')
  let locationAdress = new ElementClass('p', location, 'locatin-adress', 'Schweiggerstraße 3')
  let locationPostCode = new ElementClass('p', location, 'locatin-postcode', '90478 Nürnberg')
  let locationTel = new ElementClass('p', location, 'locatin-tel', 'Tel: 0911 99 44 91 55')

}  

homePageContent()
home.domEl.addEventListener('click', function(){
  page.domEl.textContent= ''
  kontaktPageContent()
})

menu.domEl.addEventListener('click', function(){
  page.domEl.textContent=''
  homePageContent()
})




  
  




