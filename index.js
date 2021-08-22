function appendImageElement (keyword, index) {
    const imageElement = document.createElement('img')
    imageElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`

    const galleryElement = document.querySelector('.gallery')
    galleryElement.appendChild(imageElement)
}

function removePhoto() {
    const galleryElement = document.querySelector('.gallery')
    galleryElement.innerHTML = ''
}

function searchPhoto(event) {
    const keyword = event.target.value

    if (event.key === 'Enter' && keyword) {
        removePhoto()

        for(let i = 1; i <= 9; i++) {
            appendImageElement(keyword, i)
        }    
    }
}

function run() {
    const inputElement = document.querySelector('input')
    inputElement.addEventListener('keydown', searchPhoto)
}

run()