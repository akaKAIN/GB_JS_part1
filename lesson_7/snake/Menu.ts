class Menu extends BaseElement{
    readonly boardSelector: string;
    constructor(boardSelector: string) {
        super();
        this.boardSelector = boardSelector
        this.init()
    }

    init(){
        this.createMenu()
    }

    createMenu() {
        const board = document.querySelector(this.boardSelector)

        const menu = this.getCreatedElement('div')
        menu.classList.add('text-center', 'px-5', 'py-5')
        const startBtn = this.getCreatedElement('button')
        startBtn.innerHTML = 'START'
        startBtn.classList.add('btn', 'btn-info', 'mx-5', 'start')
        const stopBtn = this.getCreatedElement('button')
        stopBtn.innerHTML = 'STOP'
        stopBtn.classList.add('btn', 'btn-info', 'mx-5', 'stop')
        const restartBtn = this.getCreatedElement('button')
        restartBtn.innerHTML = 'RESTART'
        restartBtn.classList.add('btn', 'btn-info', 'mx-5', 'restart')

        menu.appendChild(startBtn)
        menu.appendChild(stopBtn)
        menu.appendChild(restartBtn)
        board?.insertAdjacentElement("afterend", menu)
    }
}
