export const popType = {
  success: 'Successful',
  error: 'error',
}
export const showPopUp = (value: { type: string, message: string }) => {
  const { type, message } = value
  const newShow = () => {
    let popUp = document.getElementById('popUp') as HTMLInputElement | null;
    let errorIcon = document.getElementById('popUp-error-icon') as HTMLInputElement | null;
    let successIcon = document.getElementById('popUp-success-icon') as HTMLInputElement | null;
    if (type === 'error') {
      // ts-ingore


      if (popUp !== null) {
        popUp.classList.add('show-popup')
        popUp.style.borderColor = "#EB5757";
        if (errorIcon !== null) {
          errorIcon.style.display = "block";
        }
        if (successIcon !== null) {
          successIcon.style.display = "none";
        }

      }

    }
    if (type === 'Successful') {
      if (popUp !== null) {
        popUp.classList.add('show-popup')
        popUp.style.borderColor = "#6FCF97";

        if (errorIcon !== null) {
          errorIcon.style.display = "none";
        }
        if (successIcon !== null) {
          successIcon.style.display = "block";
        }
      }

    }

    let popUpTitle = document.getElementById('popUp-title')
    let popUpMessage = document.getElementById('popUp-message')

    if (popUpTitle !== null) {
      popUpTitle.innerHTML = type
    }
    if (popUpMessage !== null) {
      popUpMessage.innerHTML = message
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
