import Countable from "countable"

export default class wordsCount {
  // 1. Select DOM elements, and keep track of any useful data



  constructor() {
    
    this.counterCtn = document.querySelector(".words-counter-ctn")
    this.body = document.querySelector("#post-body")

    this.post = document.querySelector('.words-count-post')
    this.postView = document.getElementById('abcdefg')

    if (this.body != null) {
        this.events();

    }

    if (this.postView != null) {
        Countable.count(this.postView, counter => {
        console.log(counter)
        this.post.innerHTML = `Words: <strong>${counter.words}</strong>`
        })

    }

 
  }

//events
events() {
    this.body.addEventListener('keyup', () => this.createPostCount())
  

}
  

//methods
  createPostCount() {
      Countable.count(this.body, (counter) => {
          this.counterCtn.innerHTML = `Words: <strong>${counter.words}</strong> &nbsp  Sentences: <strong>${counter.sentences}</strong> &nbsp Paragraphs: <strong>${counter.paragraphs}</strong> &nbsp Characters: <strong>${counter.characters}</strong>`
      })
  }

}