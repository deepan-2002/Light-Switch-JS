let imageContainer = document.getElementById('image-container')
let offBtn = document.getElementById('switchOff')
let onBtn = document.getElementById('switchOn')
onBtn.style.backgroundColor = 'green'
onBtn.style.cursor ='pointer'
offBtn.style.cursor ='not-allowed'

let switchOn = () => {
    imageContainer.innerHTML = `<div>
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png" alt="light on"
    width="100px">
</div>
<div>
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png" alt="cat in Light"
    width="350px">
</div>`
    onBtn.style.backgroundColor = 'white'
    offBtn.style.backgroundColor = 'red'
    offBtn.style.cursor ='pointer'
    onBtn.style.cursor ='not-allowed'
}

let switchOff = () => {
    imageContainer.innerHTML = `<div>
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png" alt="light off"
    width="100px">
</div>
<div>
    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png" alt="cat eyes"
    width="350px">
</div>`
    onBtn.style.backgroundColor = 'green'
    offBtn.style.backgroundColor = 'white'
    onBtn.style.cursor ='pointer'
    offBtn.style.cursor ='not-allowed'
}