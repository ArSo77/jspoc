console.log("debounce")


const button = document.getElementById("debounce");
console.log(button)

debun = debfun()

button.addEventListener('click', () => {
    debun()
    console.log("CLICK!")
})





function debfun() {
    let timer = null
    function debin() {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            console.log("--debounce--")
        }, 500)
    }
    return debin
}
