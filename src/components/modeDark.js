const root = document.getElementById('root')
let active

const modeDark = (e) => {
    const menu = document.getElementById('menu')
    const item1 = document.querySelector('.item1')
    const item2 = document.querySelector('.item2')
    const item3 = document.querySelector('.item3')
    const item4 = document.querySelector('.item4')
    const footer = document.querySelector('.footer')
    const paragraphFooter = document.querySelector('.paragraph-footer')
    const LogIn = document.querySelector('.checkIn-container')
    const titleLogIn = document.querySelector('.title-logIn')
    const lbl1 = document.querySelector('.lbl-email')
    const lbl2 = document.querySelector('.lbl-password')
    const lbl3 = document.querySelector('.lbl-name')
    const themeContainer = document.querySelector('.grid-item2')
    const paragraphLyrics = document.querySelector('.paragraph-lyrics')
    const paragraphSentence = document.querySelector('.paragraph-sentence')
    const lanzamiento = document.querySelector('.lanzamiento')
    const artista = document.querySelector('.artista')
    const musica = document.querySelector('.musica')
    const verse = document.querySelector('.title-verse')
    const musics = document.querySelector('.title-theme__play')
    const titleSentence = document.querySelector('.title-sentence')
    const li1 = document.querySelector('.li1')
    const li2 = document.querySelector('.li2')
    const li3 = document.querySelector('.li3')
    const itemColor = document.getElementById('itemColor')
    
    if(!active){
        localStorage.setItem("theme", "dark")
        active = true
    }else{
        localStorage.setItem("theme", "light")
        active = false
    }

    if(active){
        root.classList.add('MainActive')
        menu.classList.add('MenuActive')
        item1.classList.add('color-black')
        item2.classList.add('color-black')
        item3.classList.add('color-black')
        item4.classList.add('color-black')
        footer.classList.add('footerActive')
        paragraphFooter.classList.add('color-black')
        LogIn ? LogIn.classList.add('logIn') : console.log("no ta");
        titleLogIn ? titleLogIn.classList.add('color-black') : console.log()
        lbl1 ? lbl1.classList.add('color-black') : console.log() 
        lbl2 ? lbl2.classList.add('color-black') : console.log() 
        lbl3 ? lbl3.classList.add('color-black') : console.log() 
        themeContainer ? themeContainer.classList.add('themeContainerBack') : console.log()
        paragraphLyrics ? paragraphLyrics.classList.add('color-black') : console.log()
        paragraphSentence ? paragraphSentence.classList.add('color-black') : console.log()
        lanzamiento ? lanzamiento.classList.add('color-black') : console.log()
        artista ? artista.classList.add('color-black') : console.log()
        musica ? musica.classList.add('color-black') : console.log()
        verse ? verse.classList.add('color-black') : console.log()
        musics ? musics.classList.add('color-black') : console.log()
        titleSentence ? titleSentence.classList.add('color-black') : console.log()
        li1 ? li1.style.color = "black" : console.log()
        li2 ? li2.style.color = "black" : console.log()
        li3 ? li3.style.color = "black" : console.log()
        itemColor.classList.add('Active')

    }else{
        root.classList.remove('MainActive')
        menu.classList.remove('MenuActive')
        item1.classList.remove('color-black')
        item2.classList.remove('color-black')
        item3.classList.remove('color-black')
        item4.classList.remove('color-black')
        footer.classList.remove('footerActive')
        paragraphFooter.classList.remove('color-black')
        LogIn ? LogIn.classList.remove('logIn') : console.log("no ta");
        titleLogIn ? titleLogIn.classList.remove('color-black') : console.log()
        lbl1 ? lbl1.classList.remove('color-black') : console.log() 
        lbl2 ? lbl2.classList.remove('color-black') : console.log() 
        lbl3 ? lbl3.classList.remove('color-black') : console.log() 
        themeContainer ? themeContainer.classList.remove('themeContainerBack') : console.log()
        paragraphLyrics ? paragraphLyrics.classList.remove('color-black') : console.log()
        paragraphSentence ? paragraphSentence.classList.remove('color-black') : console.log()
        lanzamiento ? lanzamiento.classList.remove('color-black') : console.log()
        artista ? artista.classList.remove('color-black') : console.log()
        musica ? musica.classList.remove('color-black') : console.log()
        verse ? verse.classList.remove('color-black') : console.log()
        musics ? musics.classList.remove('color-black') : console.log()
        titleSentence ? titleSentence.classList.remove('color-black') : console.log()
        li1 ? li1.style.color = "white" : console.log()
        li2 ? li2.style.color = "white" : console.log()
        li3 ? li3.style.color = "white" : console.log()
        itemColor.classList.remove('Active')
    }
}
export default modeDark
