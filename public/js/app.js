
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch(`/weather?address=${location}`) // before deployed -> localhost:3000/weather?address=${location}
        .then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    messageOne.textContent = data.error
                }else {
                    
                   messageOne.textContent = data.location
                   messageTwo.textContent = data.forecast
                   messageThree.textContent = data.humidity

                }
            })
    })

    e.preventDefault()
})
    
