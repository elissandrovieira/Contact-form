let form = document.querySelector('#contact-form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    let verifyError = false

    let inputName = document.forms['contact-form']['name']
    if(!inputName.value){
        verifyError = true
        inputName.classList.add('error')
        
        let errorTag = inputName.nextSibling.nextSibling
        errorTag.innerText = 'Type your name correctly!'
    }else{
        inputName.classList.remove('error')
        
        let errorTag = inputName.nextSibling.nextSibling
        errorTag.innerText = ''
    }



    let inputEmail = document.forms['contact-form']['email']
    if(!inputEmail.value){
        verifyError = true
        inputEmail.classList.add('error')
        
        let errorTag = inputEmail.nextSibling.nextSibling
        errorTag.innerText = 'Type your E-mail correctly!'
    }else{
        inputEmail.classList.remove('error')
        
        let errorTag = inputEmail.nextSibling.nextSibling
        errorTag.innerText = ''
    }

    
    let inputPhone = document.forms['contact-form']['phone']
    if(!inputPhone.value){
        verifyError = true
        inputPhone.classList.add('error')
        
        let errorTag = inputPhone.nextSibling.nextSibling
        errorTag.innerText = 'Type your phone correctly!'
    }else{
        inputPhone.classList.remove('error')
        
        let errorTag = inputPhone.nextSibling.nextSibling
        errorTag.innerText = ''
    }


    let inputMessage = document.forms['contact-form']['message']
    if(!inputMessage.value){
        verifyError = true
        inputMessage.classList.add('error')
        
        let errorTag = inputMessage.nextSibling.nextSibling
        errorTag.innerText = 'Tell us something!'
    }else{
        inputMessage.classList.remove('error')
        
        let errorTag = inputMessage.nextSibling.nextSibling
        errorTag.innerText = ''
    }

    if(!verifyError){
        form.submit()
    }

})