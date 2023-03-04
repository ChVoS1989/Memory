const buttonSettings = document.querySelector('.gear')
const buttonSettingsClose = document.querySelector('.close')
const stylesSettings = document.querySelectorAll('.style')

const settingsOpen = () => {
    main.style.display = 'none';
    footer.style.display = 'none'
    settingsContainer.style.display = 'block'
}

const settingClose = () =>{
    main.style.display = 'grid';
    footer.style.display = 'flex'
    settingsContainer.style.display = 'none'
}

const changeStyle1 = () =>{
    //starting with this style
    const newStyleElementSibling = document.querySelector("link[href='style2.css']")
    console.log('changeStyle 1')
    if(newStyleElementSibling){
    newStyleElementSibling.remove()
    }
    console.log(newStyleElementSibling)
    stylesSettings[1].addEventListener('click', changeStyle2)
    stylesSettings[2].addEventListener('click', changeStyle3)
    stylesSettings[0].removeEventListener('click', changeStyle1)
}

const changeStyle2 = () =>{
    //switches to style 2
    const newStyleElementSibling = document.querySelector("link[href='style.css']")
    const newStyle = document.createElement('link')
    newStyle.setAttribute('rel', 'stylesheet')
    newStyle.setAttribute('href', 'style2.css')
    console.log('changeStyle 2')
    newStyleElementSibling.append(newStyle)
    console.log(newStyleElementSibling)
    stylesSettings[1].removeEventListener('click', changeStyle2)
    stylesSettings[0].addEventListener('click', changeStyle1)
}

const changeStyle3 = () =>{
    console.log('changeStyle 3')
    //switching to style 3
}

//add Listeners in Settings
buttonSettings.addEventListener('click', settingsOpen)
buttonSettingsClose.addEventListener('click', settingClose)
stylesSettings[0].addEventListener('click', changeStyle1)
stylesSettings[1].addEventListener('click', changeStyle2)
stylesSettings[2].addEventListener('click', changeStyle3)

