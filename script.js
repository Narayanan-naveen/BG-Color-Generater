let container = document.getElementById('container')
let colorval = document.getElementById('color-val')
let btn = document.getElementById('btn')
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.onclick = () => {
    let hexvalue = '#'
    for (i = 1; i <= 6; i++) {
        hexvalue += randomIndex()
        container.style.backgroundColor = hexvalue
        colorval.innerText = hexvalue
    }
    function randomIndex() {
        let random = Math.floor(Math.random() * 16)
        return hex[random]
    }
}