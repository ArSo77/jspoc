
const p = new Promise((resolve, reject) => {
    resolve(10)
})


p.then(response => {
    console.log(response)
})


// async function loadImages() {
//     try{
//         const image = await loadImageAsync(url);
//         document.querySelector('.image').appendChild(image)

//     } catch(err) {
//         console.log(Error(err))
//     }
// }