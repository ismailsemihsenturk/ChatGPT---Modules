const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')
let imgDom = document.getElementById('generatedImg')

const showImage = (url) => {
    imgDom.src = url;
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(form)

    const response = await fetch('http://localhost:5000/image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: data.get('prompt')
        })
    })

    if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot
        showImage(parsedData)

    } else {
        const err = await response.text()
        alert(err)
    }
}

form.addEventListener('submit', handleSubmit)
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e)
    }
})