"use strict";
class Gallery {
    constructor(selector, staticPath, products) {
        this.items = [];
        this.selector = selector;
        this.staticPath = staticPath;
        if (products.length > 0) {
            products.forEach((product) => {
                product.image = this.staticPath + product.image;
                const item = new Item(product);
                this.items.push(item);
            });
        }
    }
    getBeaconElement() {
        return document.querySelector(this.selector);
    }
    getFullPath(item) {
        return this.staticPath + item.image;
    }
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
    generateGallery() {
        const gallery = this.getBeaconElement();
        if (gallery) {
            this.items.forEach(item => {
                gallery.insertAdjacentElement('beforeend', item.createElement());
                console.log(item);
            });
        }
        else {
            console.error('Wrong selector gallery');
        }
    }
}
