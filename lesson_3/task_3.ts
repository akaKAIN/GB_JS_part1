/*
3.3 Выведите в консоль значения, указанные рядом с комментариями:
 */

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {}
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {}
        },
    ]
};
console.log('\nЗадание №3')
console.log(post.author);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
