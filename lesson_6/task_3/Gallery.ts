class Gallery {
    items: Item[] = [];
    selector: string;
    staticPath: string;

    constructor(selector: string, staticPath: string, products: IItem[]) {
        this.selector = selector
        this.staticPath = staticPath
        if (products.length > 0) {
            products.forEach((product) => {
                product.image = this.staticPath + product.image
                const item = new Item(product)
                this.items.push(item)
            })
        }
    }
    getBeaconElement(): Element | null {
        return document.querySelector(this.selector)
    }

    getFullPath(item: Item): string {
        return this.staticPath + item.image
    }

    getItemById(id: number): Item | undefined {
        return this.items.find(item => item.id === id)
    }

    generateGallery() {
        const gallery = this.getBeaconElement()
        if (gallery) {
            this.items.forEach( item => {
                gallery.insertAdjacentElement('beforeend', item.createElement())
                console.log(item)
            })
        } else {
            console.error('Wrong selector gallery')
        }
    }


}
