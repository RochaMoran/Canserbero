const darkModeLogIn = (mode, useEffect, setMode) =>{
    const checkIn = document.querySelector('.checkIn-container')

   if(mode){
       checkIn.classList.add('logIn')

       useEffect( () => {
           setMode( mode = false)
       })

   }else{
        checkIn.classList.remove('logIn')

       useEffect( () => {
           setMode( mode = true)
       })   
   }
}
export default darkModeLogIn