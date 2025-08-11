import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';


export class Quiz extends LitElement{
    static properties = {
        selected: {},
        curRightText: {},
        curQuestion: {}
    }

    numQuestions = 0
    questions = []

    static styles = css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 16px;
      }

      #actions {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        font-weight: 600;
        margin-top: 10px;
      }

      #actions button {
        border: none;
        background: none;
        box-shadow: 0 0 4px #18181b;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        color: #18181b;
      }

      #actions button:hover {
        background: whitesmoke;
      }

      #actions button:active {
        background: #f1f1f1;
      }

      #actions button:disabled {
        color: gray;
        background: white;
        cursor: default;
      }
      
    `

    constructor(){
        super();

        this.curRightText = "Submit"

        for (let question of document.querySelectorAll("quiz-mc-question")){
            this.questions.push(question)
            question.addEventListener("selection", (e) => {
                this.curRightText = "Submit"
            })
        }

        this.curQuestion = 1

        this.numQuestions = this.questions.length

    }

    render(){
        this.displayQuestion(this.curQuestion)
        return html`
            <div id="questions">
                <slot></slot>
            </div>
            <div id="actions">
                <button id="previous" ?disabled="${this.curQuestion === 1}" @click=${this.previous}>Previous</button>
                <div id="info">Question ${this.curQuestion} of ${this.numQuestions} </div>
                <button id="next" ?disabled="${this.curQuestion === this.numQuestions && this.getQuestion(this.curQuestion).done}" @click=${this.submitOrNext}>${this.curRightText}</button>
            </div>
        `
    }

    getQuestion(index){
        return this.questions[index- 1]
    }

    submitOrNext(){
        if (this.getQuestion(this.curQuestion).done){ // Next button
            this.next()
        }else{ // Submit Button
            this.submit()
        }
    }

    displayQuestion(index){
        this.curQuestion = index
        for (let i = 1; i <= this.numQuestions; i++){
            if (i !== index){
                this.getQuestion(i).hide()
            }else{
                this.getQuestion(i).show()
            }
        }
    }

    submit(){
        let question = this.getQuestion(this.curQuestion)
        question.submit()

        if (question.done){
            this.curRightText = "Next"
        }

        if (question.done && this.curQuestion === this.numQuestions){
            celebration()
        }
    }

    previous(){
        this.displayQuestion(this.curQuestion - 1)
        this.curRightText = "Next"
        this.getQuestion(this.curQuestion).revealAll()
    }

    next(){
        this.displayQuestion(this.curQuestion + 1)
        this.curRightText = "Submit"
    }
}

export class QuizMultipleChoiceQuestion extends LitElement{
    static properties = {
        selected: {},
        done: {},
        hidden: {reflect: true, type: Boolean}
    }

    static styles = css`
      :host{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      
      :host([hidden]){
        display: none;
      }
    `

    constructor(){
        super();
        this.selected = undefined
        this.done = false;
        this.hidden = false;

        this.addEventListener("click", this.select)

        for (let option of this.querySelectorAll("quiz-option")) {
            this.options.push(option)
        }
    }

    options = []

    render(){

        let curIdentifier = 1

        for (let option of this.options){
            if (!option.getAttribute("identifier")){
                option.setAttribute("identifier", curIdentifier)
                curIdentifier++
            }
        }

        return html`
            <slot></slot>
        `
    }

    select(e){
        let target = e.target.closest("quiz-option")
        if (!target){
            return;
        }

        let curCounter = 0;
        let same = false
        for (let option of this.options){
            option.removeAttribute("reveal")
            if (option.getAttribute("selected")){

                if (option === target){
                    same = true
                }

                option.removeAttribute("selected")
            }
            if (option === target){
                target.setAttribute("selected", "true")
                this.selected = curCounter
            }
            curCounter++
        }
        if (!same){
            this.dispatchEvent(new CustomEvent('selection', {}))
            this.done = false
        }
    }

    getOption(index){
        return this.options[index]
    }

    submit(){
        if (this.selected === undefined){
            return
        }

        if (this.getOption(this.selected).correct){
            this.done = true
            for (let option of this.options){
                option.revealOption()
            }
        }else{
            this.getOption(this.selected).revealOption()
        }
    }

    hide(){
        this.setAttribute("hidden", true)
    }

    show(){
        this.removeAttribute("hidden")
    }

    revealAll(){
        this.done = true
        for (let option of this.options){
            option.revealOption()
        }
    }
}

export class QuizMCOption extends LitElement{
    static properties = {
        selected: {type: Boolean, reflect: true},
        correct: {type: Boolean, reflect: true},
        reveal: {type: Boolean, reflect: true},
        identifier: {type: String, reflect: true}
    }

    static styles = css`
        :host(:not([reveal])) ::slotted(quiz-explanation) {
            display: none;
        }
      :host{
        background: whitesmoke;
        padding: 15px;
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
      }
      
      #identifier{
        border: 1px solid black;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        min-width: 25px;
      }
      
      :host([selected]) #identifier{
        background: #1f2937;
        color: #f9fafb;
      }
      
      :host([reveal][correct]) #identifier{
        background: #16a34a;
        color: #f9fafb;
      }

      :host([reveal]:not([correct])) #identifier{
        background: #f43f5e;
        color: #f9fafb;
      }
      

      
      #content{
        display: flex;
        flex-direction: column;
      }

      ::slotted(quiz-explanation){
        color: #3f3f46;
        font-size: 80%;
      }
      
      ::slotted(img){
        max-width: 100%;
      }
    `

    constructor(){
        super()
        this.selected = false
        this.correct = false
        this.reveal = false
        this.identifier = ""

    }

    render(){
        return html`<div id="identifier">${this.identifier}</div><div id="content"><slot></slot></div>`
    }

    revealOption(){
        this.reveal = true
    }
}

customElements.define("content-quiz", Quiz)
customElements.define("quiz-mc-question", QuizMultipleChoiceQuestion)
customElements.define("quiz-option", QuizMCOption)

let celebration = () => {
    let emojis = ['⚙️', '🤖', '🧠', '🔧', '💡', '✨']

    let shapes = emojis.map((x)=>{
        return confetti.shapeFromText({ text: x, scalar: 10 });
    })


    let count = 200;
    let defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}
