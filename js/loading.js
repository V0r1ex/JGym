const loaderInner = '<div id="spinner"></div><div class="dark"></div>'
const loader = document.createElement('div')
loader.className = 'loader'
loader.innerHTML = loaderInner
document.body.appendChild(loader)

window.onload = () => {
    document.querySelector('.dark').style.opacity = '0'
    document.querySelector('.loader').style.display = 'none'
}
