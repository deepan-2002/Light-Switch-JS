let imageContainer = document.getElementById('image-container')
let offBtn = document.getElementById('switchOff')
let onBtn = document.getElementById('switchOn')
onBtn.style.backgroundColor = 'green'
onBtn.style.cursor ='pointer'
offBtn.style.cursor ='not-allowed'

let text = document.querySelector('h3')

let switchOn = () => {
    imageContainer.innerHTML = `<div id="image-container">
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png" alt="light on"
    class="light">
</div>
<div>
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png" alt="cat in Light"
    class="cat">
</div>`
    onBtn.style.backgroundColor = 'white'
    offBtn.style.backgroundColor = 'red'
    offBtn.style.cursor ='pointer'
    onBtn.style.cursor ='not-allowed'
    text.textContent = 'SWITCHED ON'
}

let switchOff = () => {
    imageContainer.innerHTML = `<div id="image-container">
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png" alt="light off"
    class="light">
</div>
<div>
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png" alt="cat eyes"
    class="cat">
</div>`
    onBtn.style.backgroundColor = 'green'
    offBtn.style.backgroundColor = 'white'
    onBtn.style.cursor ='pointer'
    offBtn.style.cursor ='not-allowed'
    text.textContent = 'SWITCHED OFF'
}