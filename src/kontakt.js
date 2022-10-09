import {ElementClass, page} from './index.js'

// first reset the page content with empty textconent and then
// use the imported element class to create the elements for the kontakt page content
let kontaktPageContent= function(){
page.domEl.textContent='' 
const openingHours = new ElementClass('div', page, 'opening-hours', ) 
const openingTitle = new ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')
const monday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')
const tuesday = new ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')
const wednesday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr')
const thursday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr')
const friday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr')
const saturday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr')
const sunday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr')
}

// export the kontakt page content
export {kontaktPageContent}
