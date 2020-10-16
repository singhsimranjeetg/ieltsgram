import Search from './modules/search'
import Chat from './modules/chat'
import RegistrationForm from './modules/registrationForm'
import wordsCount from './modules/wordsCount'

if (document.querySelector("#registration-form")) {
  new RegistrationForm()
}

if (document.querySelector("#chat-wrapper")) {
  new Chat()
}
if (document.querySelector(".header-search-icon")) {new Search()}


if (document.querySelector('#post-body') || document.querySelector('#abcdefg') )   {
    new wordsCount()
}


