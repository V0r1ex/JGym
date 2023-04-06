const loc = window.location.href

let link
if(loc.includes('contact'))
    link = document.querySelector('ol a[href="contacts.html"]')
else if(loc.includes('about_us'))
    link = document.querySelector('ol a[href="about_us.html"]')
else if(loc.includes('home'))
    link = document.querySelector('ol a[href="home.html"]')
else if(loc.includes('classes'))
    link = document.querySelector('ol a[href="classes.html"]')
else if(loc.includes('news'))
    link = document.querySelector('ol a[href="news.html"]')

if (link) {
    link.firstChild.classList.add('bgc-yellow')
}
