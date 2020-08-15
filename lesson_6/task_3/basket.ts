class Basket {
    basket: Map<Item, number>;
    totalCost: number = 0;
    userName: string;
    refreshed: boolean;
    selector: string;
    isVisible: boolean = false;

    constructor(userName: string, selector: string) {
        this.userName = userName
        this.selector = selector
        this.basket = new Map<Item, number>()
        this.refreshed = true
        this.init()
    }

    init() {
        this.generateAndInsertBasket()
        const basket = this.getBasketElementApp()
        basket?.addEventListener('click', e => {
            if (e.target instanceof Element && e.target.tagName === 'BUTTON') {
                this.switcherBasketDisplay()
            }
        })
    }

    switchVisibility() {
        this.isVisible = !this.isVisible
    }

    add(item: Item, quantity: number = 1) {
        if (this.basket.has(item)) {
            const count = this.basket.get(item) || 0
            this.basket.set(item, count + quantity)
        } else {
            this.basket.set(item, quantity)
        }
        this.refreshed = false
        this.refreshBasketContainer()

    }
    del(item: Item, quantity: number = 1) {
        if (this.basket.has(item)) {
            const count = this.basket.get(item) || 0
            if (count - quantity > 0) {
                this.basket.set(item, count - quantity)
            } else {
                this.basket.delete(item)
            }
            this.refreshed = false
        }
        this.refreshBasketContainer()
    }

    getTotalCost(): number {
        let totalCost: number = 0;
        if (this.basket.size !== 0) {
            this.basket.forEach((count, item) => {
                totalCost += item.price * count
            })
            return totalCost
        } else {
            return 0
        }
    }

    refreshTotalCost() {
        if (!this.refreshed) {
            this.totalCost = this.getTotalCost()
            this.refreshed = true
        }
    }

    refreshBasketContainer() {
        this.cleanBasketContainer()
        this.refreshTotalCost()
        const basketContainer = this.generateBasketContainer()
        const basket = this.getBasketElementApp()
        basket?.insertAdjacentElement('beforeend', basketContainer)
    }

    getDelButton(item: Item): Element {
        const button = document.createElement('i')
        button.classList.add('fas', 'fa-trash-alt')                // Replace className for correct show
        button.setAttribute('data-id', item.id.toString())
        return button
    }

    generateBasketContainer(): Element {
        const emptyBasket = document.querySelector('.basket-empty')
        if (this.basket.size === 0 && emptyBasket === null) {
            const emptyBasket = document.createElement('div')
            emptyBasket.classList.add('basket', 'basket-empty')
            emptyBasket.innerText = 'no items in basket'
            return emptyBasket
        }

        if (emptyBasket) {
            console.log(emptyBasket)
            emptyBasket.remove()        }

        const basketContainer = document.createElement('div')
        basketContainer.classList.add('basket')
        if (!this.isVisible) {
            basketContainer.classList.add('d-none')
        }

        this.basket.forEach((count, item) => {
            const basketItem = document.createElement('div')
            basketItem.classList.add('basket-item')

            const title = document.createElement('span')
            title.classList.add('basket-title')
            title.innerText = item.title + ' x ' + count.toString() + ' = ' + (item.price * count).toString()

            const delBtn = this.getDelButton(item)
            basketItem.insertAdjacentElement('afterbegin', title)
            basketItem.insertAdjacentElement("beforeend", delBtn)
            basketContainer.insertAdjacentElement('beforeend', basketItem)
        })

        const total = document.createElement('div')
        total.classList.add('total')
        total.innerText = 'Total: ' + this.totalCost.toString()

        basketContainer.insertAdjacentElement('beforeend', total)
        return basketContainer
    }

    getBasketElementApp() {
        return document.querySelector(this.selector)
    }

    getBasketContainer(): Element | null {
        const basket = this.getBasketElementApp()
        if (basket) {
            return basket.querySelector('.basket')
        }
        return null
    }

    cleanBasketContainer() {
        const basket = this.getBasketElementApp()
        const basketContainer = this.getBasketContainer()
        if (basketContainer && basket) {
            basket.removeChild(basketContainer)
        }
    }

    generateAndInsertBasket(): void {
        this.cleanBasketContainer()
        const basket = this.getBasketElementApp()
        const button = `<button class="btn btn-light mt-4" onclick="this.switcherBasketDisplay">BASKET</button>`
        basket?.insertAdjacentHTML('afterbegin', button)

        const basketContainer = this.generateBasketContainer()
        if (!this.isVisible) {
            basketContainer.classList.add('d-none')
        }
        basket?.insertAdjacentElement('beforeend', basketContainer)
    }

    switcherBasketDisplay(): void {
        const basketContainer = this.getBasketContainer()
        if (basketContainer === null) {
            console.error('No basket DOM-element')
            return
        }
        if (basketContainer.classList.contains('d-none')) {
            basketContainer.classList.remove('d-none')
        } else {
            basketContainer.classList.add('d-none')
        }
        this.switchVisibility()
    }
}
