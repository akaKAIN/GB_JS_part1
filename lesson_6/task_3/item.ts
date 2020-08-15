interface IItem {
    id: number;
    title: string;
    count: number;
    price: number;
    image: string;
}

class Item {
    id: number;
    title: string;
    image: string;
    price: number;
    count: number;


    constructor(item: IItem) {
        this.id = item.id;
        this.title = item.title;
        this.image = item.image;
        this.price = item.price;
        this.count = item.count;
    }

    decrementCount(): Error | null {
        if (this.count === 0) {
            return  new Error('No item on store')
        } else {
            this.count--
            return null
        }
    }

    createElement(): Element {
        const image = document.createElement('img');
        image.setAttribute('src', this.image);
        image.setAttribute('alt', this.title);
        image.classList.add('item-image', 'i');

        const item = document.createElement('div');
        item.setAttribute('data-count', this.count.toString());
        item.setAttribute('data-price', this.price.toString());
        item.setAttribute('data-id', this.id.toString());
        item.classList.add('item', 'col-6', 'col-md-4', 'col-lg-3');

        const title = document.createElement('h3');
        title.innerText = this.title;
        title.classList.add('title');

        const btn = document.createElement('button')
        btn.setAttribute('data-id', this.id.toString())
        btn.classList.add('btn', 'btn-info', 'mt-3')
        btn.innerText = 'Add to basket'

        item.insertAdjacentElement('afterbegin', title);
        item.insertAdjacentElement('beforeend', image);
        item.insertAdjacentElement("beforeend", btn);
        return item;
    }
}

// const item = new Item(1, 'bread', './image.png', 200, 2);
// console.log(item.createElement());
