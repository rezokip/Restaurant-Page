
function createNewElement (element, className, text) {
  let newElement = document.createElement(element)
  if(className){newElement.classList.add(className)}
  if(text){newElement.textContent=text}
  return newElement
}




const contentEl = document.querySelector('#content')
let headerEl= createNewElement('div', 'header')
let pageEl = createNewElement('div', 'page')

contentEl.append(headerEl, pageEl)

let kontaktEl = createNewElement('div', 'kontakt', 'KONTAKT')
let menuEl= createNewElement('div', 'menu', 'MENU')
let homeEl= createNewElement('div', 'home', 'HOME')
headerEl.append(homeEl, menuEl, kontaktEl)








let description2El = createNewElement('div', 'description', )
let descriptionFirstP = createNewElement('p', 'description-first-p','Wir in Nürnberg, im herzen der Südstadt können auf eine über 10 Jährige Erfahrung zurückblicken. Unser Ziel ist es mit unserer langjährigen Erfahrung euch das beste und optimale Geschmackserlebnis zu bieten. Cigköfte reicht auf eine traditionelle Herkunft von mehreren hundert Jahren zurück. Es ist eine herzhafte Paste, die aus Bulgur (Weizen), Tomatenmark, Paprikamark, zahlreiche Gewürze, gemahlene Nüsse und weitere Bestandteile besteht. Diese natürlichen Zutaten bieten nicht zuletzt deshalb einen exzellenten Geschmack' )
let descriptionSecondP= createNewElement('p', 'description-secon-p', 'Bei uns in Nürnberg kannst du dir die türkische Spezialität im Dürüm oder Portionsweise mit frischem Salat, Lavashbrot und Soße schmecken lassen, wahlweise auch zum mitnehmen. Neben Cigköfte bieten wir selbstverständlich viele verschiedene Vegane Spezialitäten an. Unser Hausgemachtes, Veganes Käsekuchen ist das Highlight für Naschkatzen. Ob Veganer oder nicht Veganer lass dich von unseren köstlichen Speisen überzeugen.')
description2El.append(descriptionFirstP, descriptionSecondP)

pageEl.append(description2El)



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