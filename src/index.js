function firstFetch() {
    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then((data) => {
            let ramenArray = data;
            ramenArray.forEach(addImages)
        })
}

function addImages(array) {
    let newImage = document.createElement('img')
    newImage.src = array.image
    newImage.addEventListener('click', (e) => { displayCard(array) })
    document.getElementById('ramen-menu').appendChild(newImage)
}

document.getElementById('new-ramen').addEventListener('submit', (e) => {
    // e.preventDefault()
    newRamen(e.target)
})

function newRamen(target) {
    // document.querySelector('div#ramen-detail h2').textContent = target.name.value
    // document.querySelector('div#ramen-detail h3').textContent = target.restaurant.value
    // document.querySelector('span#rating-display').textContent = target.rating.value
    // document.querySelector('p#comment-display').textContent = target.newcomment.value

    let newRamenItem = { 'name': target.name.value, 'restaurant': target.restaurant.value, 'image': target.image.value, 'rating': target.rating.value, 'comment': target.newcomment.value }
    // addImages(newRamenItem)
    addNewRamen(newRamenItem)
}

function addNewRamen(body) {
    fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    // .then(res => res.json())
    .then(console.log)
    .catch(console.error)
}

function displayCard(array) {
    document.querySelector('div#ramen-detail img').src = array.image
    document.querySelector('div#ramen-detail h2').textContent = array.name
    document.querySelector('div#ramen-detail h3').textContent = array.restaurant

    document.querySelector('span#rating-display').textContent = array.rating
    document.querySelector('p#comment-display').textContent = array.comment
}


firstFetch()

