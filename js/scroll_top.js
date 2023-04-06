const btnTop = document.createElement('div')
btnTop.id = 'scroll-top'
btnTop.innerHTML = '<i class="fa fa-angle-double-up" aria-hidden="true"></i>'
document.body.appendChild(btnTop)

btnTop.addEventListener('click', scrollWindowToTop)
window.addEventListener('scroll', showScrollButton)

//появление и исчезновение кнопки
function showScrollButton() {
    if (window.scrollY > 500) {
        btnTop.style.animation = 'appearance 1s forwards' 
        btnTop.style.pointerEvents = 'all'   
    } else if (getComputedStyle(btnTop).getPropertyValue('opacity') == '1') {
        btnTop.style.animation = 'disappearance 1s forwards'
        btnTop.style.pointerEvents = 'none' 
    }  
}

//плавный скролл до верха
function scrollWindowToTop() {
    let coffScroll = 10
    let start = setInterval(() => {
        if (window.scrollY > 0) {
            coffScroll += 0.7
            document.documentElement.scrollTop = window.scrollY - coffScroll
        }
        else clearInterval(start)
    }, 1)
}