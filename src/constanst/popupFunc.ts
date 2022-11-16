export const showPopUp = (value: { type: string, title: string }) => {
  const { type, title } = value
  const newShow = () => {
    let popUp = document.getElementById('popUp') as HTMLInputElement | null;
    if (type === 'error') {
      // ts-ingore


      if (popUp !== null) {
        popUp.classList.add('show-popup')
        popUp.style.backgroundColor = "#F93939";
      }

    }
    if (type === 'success') {
      if (popUp !== null) {
        popUp.classList.add('show-popup')
        popUp.style.backgroundColor = "#4CAF50";
      }

    }

    let popUpTitle = document.getElementById('popUp-title')

    if (popUpTitle !== null) {
      popUpTitle.innerHTML = title
    }



  }


  setTimeout(() => {
    hidePopUp()
  }, 3000)


  newShow()
}


export const hidePopUp = () => {
  const newShow = () => {
    let popUp = document.getElementById('popUp')
    if (popUp !== null) {
      popUp.classList.remove('show-popup')

    }



  }


  newShow()
}
