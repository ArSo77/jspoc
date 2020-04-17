console.log("debounce")


const button = document.getElementById("debounce");
console.log(button)

debun = debfun()

button.addEventListener('click', () => {
    debun()
})





function debfun() {
    let timer = null
    function debin() {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            console.log("------------")
        }, 500)
    }
    return debin
}
