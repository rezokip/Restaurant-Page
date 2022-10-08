class ElementClass {
  constructor(element, parent, className, text){
    this.element = element
    this.parent = parent
    this.className = className
    this.text = text      
    this.domEl = this.domElement()  
    parent.append(this.domEl)
  }
  domElement(){
    let newDomElement = document.createElement(this.element)
    if(this.className){newDomElement.classList.add(this.className)}
    if(this.text){newDomElement.textContent=this.text}
    return newDomElement
  }  
}


const content = document.querySelector('#content')

let header = new ElementClass('div', content, 'header')
header.childs = [
  home = new ElementClass('div', header.domEl, 'home', 'HOME'),
  menu = new ElementClass('div', header.domEl, 'menu', 'MENU'),
  kontakt = new ElementClass('div', header.domEl, 'kontakt', 'KONTAKT'),
]

let page = new ElementClass('div', content, 'page')
let descriptionFirst = new ElementClass('p', page.domEl, 'description-first', 'Wir in Nürnberg, im herzen der Südstadt können auf eine über 10 Jährige Erfahrung zurückblicken. Unser Ziel ist es mit unserer langjährigen Erfahrung euch das beste und optimale Geschmackserlebnis zu bieten. Cigköfte reicht auf eine traditionelle Herkunft von mehreren hundert Jahren zurück. Es ist eine herzhafte Paste, die aus Bulgur (Weizen), Tomatenmark, Paprikamark, zahlreiche Gewürze, gemahlene Nüsse und weitere Bestandteile besteht. Diese natürlichen Zutaten bieten nicht zuletzt deshalb einen exzellenten Geschmack' )
let descriptionSecond = new ElementClass('p', page.domEl, 'description-second','Bei uns in Nürnberg kannst du dir die türkische Spezialität im Dürüm oder Portionsweise mit frischem Salat, Lavashbrot und Soße schmecken lassen, wahlweise auch zum mitnehmen. Neben Cigköfte bieten wir selbstverständlich viele verschiedene Vegane Spezialitäten an. Unser Hausgemachtes, Veganes Käsekuchen ist das Highlight für Naschkatzen. Ob Veganer oder nicht Veganer lass dich von unseren köstlichen Speisen überzeugen.')
let openingHours = new ElementClass('div', page.domEl, 'opening-hours', ) 
openingHours.childs = [
  title = new ElementClass('h2', openingHours.domEl, 'opening-hours-title', 'Öffnungszeiten'),
  monday = new ElementClass('p', openingHours.domEl, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr'),
  tuesday = new ElementClass('p', openingHours.domEl, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr'),
  wednesday = new ElementClass('p', openingHours.domEl, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr'),
  thursday = new ElementClass('p', openingHours.domEl, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr'),
  friday = new ElementClass('p', openingHours.domEl, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr'),
  saturday = new ElementClass('p', openingHours.domEl, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr'),
  sunday = new ElementClass('p', openingHours.domEl, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr'),
  ]

page.childs = [
 

  
  

]


