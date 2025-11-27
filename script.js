const label = document.querySelector('#email-label')
const input = document.querySelector('#email')

input.addEventListener('focus', () => {
    label.style = 'top: -10px'
    console.log(input.value)
})

input.addEventListener('blur', () => {
    if(input.value == ""){
        label.style = 'top: 1px'
    }
})

//teste