const list = () => {
    const items = [];

    return Object.freeze({
        addItem: (item) => items.push(item),
        getItems: () => items
    })
}

const list2 = list();
list2.addItem("123123")
list2.addItem("abc")
console.log(list2.getItems())