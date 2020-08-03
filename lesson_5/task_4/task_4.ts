const prodList = [
    {
        title: 'product 1',
        picture: 'https://via.placeholder.com/150',
        desc: 'Ggawdsdfsd1111mas dnm,n smd ndsnmbnm nmds '
    },
    {
        title: 'product 2',
        picture: 'https://via.placeholder.com/150',
        desc: 'Ggsdfwadsdm2222as dnm,n smd ndsnmbnm nmds '
    },
    {
        title: 'product 3',
        picture: 'https://via.placeholder.com/150',
        desc: 'Ggsdfwadsdm2222as dnm,n smd ndsnmbnm nmds '
    }
]

const container = document.querySelector('#products-container')

if (container) {
    prodList.forEach(product => {
        container.insertAdjacentHTML('beforeend',
            `<div class="product col-2 text-center">
                    <h3 class="title">${product.title}</h3>
                    <img src="${product.picture}" class="image img-fluid" alt="${product.title} picture">
                    <p class="description">${product.desc}</p>
                    <button class="btn btn-primary mt-3">Подробности</button>
                  </div>
                  `)
    })
}

const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => {
    if (btn.parentElement) {
        const img = btn.parentElement.querySelector('img')
        const desc = btn.parentElement.querySelector('p')
        if (img && desc) {
            btn.addEventListener('click', function () {
                img.style.display = img.style.display === 'none' ? 'inline-flex' : 'none'
                desc.style.display = desc.style.display === 'block' ? 'none' : 'block'
            })
        }
    }
})
