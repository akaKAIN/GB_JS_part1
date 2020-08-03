"use strict";
/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
свойству highlighted значение true.
 */
class Post {
    constructor(author, text = '', date = new Date()) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText) {
        this.text = newText;
    }
}
class AttachedPost extends Post {
    constructor() {
        super(...arguments);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
const ap = new AttachedPost('Shacker');
console.log(ap);
ap.makeTextHighlighted();
ap.edit('New text');
console.log(ap);
