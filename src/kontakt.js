import {ElementClass, page} from './index.js'
import githublogo from './logos/githublogo.png'

// first reset the page content with empty textconent and then
// use the imported element class to create the elements for the kontakt page content
let kontaktPageContent= function(){
page.domEl.textContent='' 
const contactContainer = new ElementClass('div', page, 'contact-container')
const contactTitle = new ElementClass('h2', contactContainer, 'contact-title', 'Contact me')
const contactPerson = new ElementClass('div', contactContainer, 'contact-person', 'Özer Kip')
const contactMailCont = new ElementClass('div', contactContainer, 'contact-mail-cont')
const contactMail = new ElementClass('a', contactMailCont, 'contact-mail', 'ozerkip@hotmail.de')
contactMail.domEl.href ='mailto:ozerkip@hotmail.de'
const contactGitHubCont = new ElementClass('div', contactContainer, 'contact-github-cont')
const contactGitHubLink = new ElementClass('a', contactGitHubCont, 'contact-github-link')
contactGitHubLink.domEl.href = 'https://github.com/rezokip'
const contactGitHubLogo = new ElementClass('img', contactGitHubLink, 'contact-github-log')
contactGitHubLogo.domEl.src=githublogo
}

// export the kontakt page content
export {kontaktPageContent}
