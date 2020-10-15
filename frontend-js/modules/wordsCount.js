import Countable from "countable"

export default class wordsCount {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.body = document.querySelector("#post-body")
    this.viewPost = document.querySelector('#post-view')
    this.post = document.querySelector('.words-count-post')
    this.counterCtn = document.querySelector(".words-counter-ctn")
    this.body.addEventListener('keyup' ,() => {
        Countable.count(this.body, counter => {
            
            this.counterCtn.innerHTML = `Words: <strong>${counter.words}</strong> &nbsp  Sentences: <strong>${counter.sentences}</strong> &nbsp Paragraphs: <strong>${counter.paragraphs}</strong> &nbsp Characters: <strong>${counter.characters}</strong>`
            console.log(counter)
        })
    })
    Countable.on(this.viewPost, counter => {
        console.log(counter)
        this.post.innerHTML =  `Words: <strong>${counter.words}</strong> &nbsp  Sentences: <strong>${counter.sentences}</strong> &nbsp Paragraphs: <strong>${counter.paragraphs}</strong> &nbsp Characters: <strong>${counter.characters}</strong>`
    })
    
  }
}