import {ElementClass, page} from './index.js'

// first reset the page content with empty textconent and then
// use the Imported Element class to create the elements for the home page content
let homePageContent=function(){
  page.domEl.textContent=''
  const descriptionFirst = new ElementClass('p', page, 'description-first', 'Wir in Nürnberg, im herzen der Südstadt können auf eine über 10 Jährige Erfahrung zurückblicken. Unser Ziel ist es mit unserer langjährigen Erfahrung euch das beste und optimale Geschmackserlebnis zu bieten. Cigköfte reicht auf eine traditionelle Herkunft von mehreren hundert Jahren zurück. Es ist eine herzhafte Paste, die aus Bulgur (Weizen), Tomatenmark, Paprikamark, zahlreiche Gewürze, gemahlene Nüsse und weitere Bestandteile besteht. Diese natürlichen Zutaten bieten nicht zuletzt deshalb einen exzellenten Geschmack' )
  const descriptionSecond = new ElementClass('p', page, 'description-second','Bei uns kannst du dir die türkische Spezialität im Dürüm oder Portionsweise mit frischem Salat, Lavashbrot und unserer Hausgemachten Soße schmecken lassen, wahlweise auch zum mitnehmen. Neben Cigköfte bieten wir selbstverständlich viele verschiedene Vegane Spezialitäten an. Unser Hausgemachtes, Veganes Käsekuchen ist das Highlight für Naschkatzen. Ob Veganer oder nicht Veganer lass dich von unseren köstlichen Speisen überzeugen.') 
  
  const openingHours = new ElementClass('div', page, 'opening-hours', ) 
  const openingTitle = new ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')
  const monday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')
  const tuesday = new ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')
  const wednesday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr')
  const thursday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr')
  const friday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr')
  const saturday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr')
  const sunday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr')

  const location = new ElementClass('div', page, 'location')
  const locationTitle = new ElementClass('h2', location, 'location-title', 'SCHAUT VORBEI')
  const locationName = new ElementClass('p', location, 'location-name', 'Cigköftem Nürnberg')
  const locationAdress = new ElementClass('p', location, 'locatin-adress', 'Schweiggerstraße 3')
  const locationPostCode = new ElementClass('p', location, 'locatin-postcode', '90478 Nürnberg')
  const locationTel = new ElementClass('p', location, 'locatin-tel', 'Tel: 0911 99 44 91 55')
}  

// export the home page content
export {homePageContent}