class Slider {
    mainImage: Element;
    body: NodeListOf<HTMLImageElement>;
    beacon: string;

    constructor(beacon: string, products: NodeListOf<HTMLImageElement>) {
        this.beacon = beacon;
        this.body = products;
        const mainImage = products[0]
        mainImage.classList.add('example')
        this.mainImage = mainImage
        this.createSlider();
        this.setListeners()
    }

    setListeners(): void {
        const previous = document.querySelector('.arrow-left')
        const next = document.querySelector('.arrow-right')
        if (previous && next) {
            previous.addEventListener('click', this.previousImage.bind(this))
            next.addEventListener('click', this.nextImage.bind(this))
        }

    }

    /**
     * Метод присваивает переменой класса mainImage следующий элемент массива
     * в переменную body или нулевой, если массив закончился.
     */
    nextImage(): void {
        const index = this.getCurrentPictureIndex()
        if (index === -1 || index === null) {
            return
        }
        const validIndex = index === this.body.length - 1 ? 0 : index + 1
        this.mainImage = this.body[validIndex]
        this.refreshSliderMainPicture()
    }

    /**
     * Метод присваивает переменой класса mainImage предыдущий элемент массива
     * в переменную body или последний, если массив закончился.
     */
    previousImage(): void {
        const index = this.getCurrentPictureIndex()
        if (index === -1 || index === null) {
            return
        }
        const validIndex = index === 0 ? this.body.length - 1 : index - 1
        this.mainImage = this.body[validIndex]
        this.refreshSliderMainPicture()
    }

    /**
     * Метод построения DOM-структуры слайдера
     */
    createSlider() {
        const navigation = `<div class="navigation">
                              <div class="arrow arrow-left">
                                <i class="fas fa-angle-left"></i>
                              </div>
                              <div class="arrow arrow-right">
                                <i class="fas fa-angle-right"></i>
                              </div>
                            </div>`
        const slider = document.querySelector(this.beacon)

        const container = document.createElement('div')
        container.classList.add('container', 'position-relative')

        const figure = document.createElement('figure')
        figure.classList.add('img-wrapper')
        figure.insertAdjacentElement('afterbegin', this.mainImage)

        container.insertAdjacentElement('afterbegin', figure)
        container.insertAdjacentHTML('beforeend', navigation)

        if (slider) {
            slider.insertAdjacentElement('afterbegin', container)
        }
    }
    /**
     * Метод возвращает индекс текущего изображения в хранящемся NodeList
     * @return index {number | null}
     */
    getCurrentPictureIndex(): number | null {
        const indexStr = this.mainImage.getAttribute('data-ind')
        if (indexStr === null || isNaN(Number(indexStr))) {
            return null;
        }
        return Number(indexStr)
    }

    refreshSliderMainPicture(): void {
        const figure = document.querySelector('.img-wrapper')
        if (figure === null) {
            return;
        }
        const oldImage = figure.querySelector('.example')
        if (oldImage === null) {
            return;
        }
        oldImage.remove();
        const newImage = this.mainImage;
        newImage.classList.add('example')
        figure.insertAdjacentElement('afterbegin', newImage)
    }
}
