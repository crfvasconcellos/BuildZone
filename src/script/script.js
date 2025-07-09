const apiKeyinput = document.getElementById('apiKey')
const gameselect = document.getElementById('gameselect')
const questioninput= document.getElementById('questioninput')
const askButton = document.getElementById('askbutton')
const aiResponse= document.getElementById('aiResponse')
const form= document.getElementById('form')

form.addEventListener('submit',(event) => {
    event.preventDefault() 
    console.log(event)
} )