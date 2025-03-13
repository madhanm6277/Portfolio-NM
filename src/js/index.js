
let isDarkTheme = false;

window.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

function loadDarkTheme() {

    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('dark-theme');
    const icons = {
        'sun': './assets/icons/sun.png',
        'moon': './assets/icons/moon.png'
    }
    const imgElement = document.querySelector('.theme-icon');


    if (isDarkTheme) {
        imgElement.setAttribute('src', icons.moon)
        
        
    }
    else {
        imgElement.setAttribute('src', icons.sun);
    }
    isDarkTheme = !isDarkTheme;


}

const downloadResume = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;

    link.donwload = filename || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
